document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // 1. Interactive Vertical Dots Navigation
  // ============================================
  const dots = document.querySelectorAll('.zzz-sidenav .dot');
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      console.log(`Navigated to slide ${index + 1}`);
    });
  });

  // ============================================
  // 2. Play Trailer Action
  // ============================================
  const playBtn = document.getElementById('openTrailerBtn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      alert('Modal Trailer Video dapat dipasang di sini! (Ganti URL video kamu pada script)');
    });
  }

  // ============================================
  // 3. Audio Effect Placeholder (Simulasi ZZZ SFX)
  // ============================================
  const buttons = document.querySelectorAll('.btn-download, .nav-icon-btn, .play-trailer-btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      // 🔊 ASSET PLACEHOLDER: Masukkan efek suara HOVER di sini
      // const hoverSfx = new Audio('assets/sfx/hover.mp3');
      // hoverSfx.play();
    });
  });

});