/* ============================================================
   antigravity.js — Floating memory spawner & physics
   ============================================================
   PUBLIC API:
     spawnFloatingMemories(pageIndex)
       Call this after each page turn. pageIndex determines
       which set of memories to release.

   GRAVITY PARAMETERS (adjust freely):
     SPAWN_COUNT      — elements spawned per page turn (3–6)
     DRIFT_SPEED_Y    — base upward velocity (px/sec) — higher = faster rise
     WOBBLE_AMPLITUDE — side-to-side drift amplitude (px)
     WOBBLE_PERIOD    — full wobble cycle duration (sec)
     LIFETIME         — seconds before element fades out
     EXPANDED_SCALE   — scale factor when a memory is clicked/hovered
   ============================================================ */

(function () {
    'use strict';

    /* ── Gravity parameters ───────────────────────────────── */
    const SPAWN_COUNT = 4;   /* memories released per flip          */
    const DRIFT_SPEED_Y = 60;  /* px/sec upward drift                 */
    const WOBBLE_AMPLITUDE = 55;  /* px left/right wobble                */
    const WOBBLE_PERIOD = 5;   /* sec per full wobble cycle           */
    const LIFETIME = 13;  /* sec before auto-fade                */
    const EXPANDED_SCALE = 3.0; /* scale on click                      */
    const HOVER_SCALE = 1.45;/* scale on hover                      */

    /* ── Per-page memory definitions ─────────────────────── */
    /* Each entry describes possible elements that can spawn from that page.
       Add/edit entries here to personalise the content.                    */
    const PAGE_MEMORIES = [
        /* Page 0 — Cover */
        [
            { type: 'orb', gold: true },
            { type: 'quote', text: 'Every love story is beautiful…' },
            { type: 'orb', gold: false },
            { type: 'polaroid', emoji: '🌹', caption: 'Day One' },
        ],
        /* Page 1 — First Hello */
        [
            { type: 'polaroid', emoji: '✉️', caption: 'The first letter' },
            { type: 'quote', text: 'You had me at hello.' },
            { type: 'orb', gold: true },
            { type: 'polaroid', emoji: '☕', caption: 'Our first café' },
            { type: 'quote', text: 'Some things are meant to be.' },
        ],
        /* Page 2 — Letters */
        [
            { type: 'polaroid', emoji: '📝', caption: 'Written in cursive' },
            { type: 'quote', text: '"I carry your heart with me." — E.E. Cummings' },
            { type: 'orb', gold: false },
            { type: 'orb', gold: true },
        ],
        /* Page 3 — Golden Days */
        [
            { type: 'polaroid', emoji: '🌅', caption: 'Golden hour' },
            { type: 'polaroid', emoji: '🎞️', caption: 'Summer reels' },
            { type: 'quote', text: 'In your light I learn how to love.' },
            { type: 'orb', gold: true },
            { type: 'orb', gold: true },
        ],
        /* Page 4 — Promises */
        [
            { type: 'polaroid', emoji: '💍', caption: 'Always & forever' },
            { type: 'quote', text: '"I promise to always choose you."' },
            { type: 'orb', gold: false },
            { type: 'polaroid', emoji: '🕯️', caption: 'Our vow' },
        ],
        /* Page 5 — Quiet Moments */
        [
            { type: 'quote', text: 'Love is in the quiet in-between.' },
            { type: 'orb', gold: false },
            { type: 'polaroid', emoji: '🌙', caption: 'Late nights' },
            { type: 'orb', gold: true },
        ],
        /* Page 6 — Epilogue */
        [
            { type: 'polaroid', emoji: '🌸', caption: 'And so it goes…' },
            { type: 'quote', text: 'Every page a memory. Every memory a world.' },
            { type: 'orb', gold: true },
            { type: 'orb', gold: false },
            { type: 'orb', gold: true },
        ],
    ];

    /* ── Internal state ───────────────────────────────────── */
    const active = [];   /* { el, tl, wobbleStart, baseX, baseY } */
    const backdrop = document.getElementById('memory-backdrop');
    let expanded = null; /* currently expanded element */

    /* ── Helpers ──────────────────────────────────────────── */
    function rand(min, max) { return min + Math.random() * (max - min); }
    function randItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

    /* ── Element builders ─────────────────────────────────── */
    function buildPolaroid({ emoji, caption }) {
        const el = document.createElement('div');
        el.className = 'floating-memory fm-polaroid';
        el.innerHTML = `
      <div class="fm-img">${emoji}</div>
      <div class="fm-caption">${caption}</div>`;
        return el;
    }

    function buildQuote({ text }) {
        const el = document.createElement('div');
        el.className = 'floating-memory fm-quote';
        el.innerHTML = `<p>${text}</p>`;
        return el;
    }

    function buildOrb({ gold }) {
        const el = document.createElement('div');
        el.className = 'floating-memory fm-orb' + (gold ? ' gold' : '');
        const size = rand(18, 36);
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        return el;
    }

    function buildElement(def) {
        switch (def.type) {
            case 'polaroid': return buildPolaroid(def);
            case 'quote': return buildQuote(def);
            case 'orb': return buildOrb(def);
        }
    }

    /* ── Spawn burst from near book centre ───────────────── */
    function getBookRect() {
        const stage = document.getElementById('book-stage');
        if (stage) {
            const r = stage.getBoundingClientRect();
            return { cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
        }
        return { cx: window.innerWidth / 2, cy: window.innerHeight / 2 };
    }

    /* ── Physics tick (rAF) ────────────────────────────────── */
    let lastTime = null;

    function tick(ts) {
        if (!lastTime) lastTime = ts;
        const dt = Math.min((ts - lastTime) / 1000, 0.05); /* cap at 50ms */
        lastTime = ts;

        const W = window.innerWidth;
        const H = window.innerHeight;

        for (let i = active.length - 1; i >= 0; i--) {
            const item = active[i];
            if (item.expanded) continue; /* frozen while expanded */
            if (item.paused) continue; /* frozen on hover       */

            const elapsed = (ts - item.startTime) / 1000;

            /* Upward drift */
            item.y -= DRIFT_SPEED_Y * dt * item.speedMult;

            /* Sinusoidal horizontal wobble */
            const wobbleX = Math.sin((elapsed / WOBBLE_PERIOD) * Math.PI * 2) * WOBBLE_AMPLITUDE * item.wobbleMult;
            item.x = item.baseX + wobbleX;

            /* Slow rotation */
            item.rotation += item.rotSpeed * dt;

            /* Bounce off left/right edges */
            if (item.x < 8) { item.baseX += 14; item.wobbleMult *= -1; }
            if (item.x > W - 8) { item.baseX -= 14; item.wobbleMult *= -1; }

            /* Apply transform */
            item.el.style.left = item.x + 'px';
            item.el.style.top = item.y + 'px';
            item.el.style.transform = `rotate(${item.rotation}deg) scale(${item.scale})`;

            /* Fade out in last 2.5 sec */
            const timeLeft = item.lifetime - elapsed;
            if (timeLeft < 2.5) {
                item.el.style.opacity = clamp(timeLeft / 2.5, 0, 1).toFixed(3);
            }

            /* Remove when timer up or above viewport */
            if (elapsed >= item.lifetime || item.y < -150) {
                item.el.remove();
                active.splice(i, 1);
            }
        }

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    /* ── Hover interaction ────────────────────────────────── */
    function onHoverEnter(item) {
        if (item.expanded) return;
        item.paused = true;
        item.scale = HOVER_SCALE;
        item.el.style.transform = `rotate(${item.rotation}deg) scale(${HOVER_SCALE})`;
        item.el.classList.add('focused');
    }

    function onHoverLeave(item) {
        if (item.expanded) return;
        item.paused = false;
        item.scale = 1;
        item.el.classList.remove('focused');
    }

    /* ── Click interaction ────────────────────────────────── */
    function expandItem(item) {
        if (expanded && expanded !== item) collapseExpanded();
        expanded = item;
        item.expanded = true;
        item.paused = true;

        const W = window.innerWidth;
        const H = window.innerHeight;

        /* Centre on screen */
        const rect = item.el.getBoundingClientRect();
        const dx = W / 2 - (rect.left + rect.width / 2);
        const dy = H / 2 - (rect.top + rect.height / 2);

        item.el.style.transition = 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), left 0.45s ease, top 0.45s ease, opacity 0.45s';
        item.el.style.left = (item.x + dx) + 'px';
        item.el.style.top = (item.y + dy) + 'px';
        item.el.style.transform = `rotate(0deg) scale(${EXPANDED_SCALE})`;
        item.el.style.opacity = '1';
        item.el.classList.add('expanded');

        backdrop.classList.add('active');
    }

    function collapseExpanded() {
        if (!expanded) return;
        const item = expanded;
        expanded = null;
        item.expanded = false;
        item.paused = false;
        item.scale = 1;

        item.el.style.transition = 'transform 0.35s ease, left 0.35s ease, top 0.35s ease';
        item.el.style.left = item.x + 'px';
        item.el.style.top = item.y + 'px';
        item.el.style.transform = `rotate(${item.rotation}deg) scale(1)`;
        item.el.classList.remove('expanded');

        backdrop.classList.remove('active');

        /* Remove transition after animation */
        setTimeout(() => { item.el.style.transition = ''; }, 350);
    }

    backdrop.addEventListener('click', collapseExpanded);

    /* ── Public: spawnFloatingMemories ────────────────────── */
    window.spawnFloatingMemories = function spawnFloatingMemories(pageIndex) {
        const pool = PAGE_MEMORIES[pageIndex % PAGE_MEMORIES.length];
        if (!pool) return;

        /* Shuffle and pick SPAWN_COUNT items */
        const shuffled = pool.slice().sort(() => Math.random() - 0.5);
        const toSpawn = shuffled.slice(0, SPAWN_COUNT);

        const { cx, cy } = getBookRect();

        toSpawn.forEach((def, i) => {
            const el = buildElement(def);
            if (!el) return;

            /* Stagger spawn slightly */
            setTimeout(() => {
                document.body.appendChild(el);

                /* Random starting position near book */
                const angle = rand(-Math.PI * 0.65, -Math.PI * 0.35) + rand(-0.4, 0.4);
                const radius = rand(60, 160);
                const startX = cx + Math.cos(angle) * radius - el.offsetWidth / 2;
                const startY = cy + Math.sin(angle) * radius - el.offsetHeight / 2;

                const item = {
                    el,
                    x: startX,
                    y: startY,
                    baseX: startX,
                    rotation: rand(-25, 25),
                    rotSpeed: rand(-18, 18),
                    scale: 1,
                    speedMult: rand(0.7, 1.4),
                    wobbleMult: Math.random() < 0.5 ? 1 : -1,
                    lifetime: LIFETIME + rand(-3, 3),
                    startTime: performance.now(),
                    paused: false,
                    expanded: false,
                };

                el.style.left = startX + 'px';
                el.style.top = startY + 'px';
                el.style.opacity = '0';

                /* Fade in */
                requestAnimationFrame(() => {
                    el.style.transition = 'opacity 0.6s ease';
                    el.style.opacity = '1';
                    setTimeout(() => { el.style.transition = ''; }, 650);
                });

                /* Interactions */
                el.addEventListener('mouseenter', () => onHoverEnter(item));
                el.addEventListener('mouseleave', () => onHoverLeave(item));
                el.addEventListener('click', (e) => { e.stopPropagation(); expandItem(item); });
                /* Touch support */
                el.addEventListener('touchstart', (e) => { e.stopPropagation(); expandItem(item); }, { passive: true });

                active.push(item);
            }, i * 220); /* 220ms stagger between spawns */
        });
    };

}());
