/* =========================================================
   Uni-Tech Machines — Theme Studio
   Live color + font + surface tweaker
   ---------------------------------------------------------
   Activates when:
     • URL contains ?customize  (or ?theme, ?studio)
     • Or user presses Ctrl/Cmd + Shift + T
     • Or localStorage flag "utm-studio-open" is true
   Auto-applies saved theme on every page (silent).
   ========================================================= */

(function () {
  'use strict';

  // ---------- Constants ----------
  const STORAGE_KEY = 'utm-theme-v1';
  const OPEN_FLAG_KEY = 'utm-studio-open';
  const STICKY_KEY = 'utm-studio-enabled';
  const STYLE_ID = 'utm-theme-overrides';
  const FONT_LINK_ID = 'utm-theme-fonts';
  const PUBLISHED_CSS_LINK_ID = 'utm-theme-published';

  // ---------- Surface presets (semantic palette swaps) ----------
  const SURFACES = {
    'dark': {
      label: 'Dark (default)',
      tone: 'dark',
      vars: {
        '--ink':       '#0a0a0a',
        '--ink-2':     '#121212',
        '--ink-3':     '#1a1a1a',
        '--ink-4':     '#232323',
        '--ink-5':     '#2e2e2e',
        '--bone':      '#f5f4ef',
        '--bone-2':    '#ebe9e0',
        '--bone-mute': '#a8a69b',
        '--bone-dim':  '#6f6d65',
      }
    },
    'midnight': {
      label: 'Midnight Blue',
      tone: 'dark',
      vars: {
        '--ink':       '#0b0f1a',
        '--ink-2':     '#0f1626',
        '--ink-3':     '#161e30',
        '--ink-4':     '#1f2940',
        '--ink-5':     '#2a3550',
        '--bone':      '#eef0f7',
        '--bone-2':    '#d8dae2',
        '--bone-mute': '#8f95a8',
        '--bone-dim':  '#5d6173',
      }
    },
    'warm-char': {
      label: 'Warm Charcoal',
      tone: 'dark',
      vars: {
        '--ink':       '#14110d',
        '--ink-2':     '#1a1612',
        '--ink-3':     '#221d18',
        '--ink-4':     '#2c251f',
        '--ink-5':     '#382f27',
        '--bone':      '#f6f1e6',
        '--bone-2':    '#e8e0cf',
        '--bone-mute': '#a89d87',
        '--bone-dim':  '#75695a',
      }
    },
    'forest': {
      label: 'Deep Forest',
      tone: 'dark',
      vars: {
        '--ink':       '#0a1410',
        '--ink-2':     '#0e1c16',
        '--ink-3':     '#13261d',
        '--ink-4':     '#1c3327',
        '--ink-5':     '#244031',
        '--bone':      '#eef3ec',
        '--bone-2':    '#d5e0d4',
        '--bone-mute': '#90a094',
        '--bone-dim':  '#5f6e63',
      }
    },
    'bone': {
      label: 'Bone (light)',
      tone: 'light',
      vars: {
        '--ink':       '#f5f4ef',
        '--ink-2':     '#ebe9e0',
        '--ink-3':     '#e0ddd0',
        '--ink-4':     '#d2cebf',
        '--ink-5':     '#bcb7a4',
        '--bone':      '#181715',
        '--bone-2':    '#2a2722',
        '--bone-mute': '#6b6660',
        '--bone-dim':  '#94908a',
      }
    },
    'cream': {
      label: 'Cream (light warm)',
      tone: 'light',
      vars: {
        '--ink':       '#faf6ee',
        '--ink-2':     '#f1ebde',
        '--ink-3':     '#e9e1cd',
        '--ink-4':     '#dcd2b9',
        '--ink-5':     '#c8bda0',
        '--bone':      '#1b1812',
        '--bone-2':    '#2e2920',
        '--bone-mute': '#6d6555',
        '--bone-dim':  '#94896f',
      }
    },
    'paper': {
      label: 'Paper (white)',
      tone: 'light',
      vars: {
        '--ink':       '#ffffff',
        '--ink-2':     '#f5f5f4',
        '--ink-3':     '#ececea',
        '--ink-4':     '#dedcd7',
        '--ink-5':     '#c4c1b9',
        '--bone':      '#0e0e0e',
        '--bone-2':    '#262624',
        '--bone-mute': '#666460',
        '--bone-dim':  '#8e8b85',
      }
    },
    'slate': {
      label: 'Slate (light cool)',
      tone: 'light',
      vars: {
        '--ink':       '#f3f4f6',
        '--ink-2':     '#e7e9ee',
        '--ink-3':     '#dadde4',
        '--ink-4':     '#c7ccd6',
        '--ink-5':     '#aab1bf',
        '--bone':      '#10141c',
        '--bone-2':    '#252a35',
        '--bone-mute': '#5e6573',
        '--bone-dim':  '#8a90a0',
      }
    },
  };

  // ---------- Brand presets ----------
  const BRAND_PRESETS = [
    { id: 'emerald', label: 'Emerald',      color: '#0E8A47' },
    { id: 'forest',  label: 'Forest',       color: '#1C6B3F' },
    { id: 'pine',    label: 'Pine',         color: '#0a5d3a' },
    { id: 'copper',  label: 'Copper',       color: '#B85C2E' },
    { id: 'rust',    label: 'Rust',         color: '#9A4422' },
    { id: 'amber',   label: 'Amber',        color: '#C8821D' },
    { id: 'gold',    label: 'Gold',         color: '#A8842C' },
    { id: 'crimson', label: 'Crimson',      color: '#A6232C' },
    { id: 'royal',   label: 'Royal Blue',   color: '#1F4FB3' },
    { id: 'steel',   label: 'Steel Blue',   color: '#2C5973' },
    { id: 'teal',    label: 'Teal',         color: '#0E7C7B' },
    { id: 'plum',    label: 'Plum',         color: '#5C2E63' },
    { id: 'graphite',label: 'Graphite',     color: '#3A3A3A' },
    { id: 'ink',     label: 'Ink (mono)',   color: '#111111' },
  ];

  // ---------- Font catalog (Google Fonts) ----------
  const DISPLAY_FONTS = [
    { id: 'fraunces',   label: 'Fraunces',         stack: "'Fraunces', 'Times New Roman', serif",         google: 'Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700' },
    { id: 'playfair',   label: 'Playfair Display', stack: "'Playfair Display', 'Times New Roman', serif", google: 'Playfair+Display:ital,wght@0,400..900;1,400..900' },
    { id: 'bodoni',     label: 'Bodoni Moda',      stack: "'Bodoni Moda', 'Didot', serif",                google: 'Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900' },
    { id: 'dm-serif',   label: 'DM Serif Display', stack: "'DM Serif Display', serif",                    google: 'DM+Serif+Display:ital@0;1' },
    { id: 'cormorant',  label: 'Cormorant',        stack: "'Cormorant Garamond', serif",                  google: 'Cormorant+Garamond:ital,wght@0,300..700;1,300..700' },
    { id: 'instrument', label: 'Instrument Serif', stack: "'Instrument Serif', serif",                    google: 'Instrument+Serif:ital@0;1' },
    { id: 'tenor',      label: 'Tenor Sans',       stack: "'Tenor Sans', sans-serif",                     google: 'Tenor+Sans' },
    { id: 'syne',       label: 'Syne',             stack: "'Syne', sans-serif",                           google: 'Syne:wght@400..800' },
    { id: 'space-grot', label: 'Space Grotesk',    stack: "'Space Grotesk', sans-serif",                  google: 'Space+Grotesk:wght@300..700' },
    { id: 'unbounded',  label: 'Unbounded',        stack: "'Unbounded', sans-serif",                      google: 'Unbounded:wght@300..900' },
  ];

  const SANS_FONTS = [
    { id: 'inter',      label: 'Inter',            stack: "'Inter', system-ui, sans-serif",        google: 'Inter:wght@300;400;500;600;700' },
    { id: 'manrope',    label: 'Manrope',          stack: "'Manrope', system-ui, sans-serif",      google: 'Manrope:wght@300..800' },
    { id: 'jakarta',    label: 'Plus Jakarta',     stack: "'Plus Jakarta Sans', sans-serif",       google: 'Plus+Jakarta+Sans:wght@300..800' },
    { id: 'geist',      label: 'Geist',            stack: "'Geist', sans-serif",                   google: 'Geist:wght@300..700' },
    { id: 'space-grot', label: 'Space Grotesk',    stack: "'Space Grotesk', sans-serif",           google: 'Space+Grotesk:wght@300..700' },
    { id: 'plex-sans',  label: 'IBM Plex Sans',    stack: "'IBM Plex Sans', sans-serif",           google: 'IBM+Plex+Sans:wght@300;400;500;600;700' },
    { id: 'figtree',    label: 'Figtree',          stack: "'Figtree', sans-serif",                 google: 'Figtree:wght@300..900' },
    { id: 'satoshi',    label: 'DM Sans',          stack: "'DM Sans', sans-serif",                 google: 'DM+Sans:opsz,wght@9..40,300..900' },
    { id: 'work',       label: 'Work Sans',        stack: "'Work Sans', sans-serif",               google: 'Work+Sans:wght@300..800' },
  ];

  const MONO_FONTS = [
    { id: 'jetbrains',  label: 'JetBrains Mono',   stack: "'JetBrains Mono', ui-monospace, monospace", google: 'JetBrains+Mono:wght@400;500' },
    { id: 'plex-mono',  label: 'IBM Plex Mono',    stack: "'IBM Plex Mono', ui-monospace, monospace",  google: 'IBM+Plex+Mono:wght@400;500' },
    { id: 'geist-mono', label: 'Geist Mono',       stack: "'Geist Mono', ui-monospace, monospace",     google: 'Geist+Mono:wght@400;500' },
    { id: 'space-mono', label: 'Space Mono',       stack: "'Space Mono', ui-monospace, monospace",     google: 'Space+Mono:wght@400;700' },
    { id: 'fira',       label: 'Fira Code',        stack: "'Fira Code', ui-monospace, monospace",      google: 'Fira+Code:wght@400;500' },
  ];

  // ---------- Logos ----------
  const LOGOS = [
    { id: 'rounded', label: 'Pill badge',     src: 'img/logos/unitech-logo-rounded.png' },
    { id: 'stacked', label: 'With Machines',  src: 'img/logos/unitech-logo-only.png' },
  ];

  // ---------- Defaults ----------
  const DEFAULTS = {
    surface: 'dark',
    brand: '#0E8A47',
    accent: '',
    displayFont: 'fraunces',
    sansFont: 'inter',
    monoFont: 'jetbrains',
    headingWeight: 300,
    radius: 2,
    logo: 'rounded',
  };

  // ---------- Utils ----------
  function hexToRgb(hex) {
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const n = parseInt(h, 16);
    return [ (n >> 16) & 255, (n >> 8) & 255, n & 255 ];
  }
  function rgbToHex(r, g, b) {
    const c = v => v.toString(16).padStart(2, '0');
    return '#' + c(Math.round(r)) + c(Math.round(g)) + c(Math.round(b));
  }
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
        case g: h = ((b - r) / d + 2); break;
        case b: h = ((r - g) / d + 4); break;
      }
      h /= 6;
    }
    return [h * 360, s * 100, l * 100];
  }
  function hslToRgb(h, s, l) {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;
    if (s === 0) { r = g = b = l; }
    else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return [r * 255, g * 255, b * 255];
  }
  function shiftLightness(hex, deltaL) {
    const [r, g, b] = hexToRgb(hex);
    let [h, s, l] = rgbToHsl(r, g, b);
    l = Math.max(0, Math.min(100, l + deltaL));
    const [nr, ng, nb] = hslToRgb(h, s, l);
    return rgbToHex(nr, ng, nb);
  }

  // ---------- Persistence ----------
  function loadConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULTS };
      const parsed = JSON.parse(raw);
      return { ...DEFAULTS, ...parsed };
    } catch (e) {
      return { ...DEFAULTS };
    }
  }
  function saveConfig(cfg) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg)); } catch(e){}
  }
  function clearConfig() {
    try { localStorage.removeItem(STORAGE_KEY); } catch(e){}
  }

  // ---------- Apply theme ----------
  function getFontById(list, id) {
    return list.find(f => f.id === id) || list[0];
  }

  function buildCSS(cfg) {
    const surface = SURFACES[cfg.surface] || SURFACES.dark;
    const brand = cfg.brand || DEFAULTS.brand;
    const brandSoft = shiftLightness(brand, 14);
    const brandDeep = shiftLightness(brand, -18);
    // Contrast-safe accent for use as TEXT on the page-tone background.
    // On dark tone we want a light accent; on light tone we want a dark accent.
    const [br, bg, bb] = hexToRgb(brand);
    const [, , bL] = rgbToHsl(br, bg, bb);
    let brandText = brand;
    if (surface.tone === 'dark' && bL < 55) {
      brandText = shiftLightness(brand, 55 - bL);
    } else if (surface.tone === 'light' && bL > 45) {
      brandText = shiftLightness(brand, 45 - bL);
    }
    // For an inverted section (light bg on dark page, or dark bg on light page),
    // the brand needs the OPPOSITE adjustment.
    let brandInverse = brand;
    if (surface.tone === 'dark') {
      // inverted section has light bg → need dark accent
      if (bL > 45) brandInverse = shiftLightness(brand, 45 - bL);
    } else {
      // inverted section has dark bg → need light accent
      if (bL < 60) brandInverse = shiftLightness(brand, 60 - bL);
    }
    const accent = cfg.accent || '';
    const displayFont = getFontById(DISPLAY_FONTS, cfg.displayFont);
    const sansFont    = getFontById(SANS_FONTS, cfg.sansFont);
    const monoFont    = getFontById(MONO_FONTS, cfg.monoFont);

    let css = ':root{\n';
    Object.entries(surface.vars).forEach(([k, v]) => {
      css += `  ${k}: ${v};\n`;
    });
    css += `  --brand: ${brand};\n`;
    css += `  --brand-soft: ${brandSoft};\n`;
    css += `  --brand-deep: ${brandDeep};\n`;
    css += `  --brand-text: ${brandText};\n`;
    css += `  --brand-inverse: ${brandInverse};\n`;
    css += `  --rust: ${brand};\n`;
    css += `  --rust-soft: ${brandSoft};\n`;
    css += `  --rust-deep: ${brandDeep};\n`;
    if (accent) css += `  --accent: ${accent};\n`;
    css += `  --f-display: ${displayFont.stack};\n`;
    css += `  --f-sans: ${sansFont.stack};\n`;
    css += `  --f-mono: ${monoFont.stack};\n`;
    css += `  --radius: ${cfg.radius}px;\n`;
    css += '}\n';

    // Heading weight
    css += `.f-display, h1, h2, h3, .page-head h1, .hero2 h1, .sec-head h2, .head h2, .features-head h2, .masthead .center{ font-weight: ${cfg.headingWeight}; }\n`;

    // Contrast-safe accent text: use --brand-text wherever brand is used as TEXT on page-tone bg.
    css += `
.nav-links a:hover, .nav-links a.active, .nav2-links a:hover, .nav2-links a.active,
.menu .menu-foot a, .crumbs a:hover, .page-head h1 em,
.hero2 h1 em, .hero2 h1 .ru, .toc h2 em, .toc-row:hover .toc-name, .toc-row:hover .toc-arrow,
.features-head h2 em, .feature-card .row-spec span b, .feature-card .more,
.nbr h3 em, .quote-text .ru, .rs-num em, .rs-stars, .rs-sat b,
.rs-quote p::before, .rs-quote p::after, .plate-photo .stamp em,
.foot ul li a:hover{
  color: var(--brand-text);
}
`;

    // Inverted section (.contact-teaser uses --bone as bg and --ink as text,
    // which becomes a DARK section on light themes). Use brand-inverse there.
    css += `
.contact-teaser h2 em, .contact-teaser .eyebrow{
  color: var(--brand-inverse) !important;
}
`;

    // Body background follows ink-2 (already true on most pages)
    // For light surfaces we need to swap a bunch of bone-tinted rgba() borders/backgrounds
    if (surface.tone === 'light') {
      const txt = surface.vars['--bone']; // dark text on light bg
      const [r, g, b] = hexToRgb(txt);
      const rgb = `${r},${g},${b}`;
      css += `
/* Light-mode overrides: flip bone-tinted hairlines & overlays to ink-tinted */
.nav, .nav2, .page-head, .foot, .foot-bottom, .menu, .bar, .hero2, .menu .menu-foot{
  border-color: rgba(${rgb}, .12) !important;
}
.bar{ border-bottom-color: rgba(${rgb}, .10) !important; }
.btn-ghost{ border-color: rgba(${rgb}, .25) !important; color: var(--bone) !important; }
.btn-ghost:hover{ background: rgba(${rgb}, .06) !important; border-color: rgba(${rgb}, .4) !important; }
.tag{ border-color: rgba(${rgb}, .22) !important; }
.hr-bone{ background: rgba(${rgb}, .12) !important; }
.nav-ham{ border-color: rgba(${rgb}, .25) !important; }
.nav-ham span, .nav-ham span::before, .nav-ham span::after{ background: var(--bone) !important; }
.placeholder-photo{
  background:
    repeating-linear-gradient(135deg, rgba(${rgb},.05) 0 12px, rgba(${rgb},0) 12px 24px),
    var(--ink-3) !important;
}
.nav{ background: color-mix(in oklab, var(--ink) 85%, transparent) !important; }
.nav2{ background: color-mix(in oklab, var(--ink-2) 88%, transparent) !important; }
body{ color: var(--bone); }
`;
    }

    return css;
  }

  function ensureFontsLoaded(cfg) {
    const ids = [cfg.displayFont, cfg.sansFont, cfg.monoFont];
    const fonts = [
      getFontById(DISPLAY_FONTS, cfg.displayFont),
      getFontById(SANS_FONTS, cfg.sansFont),
      getFontById(MONO_FONTS, cfg.monoFont),
    ];
    const families = fonts.map(f => f.google).filter(Boolean);
    if (!families.length) return;
    const href = 'https://fonts.googleapis.com/css2?' + families.map(f => 'family=' + f).join('&') + '&display=swap';

    let link = document.getElementById(FONT_LINK_ID);
    if (link && link.getAttribute('href') === href) return;
    if (!link) {
      link = document.createElement('link');
      link.id = FONT_LINK_ID;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = href;
  }

  function applyLogo(cfg) {
    const logo = LOGOS.find(l => l.id === cfg.logo) || LOGOS[0];
    document.querySelectorAll('[data-utm-logo]').forEach(img => {
      if (img.getAttribute('src') !== logo.src) img.setAttribute('src', logo.src);
    });
  }

  function applyConfig(cfg) {
    let style = document.getElementById(STYLE_ID);
    if (!style) {
      style = document.createElement('style');
      style.id = STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = buildCSS(cfg);

    // Surface tone attr (for any future selectors)
    const tone = (SURFACES[cfg.surface] || SURFACES.dark).tone;
    document.documentElement.setAttribute('data-surface', cfg.surface);
    document.documentElement.setAttribute('data-surface-tone', tone);

    ensureFontsLoaded(cfg);
    applyLogo(cfg);
  }

  // ---------- Activation detection ----------
  function shouldOpen() {
    // URL query param activates AND makes it sticky for future visits
    const q = window.location.search;
    if (/[?&](customize|customise|theme|studio|edit)(=|&|$)/i.test(q)) {
      try { localStorage.setItem(STICKY_KEY, '1'); } catch(e){}
      return true;
    }
    if (window.location.hash === '#customize' || window.location.hash === '#theme' || window.location.hash === '#studio') {
      try { localStorage.setItem(STICKY_KEY, '1'); } catch(e){}
      return true;
    }
    // Sticky flag — once activated, the gear icon stays available on every page
    try { if (localStorage.getItem(STICKY_KEY) === '1') return true; } catch(e){}
    try { if (localStorage.getItem(OPEN_FLAG_KEY) === '1') return true; } catch(e){}
    return false;
  }
  function shouldAutoOpenPanel() {
    // The panel opens automatically (vs. just the gear icon) only when:
    // • ?customize is in the URL (first activation)
    // • OR the user left it open last time (OPEN_FLAG_KEY)
    const q = window.location.search;
    if (/[?&](customize|customise|theme|studio|edit)(=|&|$)/i.test(q)) return true;
    if (window.location.hash === '#customize' || window.location.hash === '#theme' || window.location.hash === '#studio') return true;
    try { if (localStorage.getItem(OPEN_FLAG_KEY) === '1') return true; } catch(e){}
    return false;
  }

  // ---------- UI ----------
  const PANEL_CSS = `
  #utm-studio-toggle{
    position: fixed; right: 18px; bottom: 18px; z-index: 2147483640;
    width: 46px; height: 46px; border-radius: 50%;
    background: #111; color: #fff; border: 1px solid rgba(255,255,255,.18);
    display: grid; place-items: center; cursor: pointer;
    box-shadow: 0 10px 30px rgba(0,0,0,.4);
    transition: transform .2s ease;
  }
  #utm-studio-toggle:hover{ transform: scale(1.08); }
  #utm-studio-toggle svg{ width: 20px; height: 20px; }

  #utm-studio{
    position: fixed; right: 18px; bottom: 76px; z-index: 2147483641;
    width: 340px; max-height: calc(100vh - 110px);
    background: #0e0e0e; color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 12px;
    box-shadow: 0 30px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.02);
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 13px;
    display: flex; flex-direction: column;
    overflow: hidden;
    transition: opacity .2s ease, transform .2s ease;
  }
  #utm-studio.hidden{ opacity: 0; pointer-events: none; transform: translateY(8px); }

  #utm-studio .head{
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid rgba(255,255,255,.08);
    cursor: grab;
    user-select: none;
  }
  #utm-studio .head.dragging{ cursor: grabbing; }
  #utm-studio .head h3{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
    color: #f5f4ef; font-weight: 500;
  }
  #utm-studio .head .head-actions{ display: flex; gap: 6px; align-items: center; }
  #utm-studio .head button{
    width: 26px; height: 26px; border-radius: 6px;
    background: rgba(255,255,255,.04); color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.08);
    display: grid; place-items: center;
    cursor: pointer; font-size: 14px;
    transition: background .15s;
  }
  #utm-studio .head button:hover{ background: rgba(255,255,255,.10); }

  #utm-studio .tabs{
    display: grid; grid-template-columns: repeat(4, 1fr);
    border-bottom: 1px solid rgba(255,255,255,.08);
    background: rgba(255,255,255,.02);
  }
  #utm-studio .tab{
    padding: 11px 8px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
    color: rgba(245,244,239,.5);
    text-align: center; cursor: pointer;
    border: 0; background: transparent;
    border-bottom: 1px solid transparent;
  }
  #utm-studio .tab.active{ color: #f5f4ef; border-bottom-color: var(--brand, #0E8A47); }
  #utm-studio .tab:hover{ color: #f5f4ef; }

  #utm-studio .body{
    flex: 1; overflow-y: auto;
    padding: 16px;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,.15) transparent;
  }
  #utm-studio .body::-webkit-scrollbar{ width: 6px; }
  #utm-studio .body::-webkit-scrollbar-thumb{ background: rgba(255,255,255,.15); border-radius: 3px; }

  #utm-studio .field{ margin-bottom: 18px; }
  #utm-studio .field:last-child{ margin-bottom: 4px; }
  #utm-studio .lbl{
    display: flex; justify-content: space-between; align-items: baseline;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
    color: rgba(245,244,239,.55);
    margin-bottom: 9px;
  }
  #utm-studio .lbl .val{ color: #f5f4ef; letter-spacing: .04em; }

  #utm-studio .swatches{
    display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px;
  }
  #utm-studio .sw{
    aspect-ratio: 1 / 1;
    border-radius: 6px;
    border: 1.5px solid transparent;
    cursor: pointer;
    position: relative;
    transition: transform .15s;
  }
  #utm-studio .sw:hover{ transform: scale(1.08); }
  #utm-studio .sw.on{ border-color: #f5f4ef; }
  #utm-studio .sw.on::after{
    content: ""; position: absolute; inset: -4px;
    border: 1px solid rgba(245,244,239,.4);
    border-radius: 9px;
  }

  #utm-studio .colorrow{
    display: flex; gap: 8px; align-items: center; margin-top: 8px;
  }
  #utm-studio .colorrow input[type="color"]{
    width: 38px; height: 32px; padding: 0; border: 1px solid rgba(255,255,255,.12);
    background: transparent; border-radius: 6px; cursor: pointer;
  }
  #utm-studio .colorrow input[type="text"]{
    flex: 1; padding: 8px 10px;
    font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px;
    background: rgba(255,255,255,.04); color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.10); border-radius: 6px;
    outline: none;
  }
  #utm-studio .colorrow input[type="text"]:focus{ border-color: var(--brand, #0E8A47); }

  #utm-studio .surfaces{
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;
  }
  #utm-studio .surf{
    display: flex; align-items: center; gap: 8px;
    padding: 9px 10px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.02);
    border-radius: 7px;
    cursor: pointer;
    font-size: 12px;
    transition: background .15s, border-color .15s;
  }
  #utm-studio .surf:hover{ background: rgba(255,255,255,.06); }
  #utm-studio .surf.on{ border-color: var(--brand, #0E8A47); background: rgba(255,255,255,.05); }
  #utm-studio .surf .chip{
    width: 18px; height: 18px; border-radius: 4px; flex: 0 0 18px;
    border: 1px solid rgba(255,255,255,.12);
  }

  #utm-studio select{
    width: 100%; padding: 9px 10px;
    background: #1a1a1a; color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.10); border-radius: 6px;
    font-family: 'Inter', system-ui, sans-serif; font-size: 13px;
    outline: none; cursor: pointer;
    appearance: none; -webkit-appearance: none;
    color-scheme: dark;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='%23f5f4ef' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 30px;
  }
  #utm-studio select option{
    background: #1a1a1a; color: #f5f4ef;
    padding: 8px;
  }
  #utm-studio select:focus{ border-color: var(--brand, #0E8A47); }
  #utm-studio .font-preview{
    margin-top: 8px; padding: 10px 12px;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 6px;
    font-size: 17px; line-height: 1.25;
  }

  #utm-studio .seg{
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;
    padding: 3px;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 7px;
  }
  #utm-studio .seg button{
    padding: 7px 4px;
    border: 0; background: transparent; color: rgba(245,244,239,.6);
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    transition: background .15s, color .15s;
  }
  #utm-studio .seg button.on{
    background: rgba(255,255,255,.10); color: #f5f4ef;
  }

  #utm-studio input[type="range"]{
    width: 100%; appearance: none; background: transparent; height: 24px;
  }
  #utm-studio input[type="range"]::-webkit-slider-runnable-track{
    height: 3px; background: rgba(255,255,255,.10); border-radius: 2px;
  }
  #utm-studio input[type="range"]::-webkit-slider-thumb{
    appearance: none; width: 16px; height: 16px; border-radius: 50%;
    background: #f5f4ef; margin-top: -7px;
    box-shadow: 0 2px 6px rgba(0,0,0,.4);
    cursor: pointer;
  }
  #utm-studio input[type="range"]::-moz-range-track{ height: 3px; background: rgba(255,255,255,.10); border-radius: 2px; }
  #utm-studio input[type="range"]::-moz-range-thumb{ width: 16px; height: 16px; border-radius: 50%; background: #f5f4ef; border: 0; cursor: pointer; }

  #utm-studio .preview-card{
    margin-top: 10px;
    padding: 16px;
    background: var(--ink-2, #121212);
    color: var(--bone, #f5f4ef);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 8px;
  }
  #utm-studio .preview-card .pv-eye{
    font-family: var(--f-mono); font-size: 10px; letter-spacing: .18em;
    text-transform: uppercase; color: var(--bone-mute, rgba(245,244,239,.55));
    display: flex; align-items: center; gap: 10px;
  }
  #utm-studio .preview-card .pv-eye::before{
    content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--brand);
  }
  #utm-studio .preview-card .pv-h{
    font-family: var(--f-display); font-weight: 300;
    font-size: 28px; line-height: 1; letter-spacing: -.02em;
    margin: 10px 0 8px; color: var(--bone, #f5f4ef);
  }
  #utm-studio .preview-card .pv-h em{ font-style: italic; color: var(--brand-text, var(--brand)); }
  #utm-studio .preview-card .pv-b{ font-size: 12px; color: var(--bone-mute, rgba(245,244,239,.55)); margin-bottom: 12px; }
  #utm-studio .preview-card .pv-btns{ display: flex; gap: 8px; }
  #utm-studio .preview-card .pv-btn{
    padding: 8px 12px; border-radius: var(--radius, 2px);
    font-size: 11px; font-weight: 500;
  }
  #utm-studio .preview-card .pv-btn.p{ background: var(--brand); color: var(--ink); }
  #utm-studio .preview-card .pv-btn.g{ background: transparent; color: var(--bone); border: 1px solid rgba(245,244,239,.25); }

  #utm-studio .logos{
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;
  }
  #utm-studio .logo-opt{
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    padding: 14px 10px;
    background: #f5f4ef;
    border: 1.5px solid rgba(255,255,255,.10);
    border-radius: 7px;
    cursor: pointer;
    transition: border-color .15s, transform .15s;
  }
  #utm-studio .logo-opt:hover{ transform: translateY(-1px); }
  #utm-studio .logo-opt.on{ border-color: var(--brand, #0E8A47); }
  #utm-studio .logo-opt img{
    max-width: 100%; max-height: 54px; width: auto; object-fit: contain;
  }
  #utm-studio .logo-opt span{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
    color: #0a0a0a;
  }

  #utm-studio .foot .save-state{
    position: relative;
  }
  #utm-studio .foot .save-state::before{
    content: ""; position: absolute; top: 6px; right: 6px;
    width: 6px; height: 6px; border-radius: 50%;
    background: #ffb84d;
    display: none;
  }
  #utm-studio.dirty .foot .save-state::before{ display: block; }
  #utm-studio .foot{
    border-top: 1px solid rgba(255,255,255,.08);
    padding: 10px 12px;
    display: flex; gap: 6px;
    background: rgba(0,0,0,.2);
  }
  #utm-studio .foot button{
    flex: 1;
    padding: 9px 8px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    color: #f5f4ef;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    transition: background .15s;
  }
  #utm-studio .foot button:hover{ background: rgba(255,255,255,.10); }
  #utm-studio .foot button.primary{
    background: var(--brand, #0E8A47); border-color: transparent; color: #fff;
  }
  #utm-studio .foot button.primary:hover{ filter: brightness(1.1); }
  #utm-studio .foot-publish{
    padding: 4px 12px 0; background: transparent;
  }
  #utm-studio .foot-publish button{
    flex: 1; padding: 11px 10px;
    border: 1px solid var(--brand, #0E8A47);
    background: linear-gradient(180deg, color-mix(in oklab, var(--brand, #0E8A47) 20%, transparent), color-mix(in oklab, var(--brand, #0E8A47) 6%, transparent));
    color: #f5f4ef;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 12px; font-weight: 500; letter-spacing: .01em;
    border-radius: 7px; cursor: pointer;
    transition: filter .15s;
  }
  #utm-studio .foot-publish button:hover{ filter: brightness(1.15); }
  #utm-studio .foot-exit{ padding: 8px 12px 12px; background: transparent; }
  #utm-studio .foot-exit button{
    flex: 1; padding: 7px 8px;
    border: 1px solid rgba(255,90,90,.25);
    background: rgba(255,90,90,.06);
    color: #ff9b9b;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 9.5px; letter-spacing: .14em; text-transform: uppercase;
    border-radius: 6px; cursor: pointer;
    transition: background .15s;
  }
  #utm-studio .foot-exit button:hover{ background: rgba(255,90,90,.12); }

  #utm-studio .toast{
    position: absolute; left: 50%; bottom: 60px;
    transform: translateX(-50%) translateY(20px);
    background: #f5f4ef; color: #0a0a0a;
    padding: 8px 14px; border-radius: 6px; font-size: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,.5);
    opacity: 0; pointer-events: none;
    transition: opacity .2s, transform .2s;
  }
  #utm-studio .toast.on{ opacity: 1; transform: translateX(-50%) translateY(0); }

  @media (max-width: 520px){
    #utm-studio{
      right: 8px; left: 8px; width: auto; bottom: 70px;
    }
  }

  /* ============================================================
     Publish-to-site modal
     ============================================================ */
  #utm-studio .upm{
    position: fixed; inset: 0; z-index: 2147483647;
    display: grid; place-items: center;
    font-family: 'Inter', system-ui, sans-serif;
  }
  #utm-studio .upm[hidden]{ display: none; }
  #utm-studio .upm-back{
    position: absolute; inset: 0;
    background: rgba(0,0,0,.65);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
  #utm-studio .upm-card{
    position: relative;
    width: min(520px, calc(100vw - 32px));
    max-height: calc(100vh - 64px);
    background: #0e0e0e;
    color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 14px;
    box-shadow: 0 40px 100px rgba(0,0,0,.6);
    display: flex; flex-direction: column;
    overflow: hidden;
    animation: upmIn .18s ease-out;
  }
  @keyframes upmIn { from { transform: translateY(8px); opacity: 0; } to { transform: none; opacity: 1; } }
  #utm-studio .upm-head{
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 22px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  #utm-studio .upm-head h3{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px; letter-spacing: .18em; text-transform: uppercase;
    color: #f5f4ef; font-weight: 500; margin: 0;
  }
  #utm-studio .upm-head button{
    width: 28px; height: 28px; border-radius: 7px;
    background: rgba(255,255,255,.04); color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.08);
    display: grid; place-items: center;
    font-size: 16px; cursor: pointer;
  }
  #utm-studio .upm-head button:hover{ background: rgba(255,255,255,.10); }

  #utm-studio .upm-body{
    padding: 18px 22px 8px;
    overflow-y: auto;
    flex: 1;
  }
  #utm-studio .upm-server{
    display: flex; align-items: center; gap: 8px;
    padding: 9px 12px;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 7px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px; letter-spacing: .06em;
    color: rgba(245,244,239,.8);
    margin-bottom: 14px;
  }
  #utm-studio .upm-server .upm-dot{
    width: 8px; height: 8px; border-radius: 50%;
    background: #888;
    flex: 0 0 8px;
  }
  #utm-studio .upm-server.ok .upm-dot{ background: #22c55e; box-shadow: 0 0 0 3px rgba(34,197,94,.18); }
  #utm-studio .upm-server.warn .upm-dot{ background: #f59e0b; box-shadow: 0 0 0 3px rgba(245,158,11,.18); }
  #utm-studio .upm-server.err .upm-dot{ background: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,.18); }
  #utm-studio .upm-intro{
    font-size: 13px; line-height: 1.5;
    color: rgba(245,244,239,.75);
    margin: 0 0 16px;
  }
  #utm-studio .upm-intro strong{ color: #f5f4ef; font-weight: 600; }

  #utm-studio .upm-section{ margin-bottom: 16px; }
  #utm-studio .upm-sec-h{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
    color: rgba(245,244,239,.5);
    margin-bottom: 8px;
  }
  #utm-studio .upm-diff{
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 7px;
    padding: 10px 12px;
    font-size: 12.5px;
    line-height: 1.6;
    max-height: 200px; overflow-y: auto;
  }
  #utm-studio .upm-diff .upm-d-row{
    display: grid; grid-template-columns: 88px 1fr;
    gap: 10px; align-items: baseline;
    padding: 3px 0;
  }
  #utm-studio .upm-diff .upm-d-key{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10.5px; letter-spacing: .08em;
    color: rgba(245,244,239,.5);
    text-transform: uppercase;
  }
  #utm-studio .upm-diff .upm-d-val{ color: #f5f4ef; }
  #utm-studio .upm-diff .upm-d-from{
    color: rgba(245,244,239,.4);
    text-decoration: line-through;
    margin-right: 6px;
  }
  #utm-studio .upm-diff .upm-d-arrow{ color: rgba(245,244,239,.4); margin: 0 4px; }
  #utm-studio .upm-diff .upm-d-to{ color: #f5f4ef; }
  #utm-studio .upm-diff .upm-d-chip{
    display: inline-block; width: 11px; height: 11px; border-radius: 3px;
    border: 1px solid rgba(255,255,255,.15);
    vertical-align: -1px; margin-right: 5px;
  }
  #utm-studio .upm-diff .upm-d-empty{ color: rgba(245,244,239,.4); font-style: italic; }
  #utm-studio .upm-diff .upm-d-nochanges{
    text-align: center; padding: 12px;
    color: rgba(245,244,239,.5);
    font-style: italic;
  }

  #utm-studio .upm-form{ display: flex; flex-direction: column; gap: 12px; margin-bottom: 14px; }
  #utm-studio .upm-row{ display: flex; flex-direction: column; gap: 6px; }
  #utm-studio .upm-lbl{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 10px; letter-spacing: .14em; text-transform: uppercase;
    color: rgba(245,244,239,.55);
  }
  #utm-studio .upm-lbl code{
    font-family: inherit; color: #f5f4ef;
    background: rgba(255,255,255,.08); padding: 1px 5px; border-radius: 3px;
  }
  #utm-studio .upm-form input{
    padding: 10px 12px;
    background: rgba(255,255,255,.04);
    color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 7px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 13px;
    outline: none;
    transition: border-color .15s;
  }
  #utm-studio .upm-form input:focus{ border-color: var(--brand, #0E8A47); }
  #utm-studio .upm-form input.ok{ border-color: #22c55e; }

  #utm-studio .upm-status{
    margin-top: 4px;
    padding: 10px 12px;
    border-radius: 7px;
    font-size: 12.5px; line-height: 1.5;
  }
  #utm-studio .upm-status.info{ background: rgba(255,255,255,.04); color: rgba(245,244,239,.85); border: 1px solid rgba(255,255,255,.08); }
  #utm-studio .upm-status.ok  { background: rgba(34,197,94,.10); color: #6ee7b7; border: 1px solid rgba(34,197,94,.30); }
  #utm-studio .upm-status.err { background: rgba(239,68,68,.10); color: #fca5a5; border: 1px solid rgba(239,68,68,.30); }
  #utm-studio .upm-status a{ color: inherit; text-decoration: underline; }

  #utm-studio .upm-foot{
    display: flex; align-items: center; justify-content: space-between;
    padding: 14px 22px;
    border-top: 1px solid rgba(255,255,255,.08);
    background: rgba(0,0,0,.2);
    gap: 10px;
  }
  #utm-studio .upm-foot-r{ display: flex; gap: 8px; align-items: center; }
  #utm-studio .upm-foot button{
    padding: 9px 14px;
    border: 1px solid rgba(255,255,255,.10);
    background: rgba(255,255,255,.04);
    color: #f5f4ef;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 12px;
    font-weight: 500;
    border-radius: 7px;
    cursor: pointer;
    transition: filter .15s, background .15s;
  }
  #utm-studio .upm-foot button:hover{ background: rgba(255,255,255,.08); }
  #utm-studio .upm-foot button:disabled{ opacity: .4; cursor: not-allowed; }
  #utm-studio .upm-foot button.upm-revert{
    background: transparent;
    border-color: rgba(255,255,255,.10);
    color: rgba(245,244,239,.6);
    font-size: 11px;
  }
  #utm-studio .upm-foot button.upm-revert:hover{ color: #f5f4ef; }
  #utm-studio .upm-foot button.upm-go{
    background: var(--brand, #0E8A47);
    border-color: transparent;
    color: #fff;
    padding: 10px 20px;
  }
  #utm-studio .upm-foot button.upm-go:hover:not(:disabled){ filter: brightness(1.12); }
  #utm-studio .upm-foot button.upm-go:disabled{ background: rgba(255,255,255,.06); color: rgba(245,244,239,.4); }

  #utm-studio .upm-spin{
    display: inline-block; width: 12px; height: 12px;
    border: 2px solid rgba(245,244,239,.3); border-top-color: #f5f4ef;
    border-radius: 50%; vertical-align: -2px; margin-right: 8px;
    animation: upmSpin .8s linear infinite;
  }
  @keyframes upmSpin { to { transform: rotate(360deg); } }

  /* ============================================================
     Send-to-Claude modal specifics
     ============================================================ */
  #utm-studio .upm-sec-hint{
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 11px;
    color: rgba(245,244,239,.4);
    letter-spacing: 0;
    text-transform: none;
    margin-left: 6px;
  }
  #utm-studio .upm-textarea{
    width: 100%;
    min-height: 180px;
    max-height: 280px;
    padding: 12px;
    background: rgba(0,0,0,.4);
    color: rgba(245,244,239,.85);
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 7px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11.5px;
    line-height: 1.45;
    resize: vertical;
    outline: none;
    box-sizing: border-box;
    white-space: pre;
    overflow: auto;
  }
  #utm-studio .upm-textarea:focus{ border-color: var(--brand, #0E8A47); }
  #utm-studio .upm-intro code{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11.5px;
    background: rgba(255,255,255,.06);
    padding: 1px 5px; border-radius: 3px;
    color: #f5f4ef;
  }
  #utm-studio .upm-foot button.upm-go.ok{
    background: #22c55e !important;
  }

  /* ============================================================
     Setup wizard (shown when backend not configured)
     ============================================================ */
  #utm-studio .upm-wizard{
    background: rgba(255,255,255,.02);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 4px;
  }
  #utm-studio .upm-wiz-head{
    margin-bottom: 16px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }
  #utm-studio .upm-wiz-title{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px; letter-spacing: .14em; text-transform: uppercase;
    color: #f5f4ef; font-weight: 500;
  }
  #utm-studio .upm-wiz-sub{
    font-size: 12px; color: rgba(245,244,239,.55);
    margin-top: 6px;
  }
  #utm-studio .upm-wiz-step{
    display: grid; grid-template-columns: 28px 1fr; gap: 14px;
    margin-bottom: 18px;
  }
  #utm-studio .upm-wiz-step:last-child{ margin-bottom: 0; }
  #utm-studio .upm-wiz-num{
    width: 28px; height: 28px; border-radius: 50%;
    background: var(--brand, #0E8A47);
    color: #fff;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px; font-weight: 600;
    display: grid; place-items: center;
    margin-top: 1px;
  }
  #utm-studio .upm-wiz-body{ min-width: 0; }
  #utm-studio .upm-wiz-h{
    font-size: 13px; font-weight: 600; color: #f5f4ef;
    margin-bottom: 6px;
  }
  #utm-studio .upm-wiz-p{
    font-size: 12.5px; line-height: 1.55;
    color: rgba(245,244,239,.7);
    margin-bottom: 10px;
  }
  #utm-studio .upm-wiz-p code{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11.5px;
    background: rgba(255,255,255,.06);
    padding: 1px 5px; border-radius: 3px;
    color: #f5f4ef;
  }
  #utm-studio .upm-wiz-p strong{ color: #f5f4ef; font-weight: 600; }
  #utm-studio .upm-wiz-p em{ color: #f5f4ef; font-style: normal; font-weight: 500; }
  #utm-studio .upm-wiz-list{
    margin: 8px 0 8px 0; padding-left: 18px;
    color: rgba(245,244,239,.7);
    font-size: 12.5px; line-height: 1.7;
  }
  #utm-studio .upm-wiz-list li{ margin-bottom: 2px; }
  #utm-studio .upm-wiz-list code{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 11px;
    background: rgba(255,255,255,.06);
    padding: 1px 5px; border-radius: 3px;
    color: #f5f4ef;
  }

  #utm-studio .upm-wiz-pwrow{
    display: flex; gap: 6px; align-items: stretch;
  }
  #utm-studio .upm-wiz-pwrow input{
    flex: 1; padding: 9px 12px;
    background: rgba(255,255,255,.05);
    color: #f5f4ef;
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 6px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 13px;
    outline: none;
    letter-spacing: .02em;
  }

  #utm-studio .upm-wiz-kv{
    background: rgba(0,0,0,.25);
    border: 1px solid rgba(255,255,255,.06);
    border-radius: 7px;
    padding: 6px 0;
    margin: 8px 0;
  }
  #utm-studio .upm-wiz-kv-row{
    display: grid; grid-template-columns: 160px 1fr auto; gap: 10px;
    align-items: center;
    padding: 8px 12px;
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 12px;
  }
  #utm-studio .upm-wiz-kv-row + .upm-wiz-kv-row{ border-top: 1px solid rgba(255,255,255,.04); }
  #utm-studio .upm-wiz-k{
    color: var(--brand, #0E8A47);
    font-weight: 500;
    letter-spacing: .04em;
  }
  #utm-studio .upm-wiz-v{
    color: #f5f4ef;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  #utm-studio .upm-wiz-v.dim{ color: rgba(245,244,239,.45); font-style: italic; }

  #utm-studio .upm-wiz-btn{
    padding: 8px 14px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.04);
    color: #f5f4ef;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 12px; font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: background .15s, filter .15s;
  }
  #utm-studio .upm-wiz-btn:hover{ background: rgba(255,255,255,.08); }
  #utm-studio .upm-wiz-btn.primary{
    background: var(--brand, #0E8A47);
    border-color: transparent;
    color: #fff;
  }
  #utm-studio .upm-wiz-btn.primary:hover:not(:disabled){ filter: brightness(1.12); }
  #utm-studio .upm-wiz-btn:disabled{ opacity: .5; cursor: not-allowed; }
  #utm-studio .upm-wiz-btn.ico{
    padding: 0; width: 36px;
    display: grid; place-items: center;
    font-size: 14px;
  }
  #utm-studio .upm-wiz-btn.ico.sm{ width: 28px; padding: 4px; font-size: 12px; }
  #utm-studio .upm-wiz-btn.ok{ background: #22c55e !important; border-color: transparent; color: #fff; }
  #utm-studio .upm-wiz-pollnote{
    margin-top: 10px;
    font-size: 12px;
    color: rgba(245,244,239,.6);
    padding: 8px 10px;
    background: rgba(255,255,255,.03);
    border-radius: 6px;
  }
  #utm-studio .upm-wiz-pollnote.ok{
    background: rgba(34,197,94,.10); color: #6ee7b7;
    border: 1px solid rgba(34,197,94,.30);
  }
  #utm-studio .upm-wiz-pollnote.err{
    background: rgba(239,68,68,.10); color: #fca5a5;
    border: 1px solid rgba(239,68,68,.30);
  }
  `;

  function buildPanel(state) {
    const root = document.createElement('div');
    root.id = 'utm-studio';
    root.innerHTML = `
      <div class="head" data-drag>
        <h3>◇ Theme Studio</h3>
        <div class="head-actions">
          <button data-min title="Minimize">–</button>
          <button data-close title="Close">×</button>
        </div>
      </div>
      <div class="tabs">
        <button class="tab active" data-tab="colors">Colors</button>
        <button class="tab" data-tab="fonts">Fonts</button>
        <button class="tab" data-tab="brand">Brand</button>
        <button class="tab" data-tab="style">Style</button>
      </div>
      <div class="body">

        <!-- Tab: Colors -->
        <div data-pane="colors">
          <div class="field">
            <div class="lbl">Brand color <span class="val" data-brand-val></span></div>
            <div class="swatches" data-brand-swatches></div>
            <div class="colorrow">
              <input type="color" data-brand-picker />
              <input type="text" data-brand-text placeholder="#0E8A47" />
            </div>
          </div>
          <div class="field">
            <div class="lbl">Surface / background</div>
            <div class="surfaces" data-surfaces></div>
          </div>
        </div>

        <!-- Tab: Fonts -->
        <div data-pane="fonts" hidden>
          <div class="field">
            <div class="lbl">Display font <span class="val">headings</span></div>
            <select data-display-font></select>
            <div class="font-preview" data-display-preview style="font-family: var(--f-display); font-weight: 300;">Heavy-duty <em style="font-style:italic;color:var(--brand)">precision</em></div>
          </div>
          <div class="field">
            <div class="lbl">Body font <span class="val">paragraph & UI</span></div>
            <select data-sans-font></select>
            <div class="font-preview" data-sans-preview style="font-family: var(--f-sans); font-size: 14px;">Manufacturing engineered to last generations.</div>
          </div>
          <div class="field">
            <div class="lbl">Mono font <span class="val">labels & numbers</span></div>
            <select data-mono-font></select>
            <div class="font-preview" data-mono-preview style="font-family: var(--f-mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase;">EST. 1986 · MODEL 04</div>
          </div>
        </div>

        <!-- Tab: Brand (logo) -->
        <div data-pane="brand" hidden>
          <div class="field">
            <div class="lbl">Logo <span class="val">masthead & footer</span></div>
            <div class="logos" data-logos></div>
          </div>
          <div class="field">
            <div class="lbl" style="color: rgba(245,244,239,.4); font-size: 9.5px;">Logo applies live across the site. Click Save to keep it.</div>
          </div>
        </div>

        <!-- Tab: Style -->
        <div data-pane="style" hidden>
          <div class="field">
            <div class="lbl">Heading weight <span class="val" data-weight-val></span></div>
            <div class="seg" data-weight>
              <button data-w="300">Light</button>
              <button data-w="400">Regular</button>
              <button data-w="500">Medium</button>
            </div>
          </div>
          <div class="field">
            <div class="lbl">Corner radius <span class="val" data-radius-val></span></div>
            <input type="range" min="0" max="16" step="1" data-radius />
          </div>
          <div class="field">
            <div class="lbl">Live preview</div>
            <div class="preview-card">
              <div class="pv-eye">Theme preview</div>
              <div class="pv-h">Built to <em>endure</em></div>
              <div class="pv-b">Heavy-duty lathes manufactured in Rajkot since 1986.</div>
              <div class="pv-btns">
                <div class="pv-btn p">Get Quote</div>
                <div class="pv-btn g">Catalog</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="foot">
        <button data-discard title="Discard unsaved changes">Discard</button>
        <button data-reset title="Reset to original">Reset</button>
        <button class="primary save-state" data-save title="Save in this browser">Save</button>
      </div>
      <div class="foot foot-publish">
        <button data-publish title="Open the modal that prepares a prompt to send to Claude">✨ Publish to live site</button>
      </div>
      <div class="foot foot-exit">
        <button data-exit title="Hide the Studio gear on all pages">Exit Studio mode</button>
      </div>
      <div class="toast" data-toast></div>

      <!-- Send-to-Claude modal -->
      <div class="upm" data-publish-modal hidden>
        <div class="upm-back" data-publish-cancel></div>
        <div class="upm-card">
          <div class="upm-head">
            <h3>Send theme to Claude</h3>
            <button data-publish-cancel title="Close">×</button>
          </div>
          <div class="upm-body">
            <p class="upm-intro">
              Your tweaks are live in this browser only. To make them live for <strong>every visitor</strong>,
              copy the block below and paste it into your chat with Claude.
              Claude will update <code>css/theme-published.css</code> and the change ships through your normal GitHub → Cloudflare flow.
            </p>

            <div class="upm-section">
              <div class="upm-sec-h">Settings summary</div>
              <div class="upm-diff" data-publish-summary></div>
            </div>

            <div class="upm-section">
              <div class="upm-sec-h">Prompt for Claude <span class="upm-sec-hint">(copy and paste this)</span></div>
              <textarea class="upm-textarea" data-publish-prompt readonly></textarea>
            </div>

            <div class="upm-status" data-publish-status hidden></div>
          </div>
          <div class="upm-foot">
            <button data-publish-cancel class="upm-cancel">Cancel</button>
            <button data-publish-copy class="upm-go">⎘ Copy prompt</button>
          </div>
        </div>
      </div>
    `;
    return root;
  }

  // ---------- Mount ----------
  // hasSavedTweaks: true only if the user clicked Save at least once.
  // We use this to skip applying inline overrides on init when there's nothing
  // saved — that way `css/theme-published.css` shows through cleanly for
  // first-time visitors with no JS-applied overrides fighting it.
  const hasSavedTweaks = (() => {
    try { return !!localStorage.getItem(STORAGE_KEY); } catch(e){ return false; }
  })();
  let savedState = loadConfig();
  let state = { ...savedState }; // working draft
  let panel = null;
  let toggleBtn = null;
  let panelOpen = false;
  let panelMinimized = false;

  function isDirty() {
    return JSON.stringify(state) !== JSON.stringify(savedState);
  }
  function updateDirtyUI() {
    if (!panel) return;
    panel.classList.toggle('dirty', isDirty());
    const saveBtn = panel.querySelector('[data-save]');
    if (saveBtn) saveBtn.textContent = isDirty() ? 'Save *' : 'Saved ✓';
  }

  function init() {
    // Apply saved config immediately — but ONLY if the user has actually saved
    // tweaks. Otherwise let css/theme-published.css be the source of truth.
    if (hasSavedTweaks) {
      applyConfig(savedState);
    }

    // If studio shouldn't activate, we're done
    if (!shouldOpen()) return;

    // Inject styles
    const styleTag = document.createElement('style');
    styleTag.id = 'utm-studio-styles';
    styleTag.textContent = PANEL_CSS;
    document.head.appendChild(styleTag);

    // Toggle button
    toggleBtn = document.createElement('button');
    toggleBtn.id = 'utm-studio-toggle';
    toggleBtn.title = 'Theme Studio (Ctrl+Shift+T)';
    toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
    toggleBtn.addEventListener('click', togglePanel);
    document.body.appendChild(toggleBtn);

    // Panel
    panel = buildPanel(state);
    document.body.appendChild(panel);
    bindPanel();
    updateDirtyUI();
    if (shouldAutoOpenPanel()) openPanel();
    else panel.classList.add('hidden');

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'T' || e.key === 't')) {
        e.preventDefault();
        togglePanel();
      }
      if (e.key === 'Escape' && panelOpen && !panelMinimized) {
        // do not autoclose, let user keep it
      }
    });
  }

  function openPanel() {
    panel.classList.remove('hidden');
    panelOpen = true;
    try { localStorage.setItem(OPEN_FLAG_KEY, '1'); } catch(e){}
  }
  function closePanel() {
    // Auto-discard unsaved changes on close so the page doesn't keep
    // accidental experiments after the panel is dismissed.
    if (isDirty()) {
      state = { ...savedState };
      applyConfig(state);
      syncUI();
      updateDirtyUI();
    }
    panel.classList.add('hidden');
    panelOpen = false;
    try { localStorage.removeItem(OPEN_FLAG_KEY); } catch(e){}
  }
  function togglePanel() {
    if (panelOpen) closePanel(); else openPanel();
  }

  function toast(msg) {
    const t = panel.querySelector('[data-toast]');
    t.textContent = msg;
    t.classList.add('on');
    clearTimeout(t._tm);
    t._tm = setTimeout(() => t.classList.remove('on'), 1600);
  }

  function bindPanel() {
    // Tabs
    panel.querySelectorAll('.tab').forEach(t => {
      t.addEventListener('click', () => {
        panel.querySelectorAll('.tab').forEach(x => x.classList.toggle('active', x === t));
        const id = t.dataset.tab;
        panel.querySelectorAll('[data-pane]').forEach(p => {
          p.hidden = p.dataset.pane !== id;
        });
      });
    });

    // Close/minimize
    panel.querySelector('[data-close]').addEventListener('click', closePanel);
    panel.querySelector('[data-min]').addEventListener('click', () => {
      const body = panel.querySelector('.body');
      const foot = panel.querySelector('.foot');
      const tabs = panel.querySelector('.tabs');
      panelMinimized = !panelMinimized;
      body.style.display = panelMinimized ? 'none' : '';
      foot.style.display = panelMinimized ? 'none' : '';
      tabs.style.display = panelMinimized ? 'none' : '';
    });

    // Brand swatches
    const swatchEl = panel.querySelector('[data-brand-swatches]');
    BRAND_PRESETS.forEach(p => {
      const b = document.createElement('button');
      b.className = 'sw';
      b.style.background = p.color;
      b.title = `${p.label} · ${p.color}`;
      b.dataset.color = p.color;
      b.addEventListener('click', () => {
        state.brand = p.color;
        commit('Brand: ' + p.label);
      });
      swatchEl.appendChild(b);
    });

    // Brand picker / text
    const brandPicker = panel.querySelector('[data-brand-picker]');
    const brandText   = panel.querySelector('[data-brand-text]');
    brandPicker.addEventListener('input', () => {
      state.brand = brandPicker.value;
      commit();
    });
    brandText.addEventListener('change', () => {
      const v = brandText.value.trim();
      if (/^#?[0-9a-f]{3}([0-9a-f]{3})?$/i.test(v)) {
        state.brand = v.startsWith('#') ? v : '#' + v;
        commit();
      }
    });

    // Surfaces
    const surfEl = panel.querySelector('[data-surfaces]');
    Object.entries(SURFACES).forEach(([id, s]) => {
      const b = document.createElement('button');
      b.className = 'surf';
      b.dataset.surface = id;
      b.innerHTML = `<span class="chip" style="background:${s.vars['--ink-2']}"></span><span>${s.label}</span>`;
      b.addEventListener('click', () => {
        state.surface = id;
        commit('Surface: ' + s.label);
      });
      surfEl.appendChild(b);
    });

    // Logos
    const logoEl = panel.querySelector('[data-logos]');
    LOGOS.forEach(l => {
      const b = document.createElement('button');
      b.className = 'logo-opt';
      b.dataset.logo = l.id;
      b.innerHTML = `<img src="${l.src}" alt="${l.label}" /><span>${l.label}</span>`;
      b.addEventListener('click', () => {
        state.logo = l.id;
        commit('Logo: ' + l.label);
      });
      logoEl.appendChild(b);
    });

    // Fonts
    const fillSel = (sel, list, current) => {
      list.forEach(f => {
        const o = document.createElement('option');
        o.value = f.id;
        o.textContent = f.label;
        if (f.id === current) o.selected = true;
        sel.appendChild(o);
      });
    };
    fillSel(panel.querySelector('[data-display-font]'), DISPLAY_FONTS, state.displayFont);
    fillSel(panel.querySelector('[data-sans-font]'),    SANS_FONTS,    state.sansFont);
    fillSel(panel.querySelector('[data-mono-font]'),    MONO_FONTS,    state.monoFont);

    panel.querySelector('[data-display-font]').addEventListener('change', (e) => {
      state.displayFont = e.target.value;
      commit();
    });
    panel.querySelector('[data-sans-font]').addEventListener('change', (e) => {
      state.sansFont = e.target.value;
      commit();
    });
    panel.querySelector('[data-mono-font]').addEventListener('change', (e) => {
      state.monoFont = e.target.value;
      commit();
    });

    // Weight
    panel.querySelectorAll('[data-weight] button').forEach(b => {
      b.addEventListener('click', () => {
        state.headingWeight = parseInt(b.dataset.w, 10);
        commit();
      });
    });

    // Radius
    panel.querySelector('[data-radius]').addEventListener('input', (e) => {
      state.radius = parseInt(e.target.value, 10);
      commit();
    });

    // Footer
    panel.querySelector('[data-discard]').addEventListener('click', () => {
      if (!isDirty()) { toast('Nothing to discard'); return; }
      state = { ...savedState };
      applyConfig(state);
      syncUI();
      updateDirtyUI();
      toast('Changes discarded');
    });
    panel.querySelector('[data-reset]').addEventListener('click', () => {
      if (!confirm('Reset all theme settings to the original site default? This will also clear your saved theme.')) return;
      state = { ...DEFAULTS };
      savedState = { ...DEFAULTS };
      clearConfig();
      applyConfig(state);
      syncUI();
      updateDirtyUI();
      toast('Reset to original');
    });
    // Exit Studio mode entirely (hide gear icon on all pages)
    panel.querySelector('[data-exit]').addEventListener('click', () => {
      if (!confirm('Exit Studio? The gear icon will be hidden on every page. To return, add ?customize to any page URL.')) return;
      try { localStorage.removeItem(STICKY_KEY); } catch(e){}
      try { localStorage.removeItem(OPEN_FLAG_KEY); } catch(e){}
      // Remove UI immediately
      panel.remove();
      toggleBtn.remove();
      panel = null;
      toggleBtn = null;
    });
    // Publish: open the multi-step modal (preview → type PUBLISH → password → commit)
    panel.querySelector('[data-publish]').addEventListener('click', () => {
      openPublishModal();
    });
    panel.querySelector('[data-save]').addEventListener('click', () => {
      saveConfig(state);
      savedState = { ...state };
      updateDirtyUI();
      toast('Saved — will apply on every visit');
    });

    // Drag head
    const head = panel.querySelector('.head');
    let dragging = false, sx = 0, sy = 0, sr = 0, sb = 0;
    head.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) return;
      dragging = true;
      head.classList.add('dragging');
      const rect = panel.getBoundingClientRect();
      sx = e.clientX; sy = e.clientY;
      sr = window.innerWidth - rect.right;
      sb = window.innerHeight - rect.bottom;
      e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - sx;
      const dy = e.clientY - sy;
      panel.style.right = Math.max(8, sr - dx) + 'px';
      panel.style.bottom = Math.max(8, sb - dy) + 'px';
    });
    document.addEventListener('mouseup', () => {
      dragging = false;
      head.classList.remove('dragging');
    });

    bindPublishModal();
    syncUI();
  }

  function syncUI() {
    // Brand
    panel.querySelector('[data-brand-val]').textContent = state.brand.toUpperCase();
    panel.querySelector('[data-brand-picker]').value = state.brand;
    panel.querySelector('[data-brand-text]').value = state.brand.toUpperCase();
    panel.querySelectorAll('.sw').forEach(s => {
      s.classList.toggle('on', s.dataset.color.toLowerCase() === state.brand.toLowerCase());
    });
    // Surface
    panel.querySelectorAll('.surf').forEach(s => {
      s.classList.toggle('on', s.dataset.surface === state.surface);
    });
    // Logo
    panel.querySelectorAll('.logo-opt').forEach(b => {
      b.classList.toggle('on', b.dataset.logo === state.logo);
    });
    // Fonts
    panel.querySelector('[data-display-font]').value = state.displayFont;
    panel.querySelector('[data-sans-font]').value    = state.sansFont;
    panel.querySelector('[data-mono-font]').value    = state.monoFont;
    // Style
    panel.querySelectorAll('[data-weight] button').forEach(b => {
      b.classList.toggle('on', parseInt(b.dataset.w, 10) === state.headingWeight);
    });
    panel.querySelector('[data-weight-val]').textContent = state.headingWeight;
    panel.querySelector('[data-radius]').value = state.radius;
    panel.querySelector('[data-radius-val]').textContent = state.radius + 'px';
  }

  // ============================================================
  // Send-to-Claude modal: open / close / copy a prompt for chat
  // ============================================================

  const KEY_LABELS = {
    brand:         'Brand color',
    surface:       'Surface / background',
    displayFont:   'Display font (headings)',
    sansFont:      'Body font',
    monoFont:      'Mono font',
    headingWeight: 'Heading weight',
    radius:        'Corner radius',
    logo:          'Logo',
    accent:        'Accent',
  };

  // Pretty value for the summary list.
  function prettyValue(key, val) {
    if (val == null || val === '') return '(not set)';
    switch (key) {
      case 'brand':
      case 'accent':       return String(val).toUpperCase();
      case 'surface':      return SURFACES[val] ? SURFACES[val].label : val;
      case 'displayFont':  return (getFontById(DISPLAY_FONTS, val) || {}).label || val;
      case 'sansFont':     return (getFontById(SANS_FONTS, val) || {}).label || val;
      case 'monoFont':     return (getFontById(MONO_FONTS, val) || {}).label || val;
      case 'logo': {
        const l = LOGOS.find(x => x.id === val);
        return l ? l.label : val;
      }
      case 'radius':        return `${val}px`;
      case 'headingWeight': return ({300: 'Light (300)', 400: 'Regular (400)', 500: 'Medium (500)'})[val] || String(val);
      default:              return String(val);
    }
  }

  // Build the bullet list of current settings shown in the modal.
  function renderSummary() {
    const el = panel.querySelector('[data-publish-summary]');
    const keys = Object.keys(KEY_LABELS).filter(k => state[k] != null && state[k] !== '');
    el.innerHTML = keys.map(k => {
      const label = KEY_LABELS[k];
      const val = prettyValue(k, state[k]);
      const chip = (k === 'brand' || k === 'accent')
        ? `<span class="upm-d-chip" style="background:${state[k]}"></span>`
        : '';
      return `<div class="upm-d-row">
        <div class="upm-d-key">${label}</div>
        <div class="upm-d-val">${chip}${val}</div>
      </div>`;
    }).join('');
  }

  // Status banner (info / ok / err) inside the modal.
  function setPublishStatus(kind, html) {
    const el = panel.querySelector('[data-publish-status]');
    if (!html) { el.hidden = true; el.textContent = ''; return; }
    el.hidden = false;
    el.className = 'upm-status ' + kind;
    el.innerHTML = html;
  }

  // Compose the full prompt (markdown + CSS block) the user pastes into chat.
  function buildClaudePrompt() {
    const css      = wrapPublishedCss(buildCSS(state), state);
    const display  = getFontById(DISPLAY_FONTS, state.displayFont);
    const sans     = getFontById(SANS_FONTS, state.sansFont);
    const mono     = getFontById(MONO_FONTS, state.monoFont);
    const surfaceLabel = SURFACES[state.surface] ? SURFACES[state.surface].label : state.surface;
    const logoMeta = LOGOS.find(l => l.id === state.logo);

    const settingsList = [
      `- Brand color: ${state.brand}`,
      `- Surface: ${surfaceLabel}`,
      `- Display font: ${display.label}`,
      `- Body font: ${sans.label}`,
      `- Mono font: ${mono.label}`,
      `- Heading weight: ${state.headingWeight}`,
      `- Corner radius: ${state.radius}px`,
      `- Logo: ${logoMeta ? logoMeta.label : state.logo} (${logoMeta ? logoMeta.src : ''})`,
    ].join('\n');

    return `Please publish this theme to the live site.

**What to do:**
1. Overwrite \`css/theme-published.css\` with the CSS block below (replace its full contents).
2. If the logo changed, also update the default \`<img data-utm-logo src="…">\` value in every HTML page so first-time visitors see the right logo.
3. Commit + push so Cloudflare Pages redeploys.

**Settings:**
${settingsList}

**CSS to write into \`css/theme-published.css\`:**

\`\`\`css
${css}
\`\`\`
`;
  }

  function openPublishModal() {
    const modal = panel.querySelector('[data-publish-modal]');
    modal.hidden = false;
    renderSummary();
    const prompt = buildClaudePrompt();
    panel.querySelector('[data-publish-prompt]').value = prompt;
    setPublishStatus(null, '');
    // Reset the copy button label
    const btn = panel.querySelector('[data-publish-copy]');
    btn.textContent = '⎘ Copy prompt';
    btn.classList.remove('ok');
  }

  function closePublishModal() {
    panel.querySelector('[data-publish-modal]').hidden = true;
  }

  function bindPublishModal() {
    panel.querySelectorAll('[data-publish-cancel]').forEach(el => {
      el.addEventListener('click', closePublishModal);
    });
    panel.querySelector('[data-publish-copy]').addEventListener('click', async () => {
      const text = panel.querySelector('[data-publish-prompt]').value;
      const btn  = panel.querySelector('[data-publish-copy]');
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = '✓ Copied — now paste in your Claude chat';
        btn.classList.add('ok');
        setPublishStatus('ok',
          'Copied! Now switch to your chat with Claude and paste. Claude will overwrite <code>css/theme-published.css</code> and the change goes live after the normal GitHub → Cloudflare deploy.'
        );
        // Also save locally so the admin's own browser shows the theme immediately.
        saveConfig(state);
        savedState = { ...state };
        updateDirtyUI();
      } catch (e) {
        // Fallback: select the textarea so user can Cmd/Ctrl+C
        const ta = panel.querySelector('[data-publish-prompt]');
        ta.focus();
        ta.select();
        setPublishStatus('err',
          'Could not auto-copy. The text is selected — press <strong>Ctrl/Cmd + C</strong> to copy, then paste into your Claude chat.'
        );
      }
    });

    document.addEventListener('keydown', (e) => {
      const modal = panel && panel.querySelector('[data-publish-modal]');
      if (modal && !modal.hidden && e.key === 'Escape') { closePublishModal(); }
    });
  }

  // Wrap the inline CSS with a header comment + Google-Fonts @import,
  // so the file Claude writes is self-contained.
  function wrapPublishedCss(css, settings) {
    const display = getFontById(DISPLAY_FONTS, settings.displayFont);
    const sans    = getFontById(SANS_FONTS, settings.sansFont);
    const mono    = getFontById(MONO_FONTS, settings.monoFont);
    const families = [display.google, sans.google, mono.google].filter(Boolean);
    const fontUrl = `https://fonts.googleapis.com/css2?${families.map(f => 'family=' + f).join('&')}&display=swap`;
    const stamp = new Date().toISOString();
    return `/* ============================================================
   Uni-Tech Machines — Published Theme
   ------------------------------------------------------------
   Generated by Theme Studio · ${stamp}
   ============================================================ */

@import url("${fontUrl}");

${css}`;
  }

  function commit(msg) {
    // Preview-only: applies to DOM and updates UI but does NOT persist.
    // Persistence happens only when user clicks Save.
    applyConfig(state);
    syncUI();
    updateDirtyUI();
    if (msg) toast(msg);
  }

  // Run as early as possible — but DOM must exist for body append
  if (document.readyState === 'loading') {
    // Apply theme inline ASAP, mount UI when DOM ready
    applyConfig(state);
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose tiny API for debugging
  window.UTMStudio = {
    open: () => { if (panel) openPanel(); else { try { localStorage.setItem(OPEN_FLAG_KEY,'1'); } catch(e){} location.reload(); } },
    close: closePanel,
    reset: () => { clearConfig(); location.reload(); },
    get: () => ({ ...state }),
  };
})();
