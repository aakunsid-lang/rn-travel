# 💼 Panduan Hosting Berbayar untuk RN TRAVEL

## 🏆 REKOMENDASI HOSTING TERBAIK INDONESIA

### 1️⃣ NIAGAHOSTER ⭐ PALING POPULER

**Paket Recommended: Bayi (Rp 14.900/bulan)**

**Kelebihan:**
- ✅ Support 24/7 dalam Bahasa Indonesia
- ✅ cPanel mudah dipakai
- ✅ SSL gratis
- ✅ Domain gratis 1 tahun
- ✅ Unlimited bandwidth
- ✅ Server di Indonesia (cepat)

**Harga:**
- Bayi: Rp 14.900/bulan (1 website)
- Pelajar: Rp 24.900/bulan (unlimited website)
- Personal: Rp 34.900/bulan (lebih cepat)

**Link:** https://www.niagahoster.co.id

---

### 2️⃣ HOSTINGER

**Paket Recommended: Premium (Rp 26.900/bulan)**

**Kelebihan:**
- ✅ Harga murah
- ✅ Performa bagus
- ✅ SSL gratis
- ✅ Domain gratis
- ✅ Support 24/7

**Harga:**
- Single: Rp 17.900/bulan (1 website)
- Premium: Rp 26.900/bulan (100 website)
- Business: Rp 44.900/bulan (lebih cepat)

**Link:** https://www.hostinger.co.id

---

### 3️⃣ DEWAWEB

**Paket Recommended: Hunter (Rp 20.000/bulan)**

**Kelebihan:**
- ✅ Server Indonesia
- ✅ Support expert
- ✅ Cloud hosting (lebih stabil)
- ✅ SSL gratis

**Harga:**
- Scout: Rp 20.000/bulan
- Hunter: Rp 35.000/bulan
- Warrior: Rp 75.000/bulan

**Link:** https://www.dewaweb.com

---

### 4️⃣ RUMAHWEB

**Paket Recommended: Personal (Rp 20.000/bulan)**

**Kelebihan:**
- ✅ Perusahaan Indonesia
- ✅ Support lokal
- ✅ Reliable

**Harga:**
- Personal: Rp 20.000/bulan
- Bisnis: Rp 50.000/bulan

**Link:** https://www.rumahweb.com

---

## 🎯 REKOMENDASI SAYA

### Untuk RN TRAVEL: **NIAGAHOSTER Paket Bayi**

**Alasan:**
- Harga terjangkau (Rp 14.900/bulan)
- Support Bahasa Indonesia 24/7
- Dapat domain gratis (www.rntravel.com)
- cPanel mudah dipakai
- Server cepat di Indonesia

**Total Biaya 1 Tahun:**
- Hosting: Rp 178.800/tahun
- Domain: GRATIS (biasanya Rp 150.000)
- SSL: GRATIS
- **TOTAL: Rp 178.800/tahun** (Rp 14.900/bulan)

---

## 📝 CARA BELI HOSTING + DOMAIN

### STEP 1: Beli Hosting di Niagahoster

1. **Buka** https://www.niagahoster.co.id
2. **Pilih** menu **"Hosting"** → **"Unlimited Hosting"**
3. **Pilih paket "Bayi"** (Rp 14.900/bulan)
4. **Pilih durasi:** 1 tahun (dapat domain gratis)
5. **Klik "Beli Sekarang"**

### STEP 2: Pilih Domain

1. **Ketik domain yang diinginkan:** `rntravel.com` atau `rntravelindonesia.com`
2. **Cek ketersediaan**
3. Kalau tersedia, klik **"Pilih"**
4. Kalau tidak tersedia, coba nama lain:
   - `rntravelpamulang.com`
   - `rntravel.id`
   - `rntraveljakarta.com`

### STEP 3: Checkout

1. **Review pesanan**
2. **Isi data diri** (nama, email, nomor HP)
3. **Pilih metode pembayaran:**
   - Transfer Bank (BCA, Mandiri, BNI, BRI)
   - E-wallet (OVO, GoPay, Dana)
   - Kartu Kredit
   - Alfamart/Indomaret
4. **Klik "Bayar Sekarang"**
5. **Lakukan pembayaran**

### STEP 4: Aktivasi

1. Cek **email** dari Niagahoster
2. Klik link **aktivasi akun**
3. Buat **password** untuk akun Niagahoster
4. **Login** ke member area

---

## 🚀 CARA UPLOAD WEBSITE KE HOSTING

### STEP 1: Build Project

Di terminal project:
```bash
npm run build
```

Folder `dist/` akan dibuat dengan semua file website.

### STEP 2: Login ke cPanel

1. Login ke **member.niagahoster.co.id**
2. Klik **"Kelola Hosting"**
3. Klik **"Kelola cPanel"**
4. Atau akses langsung: `https://cpanel.namadomain.com`

### STEP 3: Upload File

#### Cara 1: File Manager (Mudah)

1. Di cPanel, klik **"File Manager"**
2. Masuk ke folder **"public_html"**
3. **Hapus semua file** yang ada (file default)
4. Klik **"Upload"**
5. **Pilih semua file** dari folder `dist/` di komputer Anda
6. Tunggu sampai upload selesai
7. **SELESAI!**

#### Cara 2: FTP (Lebih Cepat untuk File Banyak)

1. Download **FileZilla** dari https://filezilla-project.org
2. Di cPanel, cari **"FTP Accounts"**
3. Buat akun FTP atau pakai akun utama
4. Buka FileZilla:
   - Host: `ftp.namadomain.com`
   - Username: username cPanel
   - Password: password cPanel
   - Port: 21
5. Klik **"Quickconnect"**
6. Masuk ke folder **"public_html"**
7. **Drag & drop** semua file dari folder `dist/`
8. Tunggu upload selesai

### STEP 4: Setup .htaccess

1. Di File Manager, masuk ke **"public_html"**
2. Cek apakah file **".htaccess"** sudah ada
3. Kalau belum, klik **"+ File"**
4. Nama file: `.htaccess`
5. Klik kanan file → **"Edit"**
6. Paste kode ini:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Compress files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

7. Klik **"Save Changes"**

### STEP 5: Setup SSL (HTTPS)

1. Di cPanel, cari **"SSL/TLS Status"**
2. Centang domain Anda
3. Klik **"Run AutoSSL"**
4. Tunggu 5-10 menit
5. Website akan otomatis pakai HTTPS

### STEP 6: Test Website

1. Buka browser
2. Akses: `https://namadomain.com`
3. Test semua fitur:
   - ✅ Navigasi menu
   - ✅ Form booking
   - ✅ WhatsApp redirect
   - ✅ Gambar muncul
   - ✅ Maps muncul
   - ✅ Responsive di HP

---

## 🔄 CARA UPDATE WEBSITE

Setiap kali ada perubahan:

### STEP 1: Build Ulang
```bash
npm run build
```

### STEP 2: Upload Ulang
1. Login ke cPanel → File Manager
2. Masuk ke `public_html`
3. **Hapus file lama** (kecuali .htaccess)
4. Upload file baru dari folder `dist/`

### STEP 3: Clear Cache
1. Di browser, tekan **Ctrl + Shift + R**
2. Atau buka incognito mode

---

## 📧 SETUP EMAIL PROFESIONAL (Bonus)

Dengan hosting, Anda bisa buat email profesional:
- `info@rntravel.com`
- `admin@rntravel.com`
- `booking@rntravel.com`

### Cara Buat Email:

1. Di cPanel, klik **"Email Accounts"**
2. Klik **"Create"**
3. Email: `info`
4. Domain: pilih domain Anda
5. Password: buat password kuat
6. Klik **"Create"**

### Akses Email:

- **Webmail:** `https://namadomain.com/webmail`
- **Gmail/Outlook:** Setup IMAP/SMTP dari cPanel

---

## 💡 TIPS PENTING

### 1. Backup Rutin
- Di cPanel → **"Backup"** → Download backup
- Lakukan setiap bulan

### 2. Monitor Traffic
- Di cPanel → **"Awstats"** atau **"Webalizer"**
- Lihat berapa visitor per hari

### 3. Optimize Gambar
- Compress foto sebelum upload
- Pakai https://tinypng.com
- Ukuran foto max 500KB

### 4. Update Konten
- Update pelayanan & harga rutin
- Tambah foto galeri baru
- Update testimoni

### 5. Security
- Jangan share password cPanel
- Update password rutin
- Aktifkan 2FA kalau ada

---

## 🆘 TROUBLESHOOTING

### Website tidak bisa diakses
- Tunggu 1-24 jam (propagasi DNS)
- Clear cache browser
- Cek di HP dengan data seluler

### Gambar tidak muncul
- Cek nama file (case-sensitive)
- Pastikan file ada di folder yang benar
- Cek permission file (644)

### Form booking tidak jalan
- Cek nomor WhatsApp format benar
- Test di HP langsung
- Cek console browser (F12)

### SSL tidak aktif
- Tunggu 10-30 menit
- Jalankan AutoSSL lagi
- Hubungi support hosting

---

## 📞 SUPPORT HOSTING

### Niagahoster:
- Live Chat: 24/7 di website
- WhatsApp: 0804-1-808-888
- Email: support@niagahoster.co.id
- Ticket: member area

### Hostinger:
- Live Chat: 24/7
- Email: support@hostinger.co.id

---

## 💰 ESTIMASI BIAYA TOTAL

### Tahun Pertama:
- Hosting Niagahoster Bayi: **Rp 178.800**
- Domain .com: **GRATIS** (promo)
- SSL: **GRATIS**
- **TOTAL: Rp 178.800** (Rp 14.900/bulan)

### Tahun Kedua & Seterusnya:
- Hosting: Rp 178.800/tahun
- Domain renewal: Rp 150.000/tahun
- **TOTAL: Rp 328.800/tahun** (Rp 27.400/bulan)

---

## ✅ CHECKLIST SEBELUM BELI HOSTING

- [ ] Sudah pilih nama domain
- [ ] Sudah cek ketersediaan domain
- [ ] Sudah siapkan metode pembayaran
- [ ] Website sudah di-test di localhost
- [ ] Semua gambar sudah siap
- [ ] Nomor WA & social media sudah benar

---

**Siap beli hosting sekarang?**

Saya recommend **Niagahoster Paket Bayi** karena:
- Murah (Rp 14.900/bulan)
- Domain gratis
- Support Indonesia 24/7
- Mudah dipakai

Kalau sudah beli, beritahu saya nanti saya bantu upload website-nya! 🚀
