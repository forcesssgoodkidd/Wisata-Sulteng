
// Menampilkan pesan di console
console.log("Website Explore Sulawesi berhasil dimuat!");

// Menampilkan tahun pada console
const tahun = new Date().getFullYear();

console.log("Tahun sekarang: " + tahun);

// Pesan ketika website dibuka
console.log("Explore Sulawesi berhasil dimuat!");

// Mengambil formulir kontak
const contactForm = document.getElementById("contactForm");

// Memeriksa apakah formulir tersedia
if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Mencegah halaman dimuat ulang
        event.preventDefault();

        // Mengambil nama pengguna
        const nama = document.getElementById("nama").value;

        // Menampilkan pesan
        alert("Terima kasih " + nama +
              ", pesan kamu berhasil dikirim!");

        // Mengosongkan formulir
        contactForm.reset();

    });

}
