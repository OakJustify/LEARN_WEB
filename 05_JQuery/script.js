/* ==========================================
   MENUNGGU DOM SIAP (DOCUMENT READY)
   ========================================== */
$(document).ready(function () {

  /* ==========================================
     1. SELEKSI DOM & EVENT LISTENER
     ========================================== */
  
  // Mengubah teks dan gaya CSS saat header diklik
  $('header h1').on('click', function () {$(this).text('⚡ Panduan HTML5 & jQuery Aktif!');
    $(this).css('color', '#16a34a');
  });

  // Efek kelas aktif pada menu navigasi
  $('nav a').on('click', function () {
    $('nav a').removeClass('active'); // Menghapus class 'active' dari semua link$(this).addClass('active');        // Menambahkan class 'active' ke elemen yang diklik
  });


  /* ==========================================
     2. PENANGANAN FORMULIR (FORM HANDLING)
     ========================================== */
  $('form').on('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai input dengan .val()
    const username = $('#username').val().trim();
    const email = $('#email').val();

    if (username === '') {
      alert('Nama pengguna tidak boleh kosong!');
      return;
    }

    console.log('Data Formulir (via jQuery):');
    console.log('Username:', username);
    console.log('Email:', email);

    alert(`Terima kasih, ${username}! Data berhasil dikirim.`);

    // Reset form (elemen DOM native diambil dari indeks [0])
    this.reset();
  });


  /* ==========================================
     3. MANIPULASI MODAL (<dialog>) & TEMPLATE
     ========================================== */
  const $dialog =$('#myDialog');

  // Membuka modal dialog
  $('#openModal').on('click', function () {
    if ($dialog.length) {
      // Mengakses metode native HTML5 showModal() dari elemen DOM jQuery [0]
      $dialog[0].showModal();
    }
  });

  // Menutup modal dialog
  $('#closeModal').on('click', function () {
    if ($dialog.length) {$dialog[0].close();
    }
  });

  // Mengambil dan mengkloning konten <template>
  const templateHTML = $('#card-template').html();
  if (templateHTML) {
    const $clone =$(templateHTML); // Mengubah string HTML menjadi objek jQuery
    
    // Mengubah isi elemen di dalam klon
    $clone.find('h4').text('Kartu Hasil Kloning jQuery');$clone.find('p').text('Elemen ini dibuat secara dinamis menggunakan jQuery.');

    // Menyisipkan ke seksi #interaktif
    $('#interaktif').append($clone);
  }


  /* ==========================================
     4. ELEMEN CANVAS 2D
     ========================================== */
  const canvas = $('#myCanvas')[0]; // Ambil elemen HTML native untuk getContext
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(10, 10, 80, 30);
  }

});