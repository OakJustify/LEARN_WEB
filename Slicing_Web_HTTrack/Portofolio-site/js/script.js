// ============================================
// Scroll-triggered reveal for case studies & skill cards
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('.case, .skill-card');

  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));

  // Respect reduced-motion preference: skip the animated reveal entirely
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealTargets.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
  }
});

// ============================================
// Nav status dot — swap text if you go unavailable
// Edit the string below to update your availability message
// ============================================
const navStatus = document.querySelector('.nav__status');
if (navStatus) {
  navStatus.lastChild.textContent = 'AVAILABLE FOR HIRE';
}

// ============================================
// Trigger Glitch Burst on Click (Keeping Base Looping)
// ============================================
const heroTitle = document.querySelector('.hero__title');

if (heroTitle) {
  heroTitle.addEventListener('click', () => {
    // Reset class untuk memungkinkan trigger berulang-ulang
    heroTitle.classList.remove('is-clicked');
    void heroTitle.offsetWidth; // Force Reflow CSS
    heroTitle.classList.add('is-clicked');
  });

  heroTitle.addEventListener('animationend', (e) => {
    // Hapus class burst setelah animasi klik selesai agar kembali ke looping biasa
    if (e.animationName === 'title-shake') {
      heroTitle.classList.remove('is-clicked');
    }
  });
}
// Sync glitch effect between Title and Character Image on click
const heroTitleEl = document.querySelector('.hero__title');
const charImgEl = document.querySelector('.char-card__img');

if (heroTitleEl) {
  heroTitleEl.addEventListener('click', () => {
    // Trigger glitch judul
    heroTitleEl.classList.remove('is-clicked');
    void heroTitleEl.offsetWidth;
    heroTitleEl.classList.add('is-clicked');

    // Trigger glitch gambar karakter bersamaan
    if (charImgEl) {
      charImgEl.classList.remove('is-glitching');
      void charImgEl.offsetWidth;
      charImgEl.classList.add('is-glitching');
    }
  });

  heroTitleEl.addEventListener('animationend', (e) => {
    if (e.animationName === 'title-shake') {
      heroTitleEl.classList.remove('is-clicked');
    }
  });
}

if (charImgEl) {
  charImgEl.addEventListener('animationend', () => {
    charImgEl.classList.remove('is-glitching');
  });
}