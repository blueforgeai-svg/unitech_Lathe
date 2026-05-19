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
  const STYLE_ID = 'utm-theme-overrides';
  const FONT_LINK_ID = 'utm-theme-fonts';

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
    { id: 'rounded', label: 'Pill badge',  src: 'img/logos/unitech-logo-rounded.png' },
    { id: 'stacked', label: 'With "Machines"', src: 'img/logos/unitech-logo-only.png' },
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
    const q = window.location.search;
    if (/[?&](customize|theme|studio)(=|&|$)/i.test(q)) return true;
    if (window.location.hash === '#customize' || window.location.hash === '#theme') return true;
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
        <button data-copy title="Copy CSS overrides">Copy CSS</button>
        <button class="primary save-state" data-save title="Save changes">Save</button>
      </div>
      <div class="toast" data-toast></div>
    `;
    return root;
  }

  // ---------- Mount ----------
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
    // Apply saved config immediately
    applyConfig(savedState);

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
    openPanel();

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
    panel.querySelector('[data-copy]').addEventListener('click', () => {
      const css = buildCSS(state);
      const display = getFontById(DISPLAY_FONTS, state.displayFont);
      const sans = getFontById(SANS_FONTS, state.sansFont);
      const mono = getFontById(MONO_FONTS, state.monoFont);
      const families = [display.google, sans.google, mono.google].filter(Boolean);
      const fontLink = `<link href="https://fonts.googleapis.com/css2?${families.map(f => 'family=' + f).join('&')}&display=swap" rel="stylesheet" />`;
      const out = `/* Theme Studio — generated ${new Date().toISOString().slice(0,10)} */\n${css}\n/* In <head>: */\n/* ${fontLink} */`;
      navigator.clipboard.writeText(out).then(() => toast('CSS copied'));
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
