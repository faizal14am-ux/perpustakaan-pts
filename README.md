# Portal Pautan Rasmi Perpustakaan Politeknik Tawau Sabah (PTS)

Halaman web pintar, moden dan responsif yang menghimpunkan semua pautan utama sistem perpustakaan, katalog OPAC, aplikasi digital Google PTS, serta pangkalan rujukan kebangsaan dan konsortium POLYCC.

---

## 📌 Senarai Pautan Yang Disertakan

| Bil | Nama Sistem / Sumber | Kategori | Pautan URL | Keterangan Ringkas |
|---|---|---|---|---|
| 1 | **Portal Utama Perpustakaan PTS** | Sistem PTS | `https://pts-lib.mypolycc.edu.my/` | Laman utama maklumat perkhidmatan, kemudahan dan aktiviti perpustakaan PTS. |
| 2 | **Katalog Atas Talian (OPAC / Koha)** | Sistem PTS | `https://pts-lib.mypolycc.edu.my:8221/` | Carian koleksi buku fizikal, no. panggilan rak, semakan peminjaman & akaun ahli. |
| 3 | **Aplikasi Web Perkhidmatan PTS (Borang 1)** | Aplikasi Digital PTS | `https://script.google.com/a/macros/politawau.edu.my/s/AKfycbzUtdK61MFBIh7MP-D9k3D81qgITsIIkqU5-xSqs0Dws2N3RXkklsv3-sSE8MGUHiFk/exec` | Sistem borang dan aplikasi Google Apps Script domain rasmi PTS. |
| 4 | **Aplikasi Web Perkhidmatan PTS (Borang 2)** | Aplikasi Digital PTS | `https://script.google.com/a/politawau.edu.my/macros/s/AKfycbzimdg_8jTFFyu9mehEfEe6EME9M9cSy9FvfHvcx2gMPkp1H5Dj4YaKufPRsAyon8Tf/exec` | Sistem sokongan borang rekod maklumat & pengurusan perpustakaan PTS. |
| 5 | **Depositori Perpustakaan Negara Malaysia (PNM)** | Sumber Kebangsaan | `https://depositori.pnm.gov.my/` | Arkib khazanah penerbitan digital negara di bawah Akta Penyerahan Bahan Perpustakaan 1986. |
| 6 | **u-Pustaka (Perpustakaan Digital Kebangsaan)** | Sumber Kebangsaan | `https://www.u-library.gov.my/` | Portal akses percuma kepada jutaan e-buku, jurnal ilmiah dan pangkalan data antarabangsa. |
| 7 | **Sumber Digital PolyTech Library** | PolyTech Library | `https://sites.google.com/view/polytechlibrary/sumber-digital?authuser=0` | Hab pangkalan data langganan, jurnal dan modul digital Politeknik & Kolej Komuniti. |

---

## ✨ Ciri-Ciri Utama Web Page

1. **Carian Pantas Masa Nyata (Live Instant Search)**:
   - Pengguna boleh menaip apa-apa kata kunci (contoh: "OPAC", "koha", "buku", "jurnal", "borang", "PNM", "ulibrary") untuk menapis senarai pautan secara serta-merta.
   - Dilengkapi kekunci pintas `ESC` untuk mengosongkan carian.

2. **Penapis Mengikut Kategori (Category Pills)**:
   - *Semua Pautan*
   - *Sistem PTS*
   - *Aplikasi Digital PTS*
   - *Sumber Kebangsaan (PNM)*
   - *PolyTech Library*
   - *Kegemaran Saya* (Penanda Buku yang disimpan)

3. **Fungsi Kegemaran / Penanda Buku (LocalStorage)**:
   - Pengguna boleh menekan ikon bintang (⭐) pada mana-mana pautan untuk menyimpannya ke tab *Kegemaran*. Data ini disimpan secara automatik dalam pelayar peranti masing-masing.

4. **Salin Pautan Segera (One-Click Copy Link)**:
   - Butang *Salin* membolehkan pautan URL disalin ke papan klip beserta notifikasi pop-up (Toast Notification).

5. **Maklumat & Panduan Terperinci (Modal Dialog)**:
   - Setiap pautan mempunyai butang *Info* yang memaparkan keterangan penuh, sasaran pengguna, dan petua akses.

6. **Mod Gelap & Mod Terang (Dark / Light Mode)**:
   - Pilihan mod tema yang selesa untuk pembacaan siang atau malam hari.

7. **Bahagian Khas OPAC Spotlight**:
   - Bahagian khas memudahkan pelajar dan pensyarah menyemak katalog Koha (Port 8221) dengan panduan penggunaan pantas.

8. **Waktu Operasi & Info Bantuan**:
   - Memaparkan jadual waktu perkhidmatan fizikal perpustakaan PTS serta saluran bantuan.

9. **Susunan Grid atau Senarai (Grid / List Switcher)**:
   - Fleksibiliti menukar paparan mengikut keselesaan skrin.

---

## 🚀 Cara Menjalankan Web Page

### Kaedah 1: Terus Buka di Komputer (Offline / Tempatan)
1. Pergi ke folder ini: `c:\Users\Aiany\Desktop\web pautan perpustaskaan PTS`
2. Klik dua kali pada fail `index.html`.
3. Laman web akan dibuka dalam pelayar kegemaran anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).

### Kaedah 2: Hoskan di Web (Hosting / Server)
Fail-fail ini adalah fail web statik murni (HTML5, CSS, JavaScript) tanpa memerlukan sebarang pelayan pangkalan data yang rumit:
- Boleh dimuat naik terus ke **GitHub Pages**, **Netlify**, **Vercel**, atau pelayan web intranet Politeknik Tawau Sabah (`Apache` / `Nginx` / `IIS`).

---

## 🛠️ Cara Menambah Atau Mengubah Pautan

Sekiranya pihak perpustakaan ingin menambah pautan baru atau mengubah tajuk dan URL pada masa hadapan:
1. Buka fail `script.js` menggunakan Notepad, VS Code, atau sebarang teks editor.
2. Cari bahagian `const LIBRARY_LINKS = [ ... ];` di bahagian atas fail.
3. Anda boleh menambah objek pautan baru mengikut format sedia ada:

```javascript
{
  id: "contoh-pautan-baru",
  title: "Nama Portal Baru",
  subtitle: "Keterangan Ringkas",
  url: "https://pautan-anda.com/",
  category: "pts-core", // atau "pts-apps", "national", "polycc"
  categoryLabel: "Sistem PTS",
  badgeClass: "badge-pts-core",
  icon: "fa-solid fa-link",
  iconBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  description: "Penerangan penuh mengenai perkhidmatan pautan ini...",
  targetAudience: "Pelajar & Staf PTS",
  accessType: "Akses Terbuka",
  tags: ["Tag1", "Tag2"],
  featured: false
}
```

4. Simpan fail (`Ctrl + S`) dan muat semula pelayar (`F5`).

---

*Dibangunkan khas untuk kemudahan warga Politeknik Tawau Sabah (PTS).*
