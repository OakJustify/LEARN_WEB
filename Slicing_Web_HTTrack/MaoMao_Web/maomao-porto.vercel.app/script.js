const navigasi_situs = document.querySelector('.navigasi-situs');
const tombol_menu = document.querySelector('.tombol-menu');
const tautan_navigasi = document.querySelectorAll('.tautan-navigasi');
const bagian_halaman = document.querySelectorAll('main .bagian');
const elemen_muncul = document.querySelectorAll('.muncul');
const baris_ketik = document.querySelectorAll('.baris-ketik');

tombol_menu.addEventListener('click', () => {
  const menu_terbuka = navigasi_situs.classList.toggle('buka');
  tombol_menu.setAttribute('aria-expanded', String(menu_terbuka));
});

tautan_navigasi.forEach((tautan) => {
  tautan.addEventListener('click', (acara) => {
    const tujuan = document.querySelector(tautan.getAttribute('href'));

    if (tujuan) {
      acara.preventDefault();
      tujuan.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    navigasi_situs.classList.remove('buka');
    tombol_menu.setAttribute('aria-expanded', 'false');
  });
});

const pengamat_bagian = new IntersectionObserver((entri) => {
  entri.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    }

    tautan_navigasi.forEach((tautan) => {
      const tautan_aktif = tautan.getAttribute('href') === `#${item.target.id}`;
      tautan.classList.toggle('aktif', tautan_aktif);
    });
  });
}, { threshold: 0.45 });

bagian_halaman.forEach((bagian) => pengamat_bagian.observe(bagian));

const pengamat_muncul = new IntersectionObserver((entri, pengamat) => {
  entri.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    }

    item.target.classList.add('terlihat');
    pengamat.unobserve(item.target);
  });
}, { threshold: 0.15 });

elemen_muncul.forEach((elemen) => pengamat_muncul.observe(elemen));

baris_ketik.forEach((baris, indeks_baris) => {
  const teks = baris.dataset.teks;
  let indeks_huruf = 0;

  const ketik_huruf = () => {
    baris.textContent = teks.slice(0, indeks_huruf);
    indeks_huruf += 1;

    if (indeks_huruf <= teks.length) {
      window.setTimeout(ketik_huruf, 105);
    }
  };

  window.setTimeout(ketik_huruf, indeks_baris * 850 + 300);
});
