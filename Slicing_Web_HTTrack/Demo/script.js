const skillInput = document.querySelector("#skillInput");
const addSkill = document.querySelector("#addSkill");
const skillList = document.querySelector("#skillList");

addSkill.addEventListener("click", () => {
    const skill = skillInput.value;

    // Jangan proses kalau input masih kosong
    if (skill === "") {
        return;
    }

    // 1. Buat tag <li> baru
    const li = document.createElement("li");

    // 2. Isi teksnya dengan apa yang diketik user
    li.textContent = skill;

    // 3. Masukkan ke dalam <ul>
    skillList.appendChild(li);

    // 4. Kosongkan kembali form input
    skillInput.value = "";
});

console.log("1. Mulai");

// Jalan 2 detik kemudian
setTimeout(() => {
    console.log("2. Proses selesai!");
}, 2000);

console.log("3. Selesai");