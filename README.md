# BLUE SPEED — SYAHLA'S GARAGE

Website profil pribadi dengan konsep automotive / street-racing yang terinspirasi nuansa film *Fast & Furious*. Tampilan menggunakan warna baby blue, navy, dan putih.

## Struktur folder

```text
Garage/
├── assets/
│   ├── bmw-dream-car.jpg
│   ├── bmw-steering-wheel.png
│   ├── bmw-steering-wheel.svg
│   ├── blue-model-car.png
│   ├── car-display.png
│   ├── concert-event.jpeg
│   ├── food-dessert.jpeg
│   ├── gaming-roblox.png
│   ├── nature-beach-evening.jpeg
│   ├── nature-beach-wide.jpeg
│   ├── nature-mountain.jpeg
│   ├── nature-waterfall-1.jpeg
│   ├── nature-waterfall-2.jpeg
│   ├── profile-beach.jpeg
│   ├── skyline-r34.svg
│   └── tokyo-drift.mp3
├── index.html
├── README.md
├── script.js
└── style.css
```

## Fitur website

- Intro animasi garasi dengan progress loading, pintu garasi terbuka, dan ilustrasi Nissan Skyline GT-R R34 bergerak keluar.
- Tombol **START ENGINE** dan **SKIP INTRO**.
- Navigasi ke bagian About, Hobbies, Playlist, Dream Garage, dan Contact.
- Kursor setir BMW berbentuk SVG pada perangkat desktop yang mendukung pointer.
- Tombol musik latar **MUSIC ON / MUSIC OFF**. Musik diputar setelah tombol ditekan karena browser umumnya membatasi autoplay audio.
- Galeri foto pribadi sesuai kategori hobi.
- Layout responsif untuk desktop dan ponsel.
- Dukungan preferensi *reduced motion* untuk mengurangi animasi.

## Konten profil

- Nama: Syahla Sabrina Nugraheni
- Program studi: Manajemen Informasi
- Hobi: traveling/alam, konser dan musik, gaming, serta jajan/food hunting.
- Musisi: Hindia, .Feast, Nadin Amizah, dan Ghea Indrawari.
- Favorite car: Nissan Skyline GT-R R34.
- Dream car: BMW M4.

## Cara menjalankan

1. Ekstrak file ZIP.
2. Pastikan folder `assets` tetap berada satu tingkat dengan `index.html`.
3. Buka `index.html` menggunakan browser.
4. Klik **START ENGINE** untuk masuk ke halaman utama.
5. Tekan tombol **MUSIC OFF** di kanan bawah untuk memutar musik latar.

Website tidak membutuhkan instalasi package. Google Fonts membutuhkan koneksi internet; jika tidak tersedia, browser menggunakan font cadangan.

## Publikasi melalui GitHub Pages

1. Ekstrak ZIP.
2. Unggah isi folder `Garage` (bukan folder `Garage`-nya) ke root repository GitHub.
3. Pastikan `index.html`, `style.css`, `script.js`, `README.md`, dan folder `assets` berada di root repository.
4. Commit perubahan ke branch `main`.
5. Buka **Settings → Pages**.
6. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/(root)`, lalu klik **Save**.

## Catatan

- Semua path aset menggunakan folder relatif `assets/` agar website dapat dijalankan secara lokal maupun melalui GitHub Pages.
- Musik latar disimpan sebagai `assets/tokyo-drift.mp3`. Pastikan penggunaan dan publikasi file audio tersebut sesuai dengan hak cipta dan izin yang berlaku.
- Gambar otomotif yang digunakan merupakan aset visual dalam proyek, bukan klaim bahwa foto tersebut adalah dokumentasi asli model kendaraan yang disebutkan.
- Website ini merupakan proyek personal nonresmi dan tidak berafiliasi dengan merek kendaraan maupun waralaba film yang menjadi inspirasi visual.
