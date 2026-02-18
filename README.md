# RN TRAVEL - Website Landing Page

Website landing page profesional untuk RN TRAVEL menggunakan ReactJS + Vite + TailwindCSS dengan fitur booking WhatsApp redirect.

## 🚀 Fitur

- ✅ Responsive Design (Mobile First)
- ✅ Navbar Sticky dengan Menu Smooth Scroll
- ✅ Hero Section dengan Form Booking
- ✅ Form Booking dengan WhatsApp Redirect
- ✅ Section Paket Wisata
- ✅ Galeri Foto
- ✅ Testimoni Pelanggan
- ✅ Footer dengan Kontak & Social Media
- ✅ Animasi Hover & Transition
- ✅ Tanpa Backend & Database

## 📦 Teknologi

- React 18
- Vite
- TailwindCSS
- WhatsApp API

## 🛠️ Instalasi

### 1. Install Dependencies

```bash
npm install
```

### 2. Konfigurasi Nomor WhatsApp

Edit file `src/components/BookingForm.jsx` pada baris 42:

```javascript
const nomorWA = '6281234567890' // Ganti dengan nomor WA Anda
```

Ganti dengan nomor WhatsApp RN TRAVEL (format: 62xxx tanpa +)

### 3. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:5173`

## 🏗️ Build untuk Production

### Build Project

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

## 📤 Deploy ke Hosting

### Deploy ke cPanel / Shared Hosting

1. Build project terlebih dahulu:
   ```bash
   npm run build
   ```

2. Upload semua file di folder `dist/` ke public_html di cPanel

3. Pastikan file `.htaccess` ada dengan isi:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Deploy ke Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login ke Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Atau deploy via GitHub:
   - Push code ke GitHub
   - Import project di vercel.com
   - Vercel akan auto-detect Vite dan deploy

### Deploy ke Netlify

1. Build project:
   ```bash
   npm run build
   ```

2. Drag & drop folder `dist/` ke netlify.com

Atau via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📁 Struktur Folder

```
rn-travel/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── BookingForm.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Kustomisasi

### Ubah Warna

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a',    // Biru tua
      secondary: '#f97316',  // Orange
    },
  },
}
```

### Ubah Paket Wisata

Edit `src/components/Services.jsx` pada array `services`

### Ubah Galeri

Edit `src/components/Gallery.jsx` pada array `images`

### Ubah Testimoni

Edit `src/components/Testimonials.jsx` pada array `testimonials`

## 📱 Cara Kerja WhatsApp Redirect

1. User mengisi form booking
2. Data divalidasi
3. Generate pesan WhatsApp otomatis
4. Encode pesan dengan `encodeURIComponent()`
5. Redirect ke `https://wa.me/[NOMOR]?text=[PESAN]`
6. WhatsApp terbuka dengan pesan sudah terisi

## 🔧 Troubleshooting

### Error: npm not found
Install Node.js dari https://nodejs.org

### Error saat build
Hapus folder `node_modules` dan `package-lock.json`, lalu:
```bash
npm install
npm run build
```

### WhatsApp tidak redirect
Pastikan nomor WhatsApp format: 62xxx (tanpa +, tanpa 0 di depan)

## 📞 Support

Untuk pertanyaan atau bantuan, hubungi:
- WhatsApp: +62 812-3456-7890
- Email: info@rntravel.com

## 📄 License

© 2024 RN TRAVEL. All rights reserved.
