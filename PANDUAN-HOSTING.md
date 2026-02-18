# 🚀 Panduan Hosting Website RN TRAVEL

## 🎯 Pilihan Hosting (Pilih Salah Satu)

### ✅ OPSI 1: VERCEL (PALING MUDAH & GRATIS) ⭐ RECOMMENDED

**Kelebihan:**
- 100% GRATIS
- Deploy otomatis dari GitHub
- SSL gratis
- Domain: rntravel.vercel.app
- Bisa custom domain

**Cara Deploy:**

#### A. Persiapan
1. Buat akun GitHub di https://github.com (kalau belum punya)
2. Buat akun Vercel di https://vercel.com (login pakai GitHub)

#### B. Upload Code ke GitHub
1. Buka https://github.com/new
2. Repository name: **rn-travel**
3. Pilih **Public**
4. Klik **Create repository**
5. Di terminal project, jalankan:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/rn-travel.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda.

#### C. Deploy ke Vercel
1. Login ke https://vercel.com
2. Klik **"Add New"** → **"Project"**
3. Pilih repository **rn-travel**
4. Klik **Import**
5. Framework Preset: **Vite** (auto-detect)
6. Klik **Deploy**
7. Tunggu 2-3 menit
8. **SELESAI!** Website live di: `https://rn-travel.vercel.app`

#### D. Update Website (Setiap Ada Perubahan)
Cukup push ke GitHub:
```bash
git add .
git commit -m "Update website"
git push
```
Vercel otomatis deploy ulang!

---

### ✅ OPSI 2: NETLIFY (MUDAH & GRATIS)

**Kelebihan:**
- 100% GRATIS
- Drag & drop file
- SSL gratis
- Domain: rntravel.netlify.app

**Cara Deploy:**

#### A. Build Project
```bash
npm run build
```

#### B. Deploy ke Netlify
1. Buka https://netlify.com
2. Login/Sign up (bisa pakai GitHub)
3. Klik **"Add new site"** → **"Deploy manually"**
4. **Drag & drop folder `dist/`** ke area upload
5. Tunggu 1-2 menit
6. **SELESAI!** Website live!

#### C. Update Website
Setiap ada perubahan:
1. `npm run build`
2. Drag & drop folder `dist/` lagi ke Netlify

---

### ✅ OPSI 3: cPanel / SHARED HOSTING

**Untuk:** Hosting berbayar seperti Niagahoster, Hostinger, dll

**Biaya:** Rp 20.000 - 50.000/bulan

**Cara Deploy:**

#### A. Build Project
```bash
npm run build
```

#### B. Upload ke cPanel
1. Login ke cPanel hosting Anda
2. Buka **File Manager**
3. Masuk ke folder **public_html**
4. **Upload semua file** dari folder `dist/`
5. Pastikan file `.htaccess` juga terupload

#### C. Setup .htaccess
Pastikan file `.htaccess` ada di `public_html/` dengan isi:

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

#### D. Akses Website
Website bisa diakses di: `https://domainanda.com`

#### E. Update Website
Setiap ada perubahan:
1. `npm run build`
2. Upload ulang folder `dist/` ke cPanel

---

### ✅ OPSI 4: GITHUB PAGES (GRATIS)

**Kelebihan:**
- 100% GRATIS
- Domain: username.github.io/rn-travel

**Cara Deploy:**

#### A. Install gh-pages
```bash
npm install --save-dev gh-pages
```

#### B. Update package.json
Tambahkan di `package.json`:
```json
{
  "homepage": "https://USERNAME.github.io/rn-travel",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Ganti `USERNAME` dengan username GitHub Anda.

#### C. Deploy
```bash
npm run deploy
```

#### D. Akses Website
Website live di: `https://USERNAME.github.io/rn-travel`

---

## 🎯 REKOMENDASI SAYA

### Untuk Pemula: **VERCEL** (Opsi 1)
- Paling mudah
- Auto-deploy dari GitHub
- Gratis selamanya
- Professional

### Untuk Cepat: **NETLIFY** (Opsi 2)
- Drag & drop
- Tidak perlu GitHub
- Gratis

### Untuk Custom Domain: **cPanel** (Opsi 3)
- Pakai domain sendiri (www.rntravel.com)
- Lebih profesional
- Bayar hosting

---

## 📝 CHECKLIST SEBELUM HOSTING

✅ Website sudah jalan di localhost
✅ Semua gambar sudah diupload ke folder `public/`
✅ Nomor WhatsApp sudah diganti
✅ Link social media sudah diganti
✅ Alamat & maps sudah benar
✅ Test form booking

---

## 🔧 BUILD PROJECT

Sebelum hosting, build dulu:

```bash
npm run build
```

Folder `dist/` akan dibuat dengan semua file website.

---

## 🌐 CUSTOM DOMAIN (Opsional)

Kalau mau pakai domain sendiri (www.rntravel.com):

### Untuk Vercel:
1. Beli domain di Niagahoster/Namecheap
2. Di Vercel dashboard → Settings → Domains
3. Tambahkan domain Anda
4. Update DNS di registrar domain

### Untuk Netlify:
1. Beli domain
2. Di Netlify → Domain settings
3. Add custom domain
4. Update DNS

---

## 💡 TIPS

1. **Gunakan Vercel** kalau mau mudah & gratis
2. **Backup code** di GitHub selalu
3. **Test di HP** sebelum hosting
4. **Compress foto** sebelum upload (pakai tinypng.com)
5. **Update rutin** untuk keamanan

---

## 🆘 TROUBLESHOOTING

### Website tidak muncul setelah deploy
- Clear cache browser (Ctrl + Shift + R)
- Tunggu 5-10 menit
- Cek apakah build berhasil

### Gambar tidak muncul
- Pastikan file ada di folder `public/`
- Cek nama file (case-sensitive)
- Path harus `/namafile.jpg` bukan `./namafile.jpg`

### Form booking tidak jalan
- Cek nomor WhatsApp format: 62xxx
- Test di HP langsung

---

## 📞 SUPPORT

Kalau ada masalah:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

---

**Mau pakai hosting yang mana?**
Saya recommend **Vercel** karena paling mudah dan gratis!
