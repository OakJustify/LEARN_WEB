function submitFeedback() {
    let nama = document.getElementById("namaInput").value;
    let pesan = document.getElementById("pesanInput").value;

    if (nama.trim() === "") {
        nama = "Anonim";
    }

    document.getElementById("tampilNama").innerText = nama;
    document.getElementById("tampilPesan").innerText = pesan;

    document.getElementById("form").style.display = "none";
    document.getElementById("thanks").style.display = "block";
}

function kembali() {
    document.getElementById("namaInput").value = "";
    document.getElementById("pesanInput").value = "";

    document.getElementById("form").style.display = "block";
    document.getElementById("thanks").style.display = "none";
}