/* ============================================================
   tracker.js  — Anonymous reader tracking (no personal data)
   ============================================================
   Uses jsonbin.io (free tier) as a shared JSON store.
   ZERO personal info: only page number, device type, timestamps.
   ============================================================ */

(function () {
    'use strict';

    /* ── ⚙️  FILL THESE IN ─────────────────────────────────── */
    const BIN_ID = '6a0aa754c0954111d83d24f5';           // e.g. '6830f04bacd3cb34a8c96bca'
    const API_KEY = '$2a$10$hTzXL1cRs0dHKpRwFDEHMeV3iLFGliqN9YJE8Wtua6taBeNx0XbMS';  // your jsonbin.io X-Access-Key
    /* ─────────────────────────────────────────────────────── */

    const BASE = 'https://api.jsonbin.io/v3/b';

    /* Track last known error so admin panel can show it */
    let lastError = null;
    let writeInProgress = false;
    let pendingWrite = null; // page index queued while a write is running

    /* ── Helpers ───────────────────────────────────────────── */
    function uuid() {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    function deviceType() {
        return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
    }

    function isConfigured() {
        return BIN_ID !== '__BIN_ID__' && API_KEY !== '__JSONBIN_API_KEY__';
    }

    function makeHeaders() {
        return {
            'Content-Type': 'application/json',
            'X-Access-Key': API_KEY,
            'X-Bin-Versioning': 'false',
        };
    }

    /* Fresh anonymous ID per tab (vanishes when tab closes) */
    const SESSION_ID = (() => {
        const key = 'boh_sid';
        let id = sessionStorage.getItem(key);
        if (!id) { id = uuid(); sessionStorage.setItem(key, id); }
        return id;
    })();

    /* ── Read bin ──────────────────────────────────────────── */
    async function readBin() {
        const res = await fetch(`${BASE}/${BIN_ID}/latest`, {
            headers: makeHeaders(),
        });

        if (!res.ok) {
            const text = await res.text().catch(() => res.status);
            throw new Error(`Read failed ${res.status}: ${text}`);
        }

        const json = await res.json();

        // Preferred wrapper format: { "readers": [] }
        // jsonbin.io rejects a bare empty array [] as "Bin cannot be blank"
        if (json.record && Array.isArray(json.record.readers)) {
            return json.record.readers;
        }
        // Legacy bare-array fallback (in case old data exists)
        if (Array.isArray(json.record)) {
            return json.record;
        }
        throw new Error('Unexpected bin format. Delete and re-create with content: {"readers":[]}');
    }

    /* ── Write bin ─────────────────────────────────────────── */
    async function writeBin(sessions) {
        const res = await fetch(`${BASE}/${BIN_ID}`, {
            method: 'PUT',
            headers: makeHeaders(),
            // Wrap in an object so jsonbin never sees an empty array as "blank"
            body: JSON.stringify({ readers: sessions }),
        });

        if (!res.ok) {
            const text = await res.text().catch(() => res.status);
            throw new Error(`Write failed ${res.status}: ${text}`);
        }
    }

    /* ── Upsert session (read -> merge -> write) ───────────── */
    async function upsertSession(pageIndex) {
        if (!isConfigured()) {
            lastError = 'not-configured';
            return;
        }

        /* If a write is already running, just queue the latest page */
        if (writeInProgress) {
            pendingWrite = pageIndex;
            return;
        }

        writeInProgress = true;
        lastError = null;

        try {
            const sessions = await readBin();
            const now = new Date().toISOString();

            const existing = sessions.find(s => s.id === SESSION_ID);
            const entry = {
                id: SESSION_ID,
                page: pageIndex,
                device: deviceType(),
                started: existing ? existing.started : now,
                lastSeen: now,
            };

            const idx = sessions.findIndex(s => s.id === SESSION_ID);
            if (idx >= 0) sessions[idx] = entry;
            else sessions.push(entry);

            // Keep last 100 sessions only
            await writeBin(sessions.slice(-100));

        } catch (err) {
            lastError = err.message;
            console.error('[BOH Tracker]', err.message);
        } finally {
            writeInProgress = false;
            /* Flush any page flip that happened while we were writing */
            if (pendingWrite !== null) {
                const queued = pendingWrite;
                pendingWrite = null;
                upsertSession(queued);
            }
        }
    }

    /* ── Diagnostic: write + read back to verify ───────────── */
    async function testConnection() {
        if (!isConfigured()) return { ok: false, error: 'Fill in BIN_ID and API_KEY in tracker.js' };
        try {
            const sessions = await readBin();
            await writeBin(sessions); // test PUT permission
            return { ok: true, count: sessions.length };
        } catch (err) {
            return { ok: false, error: err.message };
        }
    }

    /* ── Public API ────────────────────────────────────────── */
    window.BOH_TRACKER = {
        track: (pageIndex) => upsertSession(pageIndex),
        fetchSessions: () => {
            if (!isConfigured()) return Promise.resolve([]);
            return readBin().catch(err => { lastError = err.message; return []; });
        },
        testConnection,
        getLastError: () => lastError,
        isConfigured,
        SESSION_ID,
    };

}());

/*
 +----------------------------------------------------------+
 |  HOW TO SET UP jsonbin.io  (free, ~3 min)                |
 |                                                          |
 |  1. Go to  https://jsonbin.io  -> Sign up (free).        |
 |                                                          |
 |  2. Click "+ Create Bin"                                 |
 |     * Name: anything (e.g. "boh-readers")                |
 |     * Content: paste EXACTLY this (copy the whole line): |
 |                                                          |
 |         {"readers":[]}                                   |
 |                                                          |
 |       (NOT just [] -- jsonbin rejects empty arrays!)     |
 |     * Private: YES                                       |
 |     * Click Save                                         |
 |                                                          |
 |  3. Copy the Bin ID from the URL:                        |
 |     https://jsonbin.io/b/6830f04b...  <- that part       |
 |                                                          |
 |  4. Go to Account -> API Keys -> "+ Create API Key"      |
 |     * Give it READ + UPDATE permissions                  |
 |     * Copy the key (starts with $2b$...)                 |
 |                                                          |
 |  5. Open js/tracker.js and replace:                      |
 |       __BIN_ID__           -> your Bin ID               |
 |       __JSONBIN_API_KEY__  -> your API Key              |
 |                                                          |
 |  6. Open the admin panel -> click "Test Connection"      |
 |     It should turn green: "Connected (0 readers in bin)" |
 |                                                          |
 |  Data stored per reader (ZERO personal info):            |
 |    id        random UUID, new every browser tab          |
 |    page      last page number reached                    |
 |    device    "mobile" or "desktop"                       |
 |    started   ISO timestamp of first open                 |
 |    lastSeen  ISO timestamp of last page flip             |
 +----------------------------------------------------------+
*/
