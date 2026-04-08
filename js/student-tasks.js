(function () {
  const SESSION_KEY = 'logicflow_session';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function applyProfile() {
    const role = sessionStorage.getItem(SESSION_KEY);
    const display = sessionStorage.getItem('logicflow_student_display');
    const email = sessionStorage.getItem('logicflow_student_email');
    const nameEl = document.getElementById('stDisplayName');
    const subEl = document.getElementById('stSubtitle');
    const av = document.getElementById('stAvatar');

    if (nameEl) {
      nameEl.textContent = display || (role === 'student' ? 'Student' : 'Student');
    }

    if (subEl) {
      if (role === 'student' && email) {
        subEl.innerHTML = `University session · <span class="st-email-hint">${escapeHtml(email)}</span>`;
      } else {
        subEl.textContent =
          'Electronics lab · Sign in as a university student on the home page to show your name and email here.';
      }
    }

    if (av) {
      const base = display || 'S';
      av.textContent = base.charAt(0).toUpperCase();
    }
  }

  const role = sessionStorage.getItem(SESSION_KEY);
  const demoParam = new URLSearchParams(window.location.search).get('demo');
  const banner = document.getElementById('stPreviewBanner');
  if (banner && role !== 'student' && demoParam !== '1') {
    banner.hidden = false;
  }

  function animateMetric() {
    const el = document.getElementById('stOverallPct');
    if (!el) return;
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    if (prefersReducedMotion) {
      el.textContent = String(target);
      return;
    }
    const start = performance.now();
    const dur = 900;
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function fillProgressBars() {
    document.querySelectorAll('.st-progress-fill[data-width]').forEach((bar) => {
      const w = bar.getAttribute('data-width');
      const apply = () => {
        bar.style.width = `${w}%`;
      };
      if (prefersReducedMotion) {
        apply();
        return;
      }
      const row = bar.closest('.st-task-card');
      if (!row || !('IntersectionObserver' in window)) {
        apply();
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              apply();
              io.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(row);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyProfile();
    animateMetric();
    fillProgressBars();
  });
})();
