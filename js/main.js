/* ============================================================
   The Journey — Main JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Dynamic Season Badge ----- */
  const badge = document.getElementById('hero-season-badge');
  if (badge) {
    const now = new Date();
    const month = now.getMonth() + 1; // 1-12
    const year = now.getFullYear();
    let season;
    if (month >= 3 && month <= 10) {
      season = `Fall ${year}`;
    } else if (month >= 11) {
      season = `Spring ${year + 1}`;
    } else {
      season = `Spring ${year}`;
    }
    badge.textContent = `Now accepting applications for ${season}`;
  }

  /* ----- Mobile Nav ----- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----- Active Nav Link ----- */
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href === path ||
      (path === '' && href === 'index.html') ||
      (path.endsWith('index.html') && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  /* ----- FAQ Accordion ----- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ----- Donate Amount Buttons ----- */
  document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.amount-grid')
        .querySelectorAll('.amount-btn')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ----- Gallery Filters ----- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.g-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.season === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ----- Smooth scroll for hash links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
