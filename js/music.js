/* ============================================================
   music.js — Per-page background music player
   ============================================================
   HOW TO ADD SONGS:
   1. Drop your audio files into the  audio/  folder
      (create it next to index.html if it doesn't exist yet).
   2. Edit the PAGE_SONGS array below.
      Each entry maps to the page at that index (0 = cover).
      Use  null  for pages that should play no song / keep the
      previous song going.

   SUPPORTED FORMATS:  mp3 · ogg · wav · m4a · aac
   External URLs also work (YouTube links do NOT — use direct
   file URLs or services like Dropbox, pCloud, etc.).

   EXAMPLE ENTRY:
     { src: 'audio/page1.mp3', title: 'Tum Hi Ho', artist: 'Arijit Singh' }

   ============================================================ */

(function () {
    'use strict';

    /* ══════════════════════════════════════════════════════════
       ① CONFIGURE YOUR SONGS HERE
          Index 0  = Cover page
          Index 1  = Page 1 … and so on
          Use  null  to keep the previous track playing.
       ══════════════════════════════════════════════════════════ */
    const PAGE_SONGS = [
        /* 0  Cover */
        { src: 'audio/Enna Solla Pogirai.mp3', title: 'Cover', artist: 'Mano' },
        null,
    /* 2 */ null,
    /* 3 */ null,
    /* 4 */ null,
    /* 5 */ null,
    /* 6 */ null,
    /* 7 */ null,
    /* 8 */ null,
    /* 9 */ null,
    /* 10 */ null,
    /* 11 */ null,
    /* 12 */ null,
    /* 13 */ null,
    /* 14 */ null,
    /* 15 */ null,
    /* 16 */ null,
    /* 17 */ null,
    /* 18 */ null,
    /* 19 */ null,
    /* 20 */ null,
    /* 21 */ null,
    /* 22 */ null,
    /* 23 */ null,
    /* 24 */ null,
    /* 25 */ null,
    /* 26 */ null,
    /* 27 */ null,
    /* 28 */ null,
    /* 29 */ null,
    /* 30 */ null,
    /* 31 */ null,
    /* 32 */ null,
    /* 33 */ null,
    /* 34 */ null,
    /* 35 */ null,
    /* 36 */ null,
    /* 37 */ null,
    /* 38 */ null,
    /* 39 */ null,
    /* 40 */ null,
    /* 41 */ null,
    /* 42 */ null,
    /* 43 */ null,
    /* 44 */ null,
    /* 45 */ null,
    /* 46 */ null,
    /* 47 */ null,
    /* 48 */ null,
    /* 49 */ null,
    /* 50 */ null,
    /* 51 */ null,
    /* 52 */ null,
    /* 53 */ null,
    /* 54 */ null,
    /* 55 */ null,
    /* 56 */ null,
    /* 57 */ null,
    /* 58 */ null,
    /* 59 */ null,
    /* 60 */ null,
    /* 61 */ null,
    /* 62 */ null,
    /* 63 */ null,
    /* 64 */ null,
    /* 65 */ null,
    /* 66 */ null,
    /* 67 */ null,
    /* 68 */ null,
    /* 69 */ null,
    /* 70 */ null,
    /* 71 */ null,
    /* 72 */ null,
    /* 73 */{ src: 'audio/climax.mp3', title: 'END', artist: 'Sweeto' },
    /* 74 */ null,
    /* 75 */ null,
    /* 76 */ null,
    /* 77 */ null,
        /* 78  Back cover */
        null,
    ];

    /* ══════════════════════════════════════════════════════════
       ② PLAYER SETTINGS  (tweak freely)
       ══════════════════════════════════════════════════════════ */
    const DEFAULT_VOLUME = 0.55;  /* 0.0 – 1.0                      */
    const FADE_DURATION = 1200;  /* ms — crossfade between tracks   */
    const FADE_STEPS = 40;    /* how many steps in the fade      */
    const LOOP = true;  /* loop each track                 */

    /* ══════════════════════════════════════════════════════════
       ③  INTERNAL STATE  — do not edit below this line
       ══════════════════════════════════════════════════════════ */
    let audio = null;   /* active HTMLAudioElement          */
    let currentSrc = null;   /* src of currently loaded track    */
    let userPaused = false;  /* did the user explicitly pause?   */
    let volume = DEFAULT_VOLUME;
    let fadeTimer = null;

    /* ── Build player UI ─────────────────────────────────────── */
    function buildPlayer() {
        const el = document.createElement('div');
        el.id = 'boh-player';
        el.setAttribute('aria-label', 'Music player');
        el.innerHTML = `
    `;
        document.body.appendChild(el);

        /* Wire controls */
        document.getElementById('boh-play-btn').addEventListener('click', togglePlay);
        document.getElementById('boh-vol-slider').addEventListener('input', function () {
            volume = parseFloat(this.value);
            if (audio) audio.volume = volume;
            updateVolIcon();
        });
        document.getElementById('boh-player-toggle').addEventListener('click', minimise);
        document.getElementById('boh-player-pill').addEventListener('click', maximise);
    }

    /* ── Player visibility ────────────────────────────────────── */
    function minimise() {
        const p = document.getElementById('boh-player');
        if (p) p.classList.add('collapsed');
    }
    function maximise() {
        const p = document.getElementById('boh-player');
        if (p) p.classList.remove('collapsed');
    }

    /* ── Playback controls ────────────────────────────────────── */
    function togglePlay() {
        if (!audio || !audio.src || audio.src === location.href) {
            /* No song loaded yet */
            return;
        }
        if (audio.paused) {
            audio.play().catch(() => { });
            userPaused = false;
        } else {
            audio.pause();
            userPaused = true;
        }
        updatePlayIcon();
    }

    function updatePlayIcon() {
        const icon = document.getElementById('boh-play-icon');
        if (icon && audio) icon.textContent = audio.paused ? '▶' : '❚❚';
    }

    function updateVolIcon() {
        const icon = document.getElementById('boh-vol-icon');
        if (!icon) return;
        icon.textContent = volume === 0 ? '🔇' : volume < 0.4 ? '🔉' : '🔊';
    }

    function updateTrackInfo(song) {
        const title = document.getElementById('boh-track-title');
        const artist = document.getElementById('boh-track-artist');
        if (!title) return;

        if (!song || !song.src) {
            title.textContent = '♪ No song set for this page';
            artist.textContent = '';
            return;
        }
        title.textContent = song.title || '♪ Playing';
        artist.textContent = song.artist || '';
    }

    /* ── Crossfade-in helper ──────────────────────────────────── */
    function fadeIn(audioEl) {
        clearTimeout(fadeTimer);
        audioEl.volume = 0;
        let step = 0;
        const interval = FADE_DURATION / FADE_STEPS;
        const tick = setInterval(() => {
            step++;
            audioEl.volume = Math.min(volume, (step / FADE_STEPS) * volume);
            if (step >= FADE_STEPS) clearInterval(tick);
        }, interval);
    }

    function fadeOut(audioEl, cb) {
        clearTimeout(fadeTimer);
        let step = FADE_STEPS;
        const interval = FADE_DURATION / FADE_STEPS;
        const startVol = audioEl.volume;
        const tick = setInterval(() => {
            step--;
            audioEl.volume = Math.max(0, (step / FADE_STEPS) * startVol);
            if (step <= 0) {
                clearInterval(tick);
                if (cb) cb();
            }
        }, interval);
    }

    /* ── Core: switch song for a page ────────────────────────── */
    function switchSong(pageIndex) {
        const song = PAGE_SONGS[pageIndex] !== undefined ? PAGE_SONGS[pageIndex] : null;

        /* null = keep current song playing */
        if (song === null) return;

        /* Same src already playing — nothing to do */
        if (song.src && song.src === currentSrc && audio && !audio.paused) {
            updateTrackInfo(song);
            return;
        }

        /* Empty src — stop music */
        if (!song.src) {
            updateTrackInfo(song);
            if (audio && !audio.paused) {
                fadeOut(audio, () => {
                    audio.pause();
                    audio.src = '';
                    currentSrc = null;
                    updatePlayIcon();
                });
            }
            return;
        }

        /* New track — crossfade */
        const oldAudio = audio;

        if (oldAudio && !oldAudio.paused) {
            fadeOut(oldAudio, startNewTrack);
        } else {
            startNewTrack();
        }

        function startNewTrack() {
            if (oldAudio) { oldAudio.pause(); oldAudio.src = ''; }

            audio = new Audio();
            audio.loop = LOOP;
            audio.volume = 0;
            audio.src = song.src;
            currentSrc = song.src;

            audio.addEventListener('canplay', () => {
                if (!userPaused) {
                    audio.play()
                        .then(() => { fadeIn(audio); updatePlayIcon(); })
                        .catch(() => {
                            /* Autoplay blocked — show play button ready to go */
                            updatePlayIcon();
                        });
                }
            }, { once: true });

            audio.addEventListener('error', () => {
                currentSrc = null;
                const t = document.getElementById('boh-track-title');
                if (t) t.textContent = '⚠ Could not load audio';
            });

            updateTrackInfo(song);
            updatePlayIcon();
        }
    }

    /* ── First-interaction unlock (autoplay policy) ──────────── */
    function unlockAutoplay() {
        if (!audio || !audio.paused) return;
        if (!userPaused && audio.src) {
            audio.play().then(() => { fadeIn(audio); updatePlayIcon(); }).catch(() => { });
        }
    }

    /* ── Boot ────────────────────────────────────────────────── */
    window.addEventListener('DOMContentLoaded', () => {
        buildPlayer();

        /* Unlock on first user gesture */
        ['click', 'touchstart', 'keydown'].forEach(evt =>
            document.addEventListener(evt, unlockAutoplay, { once: true, passive: true })
        );

        /* Load the song for the current page (restored from localStorage) */
        const startPage = parseInt(localStorage.getItem('boh_last_page') || '0', 10);
        switchSong(startPage || 0);
    });

    /* ── Public API ──────────────────────────────────────────── */
    window.BOH_MUSIC = {
        switchSong,
        pause: () => { if (audio) { audio.pause(); userPaused = true; updatePlayIcon(); } },
        resume: () => { if (audio && audio.src) { audio.play().catch(() => { }); userPaused = false; updatePlayIcon(); } },
        setVolume: v => { volume = v; if (audio) audio.volume = v; },
        /* Expose PAGE_SONGS so admin/editor can inspect at runtime */
        PAGE_SONGS,
    };

}());
