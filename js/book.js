/* ============================================================
   book.js  StPageFlip initialisation & page content
   ============================================================
   HOW TO CUSTOMISE:
   - Edit the PAGE_DATA array below to change text/quotes.
   - Replace emoji placeholders with <img> tags pointing to
     your own images inside any .polaroid-img-placeholder div.
   - To add more pages, push objects into PAGE_DATA and add
     matching entries in PAGE_MEMORIES inside antigravity.js.
   ============================================================ */

(function () {
  'use strict';

  /* ── Page content definitions ─────────────────────────── */
  /* Each pair becomes a two-page spread (left + right).
     Even index = right page, Odd index = left page.         */
  const PAGE_DATA = [
    /* 0  FRONT COVER (handled as cover by StPageFlip) */
    {
      isCover: true,
      side: 'front',
      html: `
        <div class="page page-cover" style="padding:0;overflow:hidden;position:relative;">
          <div class="cover-ornament">✦</div>
          <div class="cover-title" style="font-size:clamp(1rem,3vw,1.6rem)">Read fully only if you trust me !</div>
          <div class="cover-divider"></div>
        </div>`
    },

    /* 1  Chapter I left page */
    {
      html: `
        <div class="page --left page-inner">
        <div class="chapter-title">Hello Achu</div>
          <p class="page-body">

Yeh dekhte hi agar aapko irritation ya gussa aaya toh please I'am sorry… isse ignore kar dho.
Agar aisa nahi hai tabhi please isse padho. <br><br>

Iss message ko dekh ke aap yeh soch sakte ho ki me yeh sab kyu likh raha hu…
Lekin yeh koi timepass message nahi hai.
Na hi yeh aapka dil badalne ke liye likha gaya message hai.
Aur na hi yeh message isliye hai ki aap mujhe accept kar lo. <br><br>

Sach bolu toh mujhe khud nahi pata ki mujhme woh haq hai bhi ya nahi… aapse woh sab puchne,
Bs kuch baate hai jo me chahta hu ki aap samjhe. <br><br>

Bappa ko ya kisi aur ko beech me laaye bina… sirf apne dil aur aapse jo pyaar hai uss par yakeen rakh kr yeh sab likh raha hu…

<br><br>

Jaise aap khud ko sochte ho waise aap bilkul bhi buri ladki nahi ho.
Aapne mujhe hurt kiya, mujhe takleef di aisa sab soch rahe ho pr please aisa sochke khud ko neeche mat dikhao.
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          Sach bolu toh aap jaise ladki kisi ko milne ke liye bahut naseeb chahiye… nijja ma. <br><br>

          Aap yeh soch sakte ho ki agar yeh sab sach hai toh phir aaj hum iss haal mein kyun hai…
Lekin uska reason aap nahi ho. sirf situations aur misunderstandings hi hai aur meri galthi hai. <br><br>

me achase samajh chuka hu ki meri woh galthi se aap kithna thut gaye honge krke abhi ye bhi samajh paraha hu kisi ko hurt kar diye tho woh soch ke kitna dhuktha hai
lekin jitna aap soch rahe ho utna aapne mujhe kabhi hurt nahi kiya. Yeh sab ek normal relationship mein hota rehta hai.<br><br>

Aap mere success mein khush hote the, mujhe motivate karte the, meri har problem mein mere saath khade rehte the. Main bina bole mujhe jo pasand hai, aap woh sab karte the. <br><br>

jithna dhin aapke saath tha woh sabh ko leke hi bol raha hu… aap jaisi achhi ladki milna bahut mushkil hai. <br><br>




          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
          Yeh sab main sirf aapko achha feel karwane ke liye naahi aapkeliye bol raha. trust me, me jhut nahi bol raha hu… yeh sach hai, aur iss sach ka sabse bada proof yeh hai ki aaj bhi main aapse utna hi pyaar karta hu jaise ishke phele kartha tha. 
<br><br>

Aap bole the na ki aapse abhi kuch bhi karne nhi horaha kuch leke baite toh bhi woh karne mann nahi karta hai… aisa kyu horaha hai mujhe exactly nhi patah lekin, agar aapko bhi mere jaise ek dhusre se baat kare bina rhene nhi horaha hai toh please kuch socho math… me kidhar nahi jaa raha hu. naahi me aapko chod ke kabhi jaunga.
<br><br>
Aur agar aapko lagta hai ki mujhe kiss kiye mujhe trust kiye abhi 
kya karungi insecure feel horaha hai toh uska jawab sirf itna hi 
hai jis din maine aapko kiss kiya tha, ussi din maine dil se 
decide kar liya tha ki iss janam mein aapke alawa kisi aur ladki 
ko kabhi touch bhi nahi karunga, aur aaj bhi wahi keh raha hu 
me aapko kabhi chod kar nahi jaunga. Yeh mera love ke uper promise 
hai, aap mujhe poori tarah bharosa kar sakte ho… me aapko kabhi 
dhoka nahi dunga. <br><br>
</p>
        </div>`
    },{
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          Abhi ke liye please sab baath scohna chodo aage kya hoga aage dhekthe hai… sirf apne career par focus karo, jyadha socho mat, aap akele nahi ho… me hamesha aapke saath hu, sirf aapke liye.. <br><br>
          
          Yeh sab bolne se kya mera dil badal jayega puche toh sach bolu toh mujhe nahi pata. ye sab ushkeliye hai bhi nhi,
yeh sab bolne ka koi khaas reason bhi nahi hai. bs ishliye ki aap samjhe ki aap sochne jaise aap nhi ho..
<br><br>

Haa itne din mujhe bahut hurt hua tha, yeh sach hai.
lekin ab utna dard nhi hota… kyuki ab tak mujhe lagta tha ki maine aapko kho diya hai.
Par ab bas yeh soch kar khush hu ki aap memories ke form me mere saath ho.
<br><br>

abhi mere liye bas itna important hai ki ek din aapko successful aur khush dekhun.
uske liye mujhe jo bhi karna padega, me sab karne ke liye tayar hu.
<br>
Chahe aap mujhse kitni bhi nafrat karo, main hamesha aapke liye rahunga.
aapne mujh par itna bharosa kiya tha… bas iss ek baar aur mujh par trust karo.
Main aapko kabhi dhoka nahi dunga. <br><br>
          </p>
        </div>`
    },{
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
          Agar aapko mujh par bharosa hai, toh bas apne about me wapis “Ganpati Bappa Morya 🌺” rakho… mere liye woh kaafi hai.
Aur agar aapko yeh theek na lage, toh koi baat nahi, chod doh.
12 baje tak dekhe ke… phir me khud samajh jaunga ki aapko yeh sab pasand nahi hai abh. <br><br>

Aur mujhe koi ego nahi hai, puttu.
me aapko message kar sakta hu ya nahi mujhe khud samajh nahi aa raha tha… isliye nahi kiya. <br><br>

aur jo status lagata hu woh sirf apne dil ko thoda sambhalne ke liye lagata hu.
aap usse kyn like karte ho ye mujhe nahi pata… lekin sirf tabhi karo jab aapko sach me woh pasand ho.
agar aapko lagta hai ki nhi karne se mujhe hurt hoga toh please aisa sochke math like karo… dekho bhi mat. 
me kuch nahi sochunga. 🫂 ! <br><br>

aap soch sakthe ho ki mujhe hopes nhi dhena hai pr me toh aapko dhek ke hi khush hu uthne me hi love krthe rahunga

Aapke life me koi nhi hu abhi toh bhi at least aapka well wisher rehtha hu !!

          </p>
        </div>`
    },
    /* 11  BACK COVER */
    {
      isCover: true,
      side: 'back',
      html: `
        <div class="page page-cover cover-back">
          <div class="cover-ornament">✦</div>
          <div class="cover-title" style="font-size:clamp(1rem,3vw,1.6rem)">Hope you read it fully !</div>
          <div class="cover-divider"></div>
          <div class="cover-subtitle" style="color:black;">Thank you !!</div>
        </div>`
    },
  ];

  /* ── Book size calculation ─────────────────────────────── */
  function calcBookSize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    /* ── Phone: single-page portrait mode ── */
    if (vw <= 600) {
      const w = Math.round(vw * 0.96);
      const h = Math.min(Math.round(w * 1.42), Math.round(vh * 0.80));
      return { width: w, height: h, portrait: true };
    }

    /* ── Small tablet: squeeze two pages ── */
    if (vw < 900) {
      const w = Math.round((vw * 0.94) / 2);
      const h = Math.round(w / 0.66);
      return { width: w, height: h, portrait: false };
    }

    /* ── Desktop ── */
    const h = Math.min(Math.round(vh * 0.82), 700);
    const w = Math.round(h * 0.66);
    return { width: w, height: h, portrait: false };
  }

  /* ── Persistence helpers ──────────────────────────────── */
  const STORAGE_KEY = 'boh_last_page';
  const ADMIN_KEY = 'boh_admin_stats';   // { maxPage, sessions, lastSeen }

  function saveProgress(pageIndex) {
    try {
      localStorage.setItem(STORAGE_KEY, String(pageIndex));
      /* Update admin stats */
      const raw = localStorage.getItem(ADMIN_KEY);
      const stats = raw ? JSON.parse(raw) : { maxPage: 0, sessions: 0, lastSeen: null };
      if (pageIndex > stats.maxPage) stats.maxPage = pageIndex;
      stats.lastSeen = new Date().toISOString();
      localStorage.setItem(ADMIN_KEY, JSON.stringify(stats));
    } catch (_) { }
  }

  function loadLastPage() {
    try { return parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0; } catch (_) { return 0; }
  }

  function loadAdminStats() {
    try {
      const raw = localStorage.getItem(ADMIN_KEY);
      return raw ? JSON.parse(raw) : { maxPage: 0, sessions: 0, lastSeen: null };
    } catch (_) { return { maxPage: 0, sessions: 0, lastSeen: null }; }
  }

  /* ── Init book ────────────────────────────────────────── */
  let pageFlip = null;
  let bookInited = false;
  let isFirstInit = true;

  function initBook() {
    const container = document.getElementById('book-container');
    const stage = document.getElementById('book-stage');
    const { width, height, portrait } = calcBookSize();

    /* Stage width = 1 page in portrait mode, 2 pages in landscape */
    stage.style.width = portrait ? width + 'px' : (width * 2) + 'px';
    stage.style.height = height + 'px';

    const resumePage = loadLastPage();

    if (pageFlip) {
      pageFlip.destroy();
    }

    pageFlip = new St.PageFlip(container, {
      width,
      height,
      size: 'fixed',
      minWidth: width,
      maxWidth: width,
      minHeight: height,
      maxHeight: height,
      showCover: true,
      mobileScrollSupport: false,
      drawShadow: true,
      flippingTime: 700,
      usePortrait: portrait,
      startZIndex: 10,
      autoSize: false,
      clickEventForward: true,
      swipeDistance: portrait ? 20 : 30,
      showPageCount: false,
      startPage: isFirstInit ? resumePage : 0,
    });

    /* Build page elements */
    const pageEls = PAGE_DATA.map(({ html }) => {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.firstElementChild;
    });

    pageFlip.loadFromHTML(pageEls);

    /* Page flip event  save progress & track stats */
    pageFlip.on('flip', (e) => {
      saveProgress(e.data);
      updateAdminPanel();
    });

    /* Update nav button state */
    pageFlip.on('changeState', updateNavState);
    pageFlip.on('changeOrientation', updateNavState);

    if (isFirstInit) {
      /* bump session counter once per page load */
      try {
        const stats = loadAdminStats();
        stats.sessions = (stats.sessions || 0) + 1;
        localStorage.setItem(ADMIN_KEY, JSON.stringify(stats));
      } catch (_) { }

      /* Show resume toast if user was mid-read */
      if (resumePage > 0) showResumeBadge(resumePage);
      isFirstInit = false;
    }

    bookInited = true;
    updateNavState();
  }

  /* ── Nav buttons ──────────────────────────────────────── */
  function updateNavState() {
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    if (!pageFlip || !prevBtn) return;

    const curr = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();

    prevBtn.style.opacity = curr <= 0 ? '0.25' : '1';
    prevBtn.style.pointerEvents = curr <= 0 ? 'none' : 'all';
    nextBtn.style.opacity = curr >= total - 2 ? '0.25' : '1';
    nextBtn.style.pointerEvents = curr >= total - 2 ? 'none' : 'all';
  }

  document.getElementById('btn-prev').addEventListener('click', () => {
    if (pageFlip) pageFlip.flipPrev();
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    if (pageFlip) pageFlip.flipNext();
  });

  /* ── Responsive re-init ────────────────────────────────── */
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initBook, 220);
  });

  /* ── Resume toast ─────────────────────────────────────── */
  function showResumeBadge(pageIndex) {
    const toast = document.createElement('div');
    toast.id = 'resume-toast';
    toast.innerHTML = `
      <span>📖 Resuming from page ${pageIndex + 1}</span>
      <button id="resume-dismiss" aria-label="Dismiss">✕</button>
    `;
    document.body.appendChild(toast);
    document.getElementById('resume-dismiss').addEventListener('click', () => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 400);
    });
    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
      }
    }, 4000);
  }

  /* ── Admin panel ──────────────────────────────────────── */
  function buildAdminPanel() {
    const panel = document.createElement('div');
    panel.id = 'admin-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = `
      <div class="admin-header">
        <span class="admin-title">👁 Reading Stats</span>
        <button class="admin-close" id="admin-close-btn" aria-label="Close admin panel">✕</button>
      </div>
      <div class="admin-body" id="admin-body">
        <div class="admin-stat">
          <span class="stat-label">Pages Read</span>
          <span class="stat-value" id="admin-pages"></span>
        </div>
        <div class="admin-stat">
          <span class="stat-label">Total Pages</span>
          <span class="stat-value" id="admin-total">${PAGE_DATA.length}</span>
        </div>
        <div class="admin-stat">
          <span class="stat-label">Sessions</span>
          <span class="stat-value" id="admin-sessions"></span>
        </div>
        <div class="admin-stat">
          <span class="stat-label">Last Seen</span>
          <span class="stat-value" id="admin-lastseen"></span>
        </div>
        <div class="admin-progress-wrap">
          <div class="admin-progress-bar"><div id="admin-progress-fill"></div></div>
          <span id="admin-progress-pct">0%</span>
        </div>
        <button class="admin-reset" id="admin-reset-btn">Reset Progress</button>
      </div>
    `;
    document.body.appendChild(panel);

    document.getElementById('admin-close-btn').addEventListener('click', () => {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    });

    document.getElementById('admin-reset-btn').addEventListener('click', () => {
      if (confirm('Reset all reading progress?')) {
        try {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(ADMIN_KEY);
        } catch (_) { }
        updateAdminPanel();
      }
    });
  }

  function updateAdminPanel() {
    const stats = loadAdminStats();
    const total = PAGE_DATA.length;
    const read = Math.min(stats.maxPage + 1, total);
    const pct = Math.round((read / total) * 100);

    const el = (id) => document.getElementById(id);
    if (!el('admin-pages')) return;

    el('admin-pages').textContent = read;
    el('admin-sessions').textContent = stats.sessions || 0;
    el('admin-lastseen').textContent = stats.lastSeen
      ? new Date(stats.lastSeen).toLocaleString()
      : 'Never';
    el('admin-progress-fill').style.width = pct + '%';
    el('admin-progress-pct').textContent = pct + '%';
  }

  function buildAdminTrigger() {
    const btn = document.createElement('button');
    btn.id = 'admin-trigger';
    btn.setAttribute('aria-label', 'Admin');
    btn.title = 'Admin';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      const panel = document.getElementById('admin-panel');
      const open = panel.classList.toggle('open');
      panel.setAttribute('aria-hidden', String(!open));
      if (open) updateAdminPanel();
    });
  }

  /* ── Boot ─────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', () => {
    initBook();
    buildAdminPanel();
    buildAdminTrigger();
  });

}());
