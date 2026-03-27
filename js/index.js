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

    // ── Animated blob background (Codex-style) ───────────────────────────────────
    (function() {
      const canvas = document.getElementById('bgCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let W, H;
      const blobs = [
        { xf:.15, yf:.15, rf:.45, color:[120,100,255], speed:0.00018, phase:0    },
        { xf:.78, yf:.10, rf:.40, color:[90,140,255],  speed:0.00013, phase:1.2  },
        { xf:.50, yf:.55, rf:.38, color:[160,80,240],  speed:0.00021, phase:2.4  },
        { xf:.08, yf:.68, rf:.33, color:[200,160,255], speed:0.00016, phase:0.7  },
        { xf:.88, yf:.72, rf:.32, color:[100,120,255], speed:0.00019, phase:3.1  },
        { xf:.42, yf:.85, rf:.28, color:[130,90,255],  speed:0.00014, phase:4.5  },
      ];
      function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
      }
      function draw(ts) {
        ctx.clearRect(0,0,W,H);
        ctx.fillStyle='#eceeff'; ctx.fillRect(0,0,W,H);
        for(const b of blobs){
          const angle=ts*b.speed+b.phase;
          const cx=(b.xf+Math.sin(angle*1.3)*0.12)*W;
          const cy=(b.yf+Math.cos(angle*0.9)*0.10)*H;
          const r=b.rf*Math.min(W,H)*(0.9+0.1*Math.sin(angle*2.1));
          const [R,G,B]=b.color;
          const g=ctx.createRadialGradient(cx,cy,0,cx,cy,r);
          g.addColorStop(0,  `rgba(${R},${G},${B},0.58)`);
          g.addColorStop(0.5,`rgba(${R},${G},${B},0.20)`);
          g.addColorStop(1,  `rgba(${R},${G},${B},0)`);
          ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
          ctx.fillStyle=g; ctx.fill();
        }
        // subtle white vignette at edges
        const vx=ctx.createRadialGradient(W/2,H/2,Math.min(W,H)*0.3,W/2,H/2,Math.min(W,H)*0.9);
        vx.addColorStop(0,'rgba(255,255,255,0)');
        vx.addColorStop(1,'rgba(255,255,255,0.30)');
        ctx.fillStyle=vx; ctx.fillRect(0,0,W,H);
        requestAnimationFrame(draw);
      }
      resize();
      window.addEventListener('resize',resize);
      requestAnimationFrame(draw);
    })();
    // ─────────────────────────────────────────────────────────────────────────────


    const apps = [
      // Palette: Cherry Blossom #edafb8, Powder Petal #f7e1d7, Dust Grey #dedbd2, Ash Grey #b0c4b1, Iron Grey #4a5759
      // Distributed spatially — no two adjacent icons share a color, dark anchors spread evenly
      { label: 'CRE\nME', bg: '#b0c4b1', textColor: '#4a5759', size: 80, x: 16, y: 24, r: '22%' },
      { label: 'DB', bg: '#edafb8', textColor: '#4a5759', size: 72, x: 34, y: 30, r: '22.37%' },
      { label: 'GPT', bg: '#f7e1d7', textColor: '#4a5759', size: 68, x: 57, y: 22, r: '22.37%' },
      { label: '●●●', bg: '#dedbd2', textColor: '#4a5759', size: 74, x: 65, y: 37, r: '22.37%' },
      { label: 'MC', bg: '#f7e1d7', textColor: '#4a5759', size: 76, x: 22, y: 52, r: '22.37%' },
      { label: 'AIR', bg: '#edafb8', textColor: '#4a5759', size: 78, x: 74, y: 54, r: '22.37%' },
      { label: 'P', bg: '#dedbd2', textColor: '#4a5759', size: 72, x: 5, y: 66, r: '22.37%' },
      { label: '▶️', bg: '#f7e1d7', textColor: '#4a5759', size: 78, x: 93, y: 66, r: '18%' },
      { label: 'TW', bg: '#edafb8', textColor: '#4a5759', size: 68, x: 27, y: 80, r: '22.37%' },
      { label: '47', bg: '#dedbd2', textColor: '#4a5759', size: 70, x: 50, y: 82, r: '22.37%' },
      { label: 'NIKE', bg: '#b0c4b1', textColor: '#4a5759', size: 64, x: 73, y: 83, r: '12px', border: true },

      // Transistor Icon
      { label: '◆', bg: '#4a5759', textColor: '#f7e1d7', size: 64, x: 88, y: 27, r: '22.37%' },

      { label: 'SL', bg: '#b0c4b1', textColor: '#4a5759', size: 66, x: 82, y: 43, r: '22.37%' },
      { label: 'YT', bg: '#4a5759', textColor: '#f7e1d7', size: 70, x: 10, y: 40, r: '22.37%' },

      // Adjusted positions to fix overlaps
      { label: 'SP', bg: '#b0c4b1', textColor: '#4a5759', size: 62, x: 38, y: 75, r: '22.37%' },
      { label: 'NOT', bg: '#4a5759', textColor: '#f7e1d7', size: 58, x: 48, y: 18, r: '14px', border: true },

      { label: 'FB', bg: '#4a5759', textColor: '#f7e1d7', size: 68, x: 60, y: 70, r: '22.37%' },
      { label: 'IG', bg: '#dedbd2', textColor: '#4a5759', size: 66, x: 38, y: 14, r: '22.37%' },
      { label: 'FIG', bg: '#edafb8', textColor: '#4a5759', size: 60, x: 78, y: 15, r: '22.37%' },
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

    // ── Binary Hover Canvas Effect ──────────────────────────────────────────────
    (function() {
      const canvas = document.getElementById('particleCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particlesArray = [];

      const mouse = {
        x: null,
        y: null,
        radius: 180
      };

      window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
      });

      window.addEventListener('mouseout', function() {
        mouse.x = null;
        mouse.y = null;
      });

      class Particle {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.baseY = y;
          this.binary = Math.random() > 0.5 ? '1' : '0';
          this.fontSize = 14;
          this.friction = 0.85;
          this.ease = 0.05;
          this.vx = 0;
          this.vy = 0;
          this.alpha = 0;
        }

        draw() {
          if (this.alpha > 0.01) {
            ctx.fillStyle = `rgba(80, 60, 180, ${this.alpha * 0.5})`;
            ctx.font = `${this.fontSize}px monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.binary, this.x, this.y);
          }
        }

        update() {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (mouse.x != null && distance < mouse.radius) {
            this.alpha = 1 - (distance / mouse.radius);
            let force = (mouse.radius - distance) / mouse.radius;
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            this.vx -= forceDirectionX * force * 5;
            this.vy -= forceDirectionY * force * 5;
          } else {
            this.alpha -= 0.05;
            if (this.alpha < 0) this.alpha = 0;
          }

          this.vx += (this.baseX - this.x) * this.ease;
          this.vy += (this.baseY - this.y) * this.ease;
          this.vx *= this.friction;
          this.vy *= this.friction;
          this.x += this.vx;
          this.y += this.vy;
        }
      }

      function init() {
        particlesArray = [];
        const spacing = 30;
        for (let y = 0; y < canvas.height; y += spacing) {
          for (let x = 0; x < canvas.width; x += spacing) {
            particlesArray.push(new Particle(x, y));
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
      }

      window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      });

      init();
      animate();
    })();