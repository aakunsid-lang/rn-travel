# Panduan Menambahkan Logo

Logo sudah diintegrasikan ke website. Sekarang Anda perlu menambahkan file logo.

## 📁 File Logo yang Dibutuhkan:

### 1. Logo untuk Navbar (Background Biru)
- **Nama file:** `logo.png`
- **Lokasi:** Folder `public/`
- **Ukuran:** Lebar max 200px, tinggi 40-50px
- **Format:** PNG dengan background transparan
- **Warna:** Logo putih/terang (karena navbar biru tua)

### 2. Logo untuk Footer (Background Biru)
- **Nama file:** `logo-white.png`
- **Lokasi:** Folder `public/`
- **Ukuran:** Lebar max 250px, tinggi 48-60px
- **Format:** PNG dengan background transparan
- **Warna:** Logo putih (karena footer biru tua)

## 🎨 Cara Menambahkan Logo:

### Opsi 1: Pakai Logo Sendiri
1. Siapkan file logo format PNG (background transparan)
2. Buat 2 versi:
   - `logo.png` - untuk navbar (lebih kecil)
   - `logo-white.png` - untuk footer (lebih besar)
3. Copy kedua file ke folder `public/`
4. Refresh browser

### Opsi 2: Buat Logo Online (Gratis)
Gunakan salah satu tools ini:
- **Canva:** https://canva.com (Gratis, mudah)
- **LogoMakr:** https://logomakr.com
- **Hatchful:** https://hatchful.shopify.com

### Opsi 3: Pakai Logo Sementara
Jika belum punya logo, saya sudah set fallback ke tulisan "RN TRAVEL"

## 📐 Spesifikasi Logo Ideal:

```
Navbar Logo (logo.png):
- Lebar: 150-200px
- Tinggi: 40-50px
- Ratio: 4:1 atau 3:1
- Background: Transparan
- Warna: Putih/Terang

Footer Logo (logo-white.png):
- Lebar: 200-250px
- Tinggi: 48-60px
- Ratio: 4:1 atau 3:1
- Background: Transparan
- Warna: Putih
```

## 🔧 Jika Logo Terlalu Besar/Kecil:

Edit file `src/components/Navbar.jsx`:
```jsx
<img 
  src="/logo.png" 
  alt="RN TRAVEL Logo" 
  className="h-10 w-auto"  // Ubah h-10 ke h-8, h-12, h-14, dll
/>
```

Edit file `src/components/Footer.jsx`:
```jsx
<img 
  src="/logo-white.png" 
  alt="RN TRAVEL Logo" 
  className="h-12 w-auto"  // Ubah h-12 ke h-10, h-14, h-16, dll
/>
```

## ✅ Checklist:

- [ ] Buat/siapkan logo format PNG
- [ ] Buat versi putih untuk background gelap
- [ ] Resize logo ke ukuran yang sesuai
- [ ] Copy `logo.png` ke folder `public/`
- [ ] Copy `logo-white.png` ke folder `public/`
- [ ] Refresh browser untuk melihat hasilnya

## 💡 Tips:

1. Logo dengan background transparan lebih fleksibel
2. Format PNG lebih baik dari JPG untuk logo
3. Pastikan logo terlihat jelas di layar HP
4. Jika logo terlalu detail, simplify untuk ukuran kecil

## 🆘 Troubleshooting:

**Logo tidak muncul?**
- Pastikan file ada di folder `public/`
- Pastikan nama file exact: `logo.png` dan `logo-white.png`
- Refresh browser dengan Ctrl+F5

**Logo terlalu besar/kecil?**
- Edit className `h-10` atau `h-12` di file component
- Angka lebih besar = logo lebih tinggi

**Logo pecah/blur?**
- Gunakan file PNG dengan resolusi tinggi
- Minimal 2x ukuran display (contoh: 400px untuk display 200px)
