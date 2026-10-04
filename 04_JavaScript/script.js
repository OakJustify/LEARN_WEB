/* ==========================================
   1. SELEKSI ELEMEN DOM (DOM SELECTION)
   ========================================== */
// Memilih elemen berdasarkan ID
const dialog = document.getElementById('myDialog');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const myCanvas = document.getElementById('myCanvas');

// Memilih elemen tunggal dengan CSS Selector (querySelector)
const mainHeader = document.querySelector('header h1');
const mainForm = document.querySelector('form');

// Memilih banyak elemen sekaligus (querySelectorAll -> menghasilkan NodeList)
const allNavLinks = document.querySelectorAll('nav a');


/* ==========================================
   2. EVENT LISTENER & MANIPULASI TEKS/GAYA
   ========================================== */
// Mengubah teks dan warna saat header diklik
if (mainHeader) {
  mainHeader.addEventListener('click', () => {
    mainHeader.textContent = '⚡ Panduan HTML5 & JS Aktif!';
    mainHeader.style.color = '#16a34a'; // Mengubah gaya inline CSS
  });
}

// Menambahkan efek aktif pada menu navigasi saat diklik
allNavLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Menghapus kelas 'active' dari semua link
    allNavLinks.forEach((l) => l.classList.remove('active'));
    
    // Menambahkan kelas 'active' pada link yang baru diklik
    event.target.classList.add('active');
  });
});


/* ==========================================
   3. PENANGANAN FORMULIR (FORM HANDLING)
   ========================================== */
if (mainForm) {
  mainForm.addEventListener('submit', (event) => {
    // Mencegah browser melakukan reload/refresh halaman secara otomatis
    event.preventDefault();

    // Mengambil nilai (value) dari elemen input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (username.trim() === '') {
      alert('Nama pengguna tidak boleh kosong!');
      return;
    }

    console.log('Data Formulir Berhasil Ditangkap:');
    console.log('Username:', username);
    console.log('Email:', email);

    alert(`Terima kasih, ${username}! Data berhasil dikirim.`);
    
    // Mengosongkan isian form
    mainForm.reset();
  });
}


/* ==========================================
   4. MANIPULASI ELEMEN HTML5 (<dialog> & <template>)
   ========================================== */
// Membuka dan menutup Modal Dialog
if (openModalBtn && dialog) {
  openModalBtn.addEventListener('click', () => {
    dialog.showModal(); // Fungsi bawaan HTML5 untuk membuka modal
  });
}

if (closeModalBtn && dialog) {
  closeModalBtn.addEventListener('click', () => {
    dialog.close(); // Fungsi bawaan HTML5 untuk menutup modal
  });
}

// Mengkloning elemen dari <template>
const cardTemplate = document.getElementById('card-template');
const interaktifSection = document.getElementById('interaktif');

if (cardTemplate && interaktifSection) {
  // Mengkloning isi template (true = deep clone termasuk anak-anaknya)
  const clone = cardTemplate.content.cloneNode(true);
  
  // Mengubah konten di dalam elemen hasil kloning
  clone.querySelector('h4').textContent = 'Kartu Hasil Kloning JS';
  clone.querySelector('p').textContent = 'Elemen ini dibuat secara dinamis menggunakan tag <template> dan JavaScript.';
  
  // Menyisipkan elemen baru ke dalam DOM
  interaktifSection.appendChild(clone);
}


/* ==========================================
   5. MENGGAMBAR DENGAN CANVAS 2D
   ========================================== */
if (myCanvas && myCanvas.getContext) {
  const ctx = myCanvas.getContext('2d');

  // Menggambar persegi dengan warna hijau
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(10, 10, 80, 30);
}