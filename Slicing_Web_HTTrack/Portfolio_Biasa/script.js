/* =========================================================================
   David Dwi Wahyudi — halaman tunggal

   Semua isi halaman ada di bagian 1. Menambah proyek atau catatan cukup
   menambah satu objek di larik yang sesuai; tampilannya menyusul sendiri.
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =======================================================================
     1. ISI HALAMAN
     ======================================================================= */

  // Strip kabar di bawah nama.
  const KABAR = [
    'Dev log baru tiap pekan',
    'Task Notes sudah bisa dipakai offline',
    'Generator CSS Grid masuk tahap uji',
    'Terbuka untuk kolaborasi proyek web',
    'Sedang membaca Russell & Norvig, bab pencarian'
  ];

  // state: 'jalan' (dikerjakan aktif), 'awal' (baru mulai), 'rawat' (selesai, masih dirawat)
  const PROYEK = [
    {
      state: 'jalan',
      label: 'Dikerjakan',
      nama: 'Task Notes bergaya Notion',
      desc: 'Pencatat tugas berbasis browser. Blok teks bisa disusun ulang dengan seret, dan seluruh isinya tersimpan di <code>localStorage</code> sehingga tetap ada setelah tab ditutup.',
      tools: ['DOM API', 'localStorage', 'Drag & drop'],
      progres: 68
    },
    {
      state: 'jalan',
      label: 'Dikerjakan',
      nama: 'Generator CSS Grid',
      desc: 'Alat bantu visual untuk menyusun grid rumit: geser jumlah kolom dan jaraknya, kodenya langsung bisa disalin. Lahir karena saya bosan menghitung <code>grid-template-areas</code> manual.',
      tools: ['JavaScript', 'CSS Variables', 'Clipboard API'],
      progres: 45
    },
    {
      state: 'rawat',
      label: 'Dirawat',
      nama: 'Halaman ini',
      desc: 'Portofolio satu halaman tanpa framework apa pun. Isi proyek dan dev log disimpan sebagai data, jadi menambah satu entri tidak pernah merusak tata letaknya.',
      tools: ['HTML5', 'CSS Grid', 'Vanilla JS'],
      progres: 90
    },
    {
      state: 'awal',
      label: 'Baru mulai',
      nama: 'Pencari warna aksesibel',
      desc: 'Masukkan satu warna merek, keluar palet lengkap yang sudah lolos rasio kontras WCAG untuk teks besar maupun kecil.',
      tools: ['Color math', 'Canvas', 'WCAG 2.1'],
      progres: 12
    }
  ];

  // Empat catatan pertama langsung terlihat, sisanya di balik tombol.
  const LOG = [
    {
      tanggal: '20 September 2026',
      judul: 'Buku dibongkar jadi satu halaman',
      isi: 'Versi lama situs ini berbentuk buku dengan halaman yang dibalik. Bagus dilihat, tapi tiap pembaca harus membalik empat kali sebelum sampai ke proyek. Sekarang semuanya digulir dalam satu halaman, dan mesin paginasinya saya pensiunkan.'
    },
    {
      tanggal: '18 September 2026',
      judul: 'Tahan, jangan klik',
      isi: 'Tombol ganti tema di pojok kanan atas harus ditahan sekitar satu detik. Klik tak sengaja jadi tidak mengubah apa pun, dan bilah yang terisi memberi tahu kapan perubahannya akan terjadi.'
    },
    {
      tanggal: '15 September 2026',
      judul: 'Grid dan Flexbox bukan saingan',
      isi: 'Flexbox untuk satu sumbu — deretan tombol, baris tag. Grid untuk dua sumbu sekaligus, seperti kartu proyek di atas. Begitu aturan itu saya pegang, tata letak berhenti saling menimpa.'
    },
    {
      tanggal: '10 September 2026',
      judul: 'Nord yang terlalu redup',
      isi: 'Abu-abu bawaan Nord untuk teks sekunder hanya mencapai rasio 3,4:1 di latar gelap. Saya naikkan sedikit kecerahannya sampai lolos ambang 4,5:1 tanpa merusak suasana paletnya.'
    },
    {
      tanggal: '2 September 2026',
      judul: 'Satu listener untuk banyak tombol',
      isi: 'Event delegation: pasang satu pendengar di induk, lalu baca <code>event.target</code>. Tombol yang dibuat belakangan ikut bekerja tanpa didaftarkan ulang — persis yang dibutuhkan halaman yang isinya datang dari JavaScript.'
    },
    {
      tanggal: '25 Agustus 2026',
      judul: 'Menyimpan di browser secukupnya',
      isi: '<code>localStorage</code> hanya menerima teks, jadi objek harus melewati <code>JSON.stringify</code>. Membaca kembali tanpa <code>try/catch</code> pernah membuat aplikasi saya mati total gara-gara satu data lama yang rusak.'
    },
    {
      tanggal: '14 Agustus 2026',
      judul: 'Berhenti pakai framework dulu',
      isi: 'Saya menulis ulang portofolio pertama tanpa pustaka apa pun. Ukuran berkasnya turun jauh, tapi yang lebih berharga: tidak ada lagi bagian yang jalan tanpa saya mengerti kenapa.'
    }
  ];

  const PENCAPAIAN = [
    {
      judul: 'Antarmuka rumit tanpa framework',
      isi: 'Konten dinamis, pengamat gulir, animasi, dan pengaturan tema di halaman ini seluruhnya berjalan di atas JavaScript murni. Berkasnya kecil, dan tidak ada bagian yang tidak saya pahami.'
    },
    {
      judul: 'Satu sistem desain yang konsisten',
      isi: 'Warna, jarak, dan tipografi diatur lewat custom property di satu tempat. Mengganti seluruh tema situs sekarang cukup satu blok CSS.'
    },
    {
      judul: 'Catatan yang benar-benar jalan',
      isi: 'Lebih dari tiga puluh dev log tertulis rapi, termasuk yang berisi jalan buntu. Arsipnya masih bisa dicari karena satu catatan hanya membahas satu persoalan.'
    }
  ];

  const TARGET = [
    'Tiga puluh hari menulis dan commit berturut-turut, termasuk saat masa ujian.',
    'Mendalami GSAP dan Framer Motion untuk tahu kapan pustaka animasi memang sepadan.',
    'Menguji seluruh situs hanya dengan keyboard, tanpa satu kali pun menyentuh tetikus.'
  ];

  /* =======================================================================
     2. MENYUSUN HALAMAN
     ======================================================================= */

  const $ = sel => document.querySelector(sel);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- strip kabar: isinya digandakan supaya gulirannya tak pernah putus ---
  const rail = $('#tickerRail');
  if (rail) {
    const satuPutaran = KABAR
      .map(teks => `<span>${teks}</span><span class="sep" aria-hidden="true">✱</span>`)
      .join('');
    rail.innerHTML = satuPutaran + satuPutaran;
  }

  // --- kartu proyek ---
  const grid = $('#gridProyek');
  if (grid) {
    grid.innerHTML = PROYEK.map(p => `
      <article class="proj">
        <span class="proj__tag" data-state="${p.state}">${p.label}</span>
        <h3 class="proj__name">${p.nama}</h3>
        <p class="proj__desc">${p.desc}</p>
        <ul class="proj__tools">${p.tools.map(t => `<li>${t}</li>`).join('')}</ul>
        <div class="proj__bar">
          <div class="proj__meter"><i data-fill="${p.progres}"></i></div>
          <p class="proj__pct">${p.progres}% menuju versi pertama</p>
        </div>
      </article>
    `).join('');
  }

  // --- dev log ---
  const TERLIHAT = 4;
  const logList = $('#logList');
  const logMore = $('#logMore');

  if (logList) {
    logList.innerHTML = LOG.map((c, i) => `
      <li ${i === 0 ? 'class="is-new"' : ''} ${i >= TERLIHAT ? 'hidden' : ''}>
        <p class="log__date">${c.tanggal}</p>
        <h3 class="log__title">${c.judul}</h3>
        <p class="log__body">${c.isi}</p>
      </li>
    `).join('');
  }

  if (logMore && logList) {
    const tersembunyi = LOG.length - TERLIHAT;
    if (tersembunyi <= 0) {
      logMore.hidden = true;
    } else {
      let terbuka = false;
      logMore.textContent = `Tampilkan ${tersembunyi} catatan lama`;

      logMore.addEventListener('click', () => {
        terbuka = !terbuka;
        logList.querySelectorAll('li').forEach((li, i) => {
          if (i >= TERLIHAT) li.hidden = !terbuka;
        });
        logMore.textContent = terbuka
          ? 'Sembunyikan catatan lama'
          : `Tampilkan ${tersembunyi} catatan lama`;
      });
    }
  }

  // --- pencapaian & target ---
  const wins = $('#winsList');
  if (wins) {
    wins.innerHTML = PENCAPAIAN.map(w => `
      <li><h3>${w.judul}</h3><p>${w.isi}</p></li>
    `).join('');
  }

  const next = $('#nextList');
  if (next) next.innerHTML = TARGET.map(t => `<li>${t}</li>`).join('');

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* =======================================================================
     3. BILAH PROGRES — diisi saat kartunya pertama kali terlihat
     ======================================================================= */
  const meters = document.querySelectorAll('.proj__meter i');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    meters.forEach(m => { m.style.width = m.dataset.fill + '%'; });
  } else {
    const pengamat = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.style.width = e.target.dataset.fill + '%';
        obs.unobserve(e.target);
      });
    }, { threshold: .4 });
    meters.forEach(m => pengamat.observe(m));
  }

  /* =======================================================================
     4. NAVIGASI — menandai bagian yang sedang dibaca
     ======================================================================= */
  const tautan = [...document.querySelectorAll('.nav a')];
  const bagian = tautan
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (bagian.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        tautan.forEach(a => {
          a.classList.toggle('is-here', a.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    bagian.forEach(s => spy.observe(s));
  }

  /* =======================================================================
     5. TAHAN UNTUK GANTI TEMA
     ======================================================================= */
  const hold = $('#holdTheme');
  const holdLabel = $('#holdLabel');
  const LAMA_TAHAN = 750;
  const TEKS_AWAL = 'Tahan untuk ganti tema';

  const simpanTema = nilai => {
    try { localStorage.setItem('tema', nilai); } catch (err) { /* mode privat: abaikan */ }
  };

  try {
    const tersimpan = localStorage.getItem('tema');
    if (tersimpan === 'light' || tersimpan === 'dark') {
      document.documentElement.dataset.theme = tersimpan;
    }
  } catch (err) { /* abaikan */ }

  if (hold && holdLabel) {
    let timer = null;

    const mulai = ev => {
      ev.preventDefault();
      if (timer) return;
      hold.classList.remove('is-done');
      hold.classList.add('is-holding');
      holdLabel.textContent = 'Terus tahan…';

      timer = setTimeout(() => {
        const baru = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        document.documentElement.dataset.theme = baru;
        simpanTema(baru);

        hold.classList.remove('is-holding');
        hold.classList.add('is-done');
        holdLabel.textContent = baru === 'light' ? 'Tema terang' : 'Tema gelap';
        timer = null;

        setTimeout(() => {
          hold.classList.remove('is-done');
          holdLabel.textContent = TEKS_AWAL;
        }, 1400);
      }, reduceMotion ? 120 : LAMA_TAHAN);
    };

    const batal = () => {
      if (!timer) return;
      clearTimeout(timer);
      timer = null;
      hold.classList.remove('is-holding');
      holdLabel.textContent = TEKS_AWAL;
    };

    hold.addEventListener('pointerdown', mulai);
    hold.addEventListener('pointerup', batal);
    hold.addEventListener('pointerleave', batal);
    hold.addEventListener('pointercancel', batal);

    // Keyboard: spasi atau enter ditahan memberi efek yang sama.
    hold.addEventListener('keydown', ev => {
      if (ev.key === ' ' || ev.key === 'Enter') mulai(ev);
    });
    hold.addEventListener('keyup', batal);
    hold.addEventListener('blur', batal);
  }

});