// ── Dropdown Logic ───────────────────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
      const expBtn = document.getElementById('experimentDropdownBtn');
      const expDropdown = document.getElementById('experimentDropdown');

      if (expBtn && expDropdown) {
        expBtn.addEventListener('click', (e) => {
          e.preventDefault();
          expDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.dropdown')) {
            expDropdown.classList.remove('show');
          }
        });
      }
    });

    // ── Background changed to CSS Mesh Gradient ──────────────────────────────────

    const apps = [
      // { label, bg, textColor, shape, size, initX%, initY%, r (border-radius) }
      { label: 'CRE\nME', bg: '#001219', textColor: '#fff', size: 80, x: 16, y: 24, r: '22%' },
      { label: 'DB', bg: '#005f73', textColor: '#fff', size: 72, x: 34, y: 30, r: '22.37%' },
      { label: 'GPT', bg: '#0a9396', textColor: '#fff', size: 68, x: 57, y: 22, r: '22.37%' },
      { label: '●●●', bg: '#94d2bd', textColor: '#111', size: 74, x: 65, y: 37, r: '22.37%' },
      { label: 'MC', bg: '#e9d8a6', textColor: '#111', size: 76, x: 22, y: 52, r: '22.37%' },
      { label: 'AIR', bg: '#ee9b00', textColor: '#111', size: 78, x: 74, y: 54, r: '22.37%' },
      { label: 'P', bg: '#ca6702', textColor: '#fff', size: 72, x: 5, y: 66, r: '22.37%' },
      { label: '▶️', bg: '#bb3e03', textColor: '#fff', size: 78, x: 93, y: 66, r: '18%' },
      { label: 'TW', bg: '#ae2012', textColor: '#fff', size: 68, x: 27, y: 80, r: '22.37%' },
      { label: '47', bg: '#9b2226', textColor: '#fff', size: 70, x: 50, y: 82, r: '22.37%' },
      { label: 'NIKE', bg: '#001219', textColor: '#fff', size: 64, x: 73, y: 83, r: '12px', border: true },

      // Transistor Icon
      { label: '◆', bg: '#005f73', textColor: '#fff', size: 64, x: 88, y: 27, r: '22.37%' },

      { label: 'SL', bg: '#0a9396', textColor: '#fff', size: 66, x: 82, y: 43, r: '22.37%' },
      { label: 'YT', bg: '#94d2bd', textColor: '#111', size: 70, x: 10, y: 40, r: '22.37%' },

      // Adjusted positions to fix overlaps
      { label: 'SP', bg: '#e9d8a6', textColor: '#111', size: 62, x: 38, y: 75, r: '22.37%' },
      { label: 'NOT', bg: '#ee9b00', textColor: '#111', size: 58, x: 48, y: 18, r: '14px', border: true },

      { label: 'FB', bg: '#ca6702', textColor: '#fff', size: 68, x: 60, y: 70, r: '22.37%' },
      { label: 'IG', bg: '#bb3e03', textColor: '#fff', size: 66, x: 38, y: 14, r: '22.37%' },
      { label: 'FIG', bg: '#ae2012', textColor: '#fff', size: 60, x: 78, y: 15, r: '22.37%' },
    ];

    const electronicIcons = {
      // --- MAPPED GATES ---
      'IG': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M 16 12 L 32 12 C 44 12 52 20 52 32 C 52 44 44 52 32 52 L 16 52 Z"/><line x1="4" y1="22" x2="16" y2="22"/><line x1="4" y1="42" x2="16" y2="42"/><line x1="52" y1="32" x2="60" y2="32"/></svg>`,
      'YT': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M 12 12 C 24 12 40 16 52 32 C 40 48 24 52 12 52 C 20 40 20 24 12 12 Z"/><line x1="4" y1="22" x2="14" y2="22"/><line x1="4" y1="42" x2="14" y2="42"/><line x1="52" y1="32" x2="60" y2="32"/></svg>`,
      'DB': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><path d="M 20 16 L 44 32 L 20 48 Z"/><circle cx="48" cy="32" r="4"/><line x1="4" y1="32" x2="20" y2="32"/><line x1="52" y1="32" x2="60" y2="32"/></svg>`,
      'FB': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M 16 12 C 28 12 44 16 56 32 C 44 48 28 52 16 52 C 24 40 24 24 16 12 Z"/><path d="M 8 12 C 16 24 16 40 8 52"/><line x1="0" y1="22" x2="10" y2="22"/><line x1="0" y1="42" x2="10" y2="42"/><line x1="56" y1="32" x2="64" y2="32"/></svg>`,
      'FIG': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M 12 12 C 24 12 40 16 48 32 C 40 48 24 52 12 52 C 20 40 20 24 12 12 Z"/><circle cx="52" cy="32" r="4"/><line x1="4" y1="22" x2="14" y2="22"/><line x1="4" y1="42" x2="14" y2="42"/><line x1="56" y1="32" x2="64" y2="32"/></svg>`,
      'CRE\nME': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M 16 12 C 28 12 40 16 48 32 C 40 48 28 52 16 52 C 24 40 24 24 16 12 Z"/><path d="M 8 12 C 16 24 16 40 8 52"/><circle cx="52" cy="32" r="4"/><line x1="0" y1="22" x2="10" y2="22"/><line x1="0" y1="42" x2="10" y2="42"/><line x1="56" y1="32" x2="64" y2="32"/></svg>`,
      'SP': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><circle cx="32" cy="32" r="16"/><line x1="20" y1="20" x2="44" y2="44"/><line x1="44" y1="20" x2="20" y2="44"/><line x1="32" y1="48" x2="32" y2="60"/></svg>`,
      '47': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M 12 12 L 28 12 C 40 12 48 20 48 32 C 48 44 40 52 28 52 L 12 52 Z"/><circle cx="52" cy="32" r="4"/><line x1="0" y1="22" x2="12" y2="22"/><line x1="0" y1="42" x2="12" y2="42"/><line x1="56" y1="32" x2="64" y2="32"/></svg>`,
      // --- REMAINING COMPONENTS ---
      'GPT': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><line x1="4" y1="32" x2="16" y2="32"/><path d="M 16 32 C 16 16 24 16 24 32 C 24 16 32 16 32 32 C 32 16 40 16 40 32 C 40 16 48 16 48 32"/><line x1="48" y1="32" x2="60" y2="32"/></svg>`,
      '●●●': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><line x1="10" y1="32" x2="28" y2="32"/><line x1="28" y1="16" x2="28" y2="48"/><line x1="36" y1="16" x2="36" y2="48"/><line x1="36" y1="32" x2="54" y2="32"/></svg>`,
      'MC': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><line x1="4" y1="32" x2="14" y2="32"/><polyline points="14,32 18,20 26,44 34,20 42,44 46,32"/><line x1="46" y1="32" x2="60" y2="32"/></svg>`,
      'AIR': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><polygon points="20,16 44,32 20,48" stroke-linejoin="round"/><line x1="44" y1="16" x2="44" y2="48"/><line x1="8" y1="32" x2="20" y2="32"/><line x1="44" y1="32" x2="56" y2="32"/></svg>`,
      'P': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><line x1="28" y1="16" x2="28" y2="48"/><line x1="36" y1="24" x2="36" y2="40"/><line x1="12" y1="32" x2="28" y2="32"/><line x1="36" y1="32" x2="52" y2="32"/></svg>`,
      '▶️': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><line x1="32" y1="16" x2="32" y2="36"/><line x1="16" y1="36" x2="48" y2="36"/><line x1="24" y1="44" x2="40" y2="44"/><line x1="30" y1="52" x2="34" y2="52"/></svg>`,
      'TW': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><line x1="8" y1="32" x2="20" y2="32"/><circle cx="22" cy="32" r="2"/><line x1="24" y1="30" x2="40" y2="20"/><circle cx="42" cy="32" r="2"/><line x1="44" y1="32" x2="56" y2="32"/></svg>`,
      'NIKE': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><polygon points="20,16 52,32 20,48" /><line x1="4" y1="24" x2="20" y2="24"/><line x1="4" y1="40" x2="20" y2="40"/><line x1="52" y1="32" x2="60" y2="32"/></svg>`,

      // Refined Transistor Symbol 
      '◆': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="32" cy="32" r="24"/>
          <line x1="24" y1="20" x2="24" y2="44"/>
          <line x1="8" y1="32" x2="24" y2="32"/>
          <line x1="24" y1="26" x2="42" y2="14"/>
          <line x1="24" y1="38" x2="42" y2="50"/>
          <polygon points="44,52 32,48 40,38" fill="currentColor" stroke="none"/>
        </svg>`,

      'SL': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"><line x1="32" y1="24" x2="32" y2="56"/><polygon points="32,24 16,8 48,8"/><line x1="16" y1="8" x2="48" y2="8"/></svg>`,
      'NOT': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="4"><rect x="20" y="16" width="24" height="32" rx="2"/><line x1="12" y1="22" x2="20" y2="22"/><line x1="12" y1="32" x2="20" y2="32"/><line x1="12" y1="42" x2="20" y2="42"/><line x1="44" y1="22" x2="52" y2="22"/><line x1="44" y1="32" x2="52" y2="32"/><line x1="44" y1="42" x2="52" y2="42"/></svg>`
    };

    const layer = document.getElementById('iconsLayer');

    apps.forEach((app, i) => {
      const el = document.createElement('div');
      el.className = 'app-icon';

      const s = app.size;
      el.style.width = s + 'px';
      el.style.height = s + 'px';
      el.style.left = `calc(${app.x}% - ${s / 2}px)`;
      el.style.top = `calc(${app.y}% - ${s / 2}px)`;

      // This now applies '22.37%' (rounded square) for the transistor, and defaults for others
      el.style.borderRadius = app.r || '22.37%';

      if (app.border) el.style.border = '1px solid rgba(0,0,0,0.1)';

      el.style.background = app.bg;

      // floating animation params (unique per icon)
      const seed = i * 137.508;
      const r = (min, max) => min + ((seed * (i + 1)) % (max - min));
      const dur = 6 + (i % 7) * 1.1;
      const del = (i * 0.35) % 3;

      el.style.setProperty('--duration', dur + 's');
      el.style.setProperty('--delay', del + 's');
      el.style.setProperty('--tx1', (r(-14, 14)).toFixed(1) + 'px');
      el.style.setProperty('--ty1', (r(-14, 14)).toFixed(1) + 'px');
      el.style.setProperty('--tx2', (r(-18, 18)).toFixed(1) + 'px');
      el.style.setProperty('--ty2', (r(-18, 18)).toFixed(1) + 'px');
      el.style.setProperty('--tx3', (r(-12, 12)).toFixed(1) + 'px');
      el.style.setProperty('--ty3', (r(-20, 20)).toFixed(1) + 'px');
      el.style.setProperty('--tx4', (r(-16, 16)).toFixed(1) + 'px');
      el.style.setProperty('--ty4', (r(-16, 16)).toFixed(1) + 'px');
      el.style.setProperty('--r1', (r(-4, 4)).toFixed(1) + 'deg');
      el.style.setProperty('--r2', (r(-6, 6)).toFixed(1) + 'deg');
      el.style.setProperty('--r3', (r(-3, 3)).toFixed(1) + 'deg');
      el.style.setProperty('--r4', (r(-5, 5)).toFixed(1) + 'deg');

      // Content
      const inner = document.createElement('div');
      inner.className = 'icon-inner';
      inner.style.color = app.textColor;
      inner.style.background = app.bg;
      inner.style.borderRadius = 'inherit';

      // Apply mapped electronic symbols if they exist, else default to label
      if (electronicIcons[app.label]) {
        inner.innerHTML = electronicIcons[app.label];
      } else {
        inner.textContent = app.label;
      }

      el.appendChild(inner);

      // Staggered fade-in
      el.style.opacity = '0';
      el.style.animation = `float ${dur}s ${del}s ease-in-out infinite alternate`;
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease';
        el.style.opacity = '1';
      }, 100 + i * 80);

      layer.appendChild(el);
    });

    // Subtle parallax on mousemove
    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      const icons = document.querySelectorAll('.app-icon');
      icons.forEach((icon, i) => {
        const depth = 0.5 + (i % 5) * 0.2;
        const px = dx * depth * 8;
        const py = dy * depth * 8;
        icon.style.marginLeft = px + 'px';
        icon.style.marginTop = py + 'px';
      });
    });