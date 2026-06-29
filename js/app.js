// ─── Items list (0–99) ────────────────────────────────────────────────────────
const ITEMS = [
  /* 0 */ '⭕ ריק',
  /* 1 */ '⭐ כוכב בודד',
  /* 2 */ '💫 זוגיות',
  /* 3 */ '🌸 שלישייה',
  /* 4 */ '🔮 ארבעה',
  /* 5 */ '💎 חמישה',
  /* 6 */ '🌟 שישה',
  /* 7 */ '🌈 שבעה',
  /* 8 */ '🌊 שמונה',
  /* 9 */ '🦋 תשעה',
  /* 10 */ '🦁 אריה',
  /* 11 */ '🌙 ירח',
  /* 12 */ '⭐ שנים עשר',
  /* 13 */ '🔮 מזל',
  /* 14 */ '🐉 דרקון',
  /* 15 */ '🌺 יופי',
  /* 16 */ '💙 כחול',
  /* 17 */ '🌸 שחר',
  /* 18 */ '🏆 אלוף',
  /* 19 */ '🌋 הר גבוה',
  /* 20 */ '🦅 נשר',
  /* 21 */ '🌞 שמש',
  /* 22 */ '🐺 זאב',
  /* 23 */ '🏺 כד',
  /* 24 */ '🌺 שדה פרחים',
  /* 25 */ '🎪 קרקס',
  /* 26 */ '🦄 חד קרן',
  /* 27 */ '🌴 דקל',
  /* 28 */ '🐬 דולפין',
  /* 29 */ '🌠 כוכב נופל',
  /* 30 */ '🦩 פלמינגו',
  /* 31 */ '🎭 תיאטרון',
  /* 32 */ '🌵 צבר',
  /* 33 */ '🦁 גור אריות',
  /* 34 */ '🎻 כינור',
  /* 35 */ '🌊 גלים',
  /* 36 */ '🦜 תוכי',
  /* 37 */ '🏯 טירה',
  /* 38 */ '🐅 נמר',
  /* 39 */ '🌺 אורכידאה',
  /* 40 */ '🎨 צבעים',
  /* 41 */ '🦢 ברבור',
  /* 42 */ '🌍 כדור הארץ',
  /* 43 */ '🐊 תנין',
  /* 44 */ '🎠 קרוסלה',
  /* 45 */ '🪐 לכת',
  /* 46 */ '🦋 פרפר',
  /* 47 */ '🏝️ אי',
  /* 48 */ '🐘 פיל',
  /* 49 */ '🌻 חמנייה',
  /* 50 */ '🎺 חצוצרה',
  /* 51 */ '🦒 ג׳ירפה',
  /* 52 */ '🌃 לילה',
  /* 53 */ '🐠 דג טרופי',
  /* 54 */ '🎯 מטרה',
  /* 55 */ '🌙 לילה כוכבי',
  /* 56 */ '🦁 מלך',
  /* 57 */ '🏔️ פסגה',
  /* 58 */ '🐢 צב',
  /* 59 */ '🌸 גן',
  /* 60 */ '🎸 גיטרה',
  /* 61 */ '🦅 נשר דאה',
  /* 62 */ '🌊 אוקיינוס',
  /* 63 */ '🐆 נמר מנוקד',
  /* 64 */ '🎠 חלום',
  /* 65 */ '🌺 שדה',
  /* 66 */ '🦩 להקה',
  /* 67 */ '🏺 אגרטל',
  /* 68 */ '🐋 לוויתן',
  /* 69 */ '🌠 ממטר',
  /* 70 */ '🦊 שועל',
  /* 71 */ '🌴 חורשה',
  /* 72 */ '🐬 קפיצה',
  /* 73 */ '🌋 לבה',
  /* 74 */ '🎭 בובות',
  /* 75 */ '🌵 מדבר',
  /* 76 */ '🦄 כסף',
  /* 77 */ '🌅 שקיעה',
  /* 78 */ '🐅 גור',
  /* 79 */ '🌍 כחול',
  /* 80 */ '🎨 אבסטרקט',
  /* 81 */ '🦢 להקת ברבורים',
  /* 82 */ '🏯 ארמון זהב',
  /* 83 */ '🐊 יאגואר',
  /* 84 */ '🎪 קסמים',
  /* 85 */ '🌌 גלקסיה',
  /* 86 */ '🦋 גולם',
  /* 87 */ '🏝️ פרדיס',
  /* 88 */ '🐘 אפריקה',
  /* 89 */ '🌻 שדה חמניות',
  /* 90 */ '🎺 ג׳אז',
  /* 91 */ '🦒 אפריקאית',
  /* 92 */ '🌃 עיר',
  /* 93 */ '🐠 שונית',
  /* 94 */ '🏹 קשת',
  /* 95 */ '🌙 אור',
  /* 96 */ '🦁 גאווה',
  /* 97 */ '🏔️ טיפוס',
  /* 98 */ '🐢 צב קדום',
  /* 99 */ '✨ קסם נצחי',
];

// Strip leading emoji from display text
function stripEmoji(str) {
  return str.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, '').trim();
}

// Build static list DOM — items 1–99 (id matches display number)
const listEl = document.getElementById('itemsList');
ITEMS.slice(1, 100).forEach((text, i) => {
  const row = document.createElement('div');
  row.className = 'list-item';
  row.id = `item-${i + 1}`;
  row.innerHTML = `
    <div class="list-body">
      <div class="list-text">${stripEmoji(text)}</div>
    </div>
    <span class="list-num">${i + 1}.</span>`;
  listEl.appendChild(row);
});

// ─── Icon data ────────────────────────────────────────────────────────────────
const DIGIT_META = [
  {name:'Zerio'},{name:'Unify'},{name:'Dualis'},{name:'Trios'},
  {name:'Quadrix'},{name:'Pentavo'},{name:'Hexify'},{name:'Septum'},
  {name:'Octavia'},{name:'Novem'},
];
const SYMBOL_META = [
  {emoji:'🎮',name:'Gamelix', shape:'squircle'},{emoji:'🎵',name:'Melodia', shape:'rounded'},
  {emoji:'📷',name:'Snaply',  shape:'squircle'},{emoji:'⚡',name:'Voltix',  shape:'circle'},
  {emoji:'🌙',name:'Lunara',  shape:'squircle'},{emoji:'🎯',name:'Focusy',  shape:'sharp'},
  {emoji:'🔥',name:'Blazer',  shape:'squircle'},{emoji:'💎',name:'Gemify',  shape:'circle'},
  {emoji:'🎨',name:'Artix',   shape:'rounded' },{emoji:'🌊',name:'Waverz',  shape:'squircle'},
  {emoji:'🏆',name:'Winify',  shape:'circle'  },{emoji:'🎲',name:'Dicelab', shape:'squircle'},
  {emoji:'🚀',name:'Launchx', shape:'sharp'   },{emoji:'🌈',name:'Chromix', shape:'squircle'},
];

// ─── Memory ───────────────────────────────────────────────────────────────────
const memory = { d1: null, d2: null, combined: null, prevVal: null };

const SETTINGS_GEAR_SVG = `<svg width="28" height="28" viewBox="0 0 24 24" fill="white">
  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41L9.25 5.35c-.59.24-1.13.56-1.62.94L5.24 5.33c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
</svg>`;

// ─── Build icon grids ─────────────────────────────────────────────────────────
function buildGrid(containerId, pageIdx) {
  const container = document.getElementById(containerId);
  let symIdx = 0, digIdx = 0;
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      // Settings icon: page 1, row 0, last col
      if (pageIdx === 0 && row === 0 && col === 3) {
        const el = document.createElement('div');
        el.className = 'app-icon shape-squircle';
        el.id = 'settingsIcon';
        el.innerHTML = `<div class="icon-img icon-settings">${SETTINGS_GEAR_SVG}</div><span class="icon-name">Settings</span>`;
        el.addEventListener('click', openSettings);
        el.addEventListener('touchend', (e) => { e.preventDefault(); openSettings(); }, { passive: false });
        container.appendChild(el);
        continue;
      }

      const isDigit = row >= 1 && (col === 1 || col === 2);
      const el = document.createElement('div');
      let app;
      if (isDigit) {
        const d = digIdx++; const meta = DIGIT_META[d];
        app = { value: d, name: meta.name, type: 'digit' };
        el.className = 'app-icon shape-squircle';
        el.innerHTML = `<div class="icon-img d${d}"><span class="icon-num">${d}</span></div><span class="icon-name">${meta.name}</span>`;
      } else {
        const s = SYMBOL_META[symIdx % SYMBOL_META.length]; const sNum = (symIdx % 14) + 1; symIdx++;
        app = { value: 0, name: s.name, type: 'symbol', emoji: s.emoji };
        el.className = `app-icon shape-${s.shape}`;
        el.innerHTML = `<div class="icon-img sym-${sNum}"><span class="icon-emoji">${s.emoji}</span></div><span class="icon-name">${s.name}</span>`;
      }
      attachIconSwipe(el, app, pageIdx);
      container.appendChild(el);
    }
  }
}
buildGrid('grid1', 0);
buildGrid('grid2', 1);

// ─── Page navigation state ────────────────────────────────────────────────────
const PAGES = ['page1','page2','page3','page4'];
let W = window.innerWidth;
window.addEventListener('resize', () => { W = window.innerWidth; });
let currentIdx = 0;

const EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
const T = `transform 0.42s ${EASING}, opacity 0.42s ease`;

function setPage(el, x, opacity, animated) {
  el.style.transition = animated ? T : 'none';
  el.style.transform  = `translateX(${x}%)`;
  el.style.opacity    = String(opacity);
}

function applyPositions(animated) {
  PAGES.forEach((id, i) => {
    const el = document.getElementById(id);
    if (i < currentIdx)        setPage(el, -28, 0, animated);
    else if (i === currentIdx) setPage(el,   0, 1,    animated);
    else                       setPage(el, 100, 1,    animated);
  });
  const onResult = currentIdx === PAGES.length - 1;
  document.querySelector('.dock').style.display          = onResult ? 'none' : '';
  document.querySelector('.home-indicator').style.display = onResult ? 'none' : '';
}

function commitForward() {
  if (currentIdx >= PAGES.length - 1) return;
  currentIdx++;
  applyPositions(true);
  pingDI();
}

function commitBack() {
  if (currentIdx <= 0) return;
  currentIdx--;
  applyPositions(true);
}

// ─── Icon swipe (drag LEFT to go forward) ────────────────────────────────────
function attachIconSwipe(el, app, pageIdx) {
  let sx, sy, st, active = false, dragging = false;
  const THRESH = 50;

  function getXY(e) {
    return e.touches
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : { x: e.clientX,            y: e.clientY };
  }

  function onStart(e) {
    if (pageIdx !== currentIdx) return;
    const { x, y } = getXY(e);
    sx = x; sy = y; st = Date.now();
    active = true; dragging = false;
    el.classList.add('pressing');
  }

  function onMove(e) {
    if (!active) return;
    const { x, y } = getXY(e);
    const dx = x - sx, dy = y - sy;
    if (!dragging) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      if (Math.abs(dy) > Math.abs(dx)) { active = false; el.classList.remove('pressing'); return; }
      dragging = true;
      el.classList.remove('pressing');
      el.classList.add('swiping');
    }
    if (dx < 0) {
      e.preventDefault();
      const progress = Math.min(1, -dx / W);
      const cur  = document.getElementById(PAGES[pageIdx]);
      const next = pageIdx < PAGES.length - 1 ? document.getElementById(PAGES[pageIdx + 1]) : null;
      cur.style.transition  = 'none';
      cur.style.transform   = `translateX(${-progress * 28}%) scale(${1 - progress * 0.06})`;
      cur.style.opacity     = String(1 - progress);
      if (next) {
        next.style.transition = 'none';
        next.style.transform  = `translateX(${(1 - progress) * 100}%)`;
      }
    }
  }

  function onEnd(e) {
    if (!active) return;
    active = false;
    el.classList.remove('pressing', 'swiping');
    const ex = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dx = ex - sx;
    const vx = dx / Math.max(1, Date.now() - st);

    if (dx < -THRESH || (vx < -0.4 && dx < -20)) {
      onCommitForward(app, el);
    } else {
      applyPositions(true);
    }
  }

  el.addEventListener('mousedown',  onStart, { passive: true });
  el.addEventListener('touchstart', onStart, { passive: true });
  window.addEventListener('mousemove',  onMove, { passive: false });
  window.addEventListener('touchmove',  onMove, { passive: false });
  window.addEventListener('mouseup',  onEnd);
  window.addEventListener('touchend', onEnd);
}

function onCommitForward(app, el) {
  if (currentIdx === 0) {
    memory.d1 = app.value;
  } else if (currentIdx === 1) {
    memory.d2 = app.value;
    memory.combined = parseInt(String(memory.d1) + String(memory.d2), 10);
  } else if (currentIdx === 2) {
    showResult();
  }
  flashIcon(el);
  commitForward();
}

// ─── Back swipe (drag RIGHT on any page) ─────────────────────────────────────
function attachBackSwipe(pageEl, prevEl) {
  let sx, sy, active = false, dragging = false;

  function onStart(e) {
    if (document.getElementById(PAGES[currentIdx]) !== pageEl) return;
    const pt = e.touches ? e.touches[0] : e;
    sx = pt.clientX; sy = pt.clientY;
    active = true; dragging = false;
  }

  function onMove(e) {
    if (!active) return;
    const pt = e.touches ? e.touches[0] : e;
    const dx = pt.clientX - sx, dy = pt.clientY - sy;

    if (!dragging) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      if (Math.abs(dy) > Math.abs(dx)) { active = false; return; }
      dragging = true;
    }

    if (dx > 0) {
      e.preventDefault();
      const progress = Math.min(1, dx / W);
      pageEl.style.transition = 'none';
      pageEl.style.transform  = `translateX(${progress * 100}%)`;
      prevEl.style.transition = 'none';
      prevEl.style.transform  = `translateX(${-28 + progress * 28}%) scale(${0.94 + progress * 0.06})`;
      prevEl.style.opacity    = String(progress);
    }
  }

  function onEnd(e) {
    if (!active) return; active = false;
    const pt = e.changedTouches ? e.changedTouches[0] : e;
    const dx = pt.clientX - sx;
    const vx = dx / Math.max(1, Date.now() - (window._backSt || Date.now()));

    if (dx > 50 || (vx > 0.4 && dx > 20)) {
      commitBack();
    } else {
      applyPositions(true);
    }
  }

  pageEl.addEventListener('mousedown',  onStart);
  pageEl.addEventListener('touchstart', onStart, { passive: true });
  window.addEventListener('mousemove',  onMove, { passive: false });
  window.addEventListener('touchmove',  onMove, { passive: false });
  window.addEventListener('mouseup',  onEnd);
  window.addEventListener('touchend', onEnd);
}

attachBackSwipe(document.getElementById('page2'), document.getElementById('page1'));
attachBackSwipe(document.getElementById('page3'), document.getElementById('page2'));
attachBackSwipe(document.getElementById('page4'), document.getElementById('page3'));

// ─── Notes icon tap (page 3 → page 4) ───────────────────────────────────────
(function () {
  const el = document.getElementById('notesIcon');
  let tstart = null;

  el.addEventListener('touchstart', (e) => {
    tstart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    el.classList.add('pressing');
  }, { passive: true });

  el.addEventListener('touchend', (e) => {
    el.classList.remove('pressing');
    if (!tstart || currentIdx !== 2) { tstart = null; return; }
    const dx = e.changedTouches[0].clientX - tstart.x;
    const dy = e.changedTouches[0].clientY - tstart.y;
    tstart = null;
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) return;
    e.preventDefault();
    flashIcon(el); showResult(); commitForward();
  });

  el.addEventListener('mousedown', () => el.classList.add('pressing'));
  el.addEventListener('mouseleave', () => el.classList.remove('pressing'));
  el.addEventListener('click', () => {
    if (currentIdx !== 2) return;
    el.classList.remove('pressing');
    flashIcon(el); showResult(); commitForward();
  });
}());

// ─── Settings modal ───────────────────────────────────────────────────────────
let selectedLabel = localStorage.getItem('forcebag_label') || 'לב אדום';

const settingsOverlay = document.getElementById('settingsOverlay');
const settingsInput   = document.getElementById('settingsInput');

function openSettings() {
  settingsInput.value = selectedLabel;
  settingsOverlay.classList.add('open');
  setTimeout(() => settingsInput.focus(), 350);
}
function closeSettings() {
  settingsOverlay.classList.remove('open');
}

document.getElementById('settingsSave').addEventListener('click', () => {
  const val = settingsInput.value.trim();
  if (val) {
    selectedLabel = val;
    localStorage.setItem('forcebag_label', val);
  }
  closeSettings();
});
document.getElementById('settingsCancel').addEventListener('click', closeSettings);
settingsOverlay.addEventListener('click', (e) => { if (e.target === settingsOverlay) closeSettings(); });

// ─── Show result ─────────────────────────────────────────────────────────────
function showResult() {
  const val = memory.combined;

  // Restore previous item's original text
  if (memory.prevVal !== null) {
    const prev = document.querySelector(`#item-${memory.prevVal} .list-text`);
    if (prev) prev.textContent = stripEmoji(ITEMS[memory.prevVal] || '—');
  }
  memory.prevVal = val;

  // Set selected item's text
  const target = document.querySelector(`#item-${val} .list-text`);
  if (target) target.textContent = selectedLabel;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function flashIcon(el) {
  const img = el.querySelector('.icon-img');
  img.style.transition = 'transform 0.15s ease, opacity 0.15s ease';
  img.style.transform  = 'scale(1.22)'; img.style.opacity = '0.7';
  setTimeout(() => { img.style.transform = ''; img.style.opacity = ''; }, 200);
}
function pingDI() {
  const di = document.getElementById('di');
  if (!di) return;
  di.classList.add('ping');
  setTimeout(() => di.classList.remove('ping'), 600);
}
