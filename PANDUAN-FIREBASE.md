# 🔥 Panduan Setup Firebase + Hosting untuk RN TRAVEL

## 📋 Daftar Isi
1. Setup Firebase Project
2. Setup Firebase di Website
3. Buat Admin Panel
4. Deploy ke Firebase Hosting

---

## 1️⃣ SETUP FIREBASE PROJECT

### A. Buat Akun Firebase
1. Buka https://firebase.google.com
2. Klik **"Get Started"** atau **"Go to Console"**
3. Login dengan akun Google Anda

### B. Buat Project Baru
1. Klik **"Add project"** atau **"Tambah project"**
2. Nama project: **rn-travel**
3. Klik **Continue**
4. Google Analytics: **Aktifkan** (recommended) atau skip
5. Klik **Create project**
6. Tunggu sampai selesai, lalu klik **Continue**

### C. Setup Firestore Database
1. Di sidebar kiri, klik **"Firestore Database"**
2. Klik **"Create database"**
3. Pilih **"Start in production mode"** (kita akan ubah rules nanti)
4. Location: Pilih **asia-southeast1** (Singapore - paling dekat)
5. Klik **Enable**
6. Tunggu sampai database dibuat

### D. Setup Storage (untuk upload foto)
1. Di sidebar kiri, klik **"Storage"**
2. Klik **"Get started"**
3. Klik **Next** (pakai default rules)
4. Location: **asia-southeast1**
5. Klik **Done**

### E. Setup Authentication (untuk login admin)
1. Di sidebar kiri, klik **"Authentication"**
2. Klik **"Get started"**
3. Tab **"Sign-in method"**
4. Klik **"Email/Password"**
5. **Enable** toggle pertama (Email/Password)
6. Klik **Save**

### F. Buat User Admin
1. Masih di **Authentication**
2. Tab **"Users"**
3. Klik **"Add user"**
4. Email: **admin@rntravel.com** (atau email Anda)
5. Password: **buat password kuat** (minimal 6 karakter)
6. Klik **Add user**

### G. Ambil Config Firebase
1. Di sidebar, klik **⚙️ (Settings)** > **Project settings**
2. Scroll ke bawah, bagian **"Your apps"**
3. Klik icon **</>** (Web)
4. App nickname: **rn-travel-web**
5. **JANGAN** centang Firebase Hosting (kita setup manual nanti)
6. Klik **Register app**
7. **COPY** semua kode di `firebaseConfig` - SIMPAN ini!

Contoh yang perlu dicopy:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "rn-travel.firebaseapp.com",
  projectId: "rn-travel",
  storageBucket: "rn-travel.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxx"
};
```

8. Klik **Continue to console**

---

## 2️⃣ SETUP FIREBASE DI WEBSITE

### A. Install Firebase SDK
Buka terminal di folder project, jalankan:
```bash
npm install firebase
```

### B. Buat File Config Firebase
Saya akan buatkan file `src/firebase/config.js` dengan config Anda.

**PENTING:** Ganti dengan config yang Anda copy tadi!

### C. Setup Firestore Rules
1. Kembali ke Firebase Console
2. Klik **Firestore Database**
3. Tab **Rules**
4. Ganti dengan rules ini:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read untuk services dan gallery
    match /services/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /gallery/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Booking hanya bisa ditulis
    match /bookings/{document=**} {
      allow read: if request.auth != null;
      allow write: if true;
    }
  }
}
```

5. Klik **Publish**

### D. Setup Storage Rules
1. Klik **Storage**
2. Tab **Rules**
3. Ganti dengan:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /services/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /gallery/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

4. Klik **Publish**

---

## 3️⃣ BUAT ADMIN PANEL

Saya akan buatkan:
- Login page untuk admin
- Dashboard untuk manage services & gallery
- Upload foto langsung dari HP
- CRUD (Create, Read, Update, Delete)

File yang akan dibuat:
- `src/pages/AdminLogin.jsx`
- `src/pages/AdminDashboard.jsx`
- `src/firebase/config.js`
- `src/firebase/services.js`

---

## 4️⃣ DEPLOY KE FIREBASE HOSTING

### A. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### B. Login ke Firebase
```bash
firebase login
```
Browser akan terbuka, login dengan akun Google yang sama.

### C. Init Firebase Hosting
Di folder project:
```bash
firebase init hosting
```

Jawab pertanyaan:
- **Use existing project** → Pilih **rn-travel**
- **Public directory:** `dist`
- **Single-page app:** `Yes`
- **Automatic builds with GitHub:** `No`
- **Overwrite index.html:** `No`

### D. Build Project
```bash
npm run build
```

### E. Deploy ke Firebase
```bash
firebase deploy --only hosting
```

Tunggu sampai selesai. Anda akan dapat URL:
```
https://rn-travel.web.app
```

---

## 5️⃣ CARA UPDATE WEBSITE

Setiap kali ada perubahan:

```bash
npm run build
firebase deploy --only hosting
```

---

## 6️⃣ CARA PAKAI ADMIN PANEL

### Akses Admin Panel:
```
https://rn-travel.web.app/admin
```

### Login:
- Email: admin@rntravel.com (atau yang Anda buat)
- Password: password yang Anda buat

### Fitur Admin:
1. **Manage Services** - Tambah/Edit/Hapus pelayanan
2. **Manage Gallery** - Upload/Hapus foto galeri
3. **View Bookings** - Lihat daftar booking dari customer

### Edit dari HP:
1. Buka browser di HP
2. Akses URL admin panel
3. Login
4. Tambah/edit pelayanan atau galeri
5. Upload foto langsung dari galeri HP

---

## 💰 BIAYA

### Firebase Free Tier (Spark Plan):
- ✅ Firestore: 50K reads/day, 20K writes/day
- ✅ Storage: 5GB
- ✅ Hosting: 10GB/month
- ✅ Authentication: Unlimited

**Untuk website RN TRAVEL = 100% GRATIS!**

Kalau traffic besar nanti, bisa upgrade ke Blaze Plan (pay as you go).

---

## 🆘 TROUBLESHOOTING

### Error: "Permission denied"
- Cek Firestore Rules sudah di-publish
- Pastikan sudah login sebagai admin

### Foto tidak muncul
- Cek Storage Rules sudah di-publish
- Pastikan foto sudah terupload

### Website tidak update setelah deploy
- Clear cache browser (Ctrl + Shift + R)
- Tunggu 5-10 menit untuk propagasi

---

## 📞 SUPPORT

Kalau ada masalah, hubungi saya atau cek:
- Firebase Docs: https://firebase.google.com/docs
- Firebase Console: https://console.firebase.google.com

---

**Siap untuk setup Firebase sekarang?**
Beritahu saya kalau sudah dapat firebaseConfig, nanti saya buatkan file-file yang dibutuhkan!
