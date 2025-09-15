# 🚀 Desain Kelas Hacker X Code - React
## 📌 Deskripsi

Proyek ini adalah landing page desain untuk *Kelas Hacker X Code* yang dibangun menggunakan **React** dan **Vite**. Tujuannya adalah menampilkan informasi program kelas, materi, mentor, mitra, serta CTA pendaftaran dengan tampilan modern dan responsif.

## ✨ Fitur utama

* 📱 **Layout responsif** (desktop & mobile)  
* 🖼️ **Hero section (Home)** dengan CTA  
* 💰 **Section Biaya (pricing)**  
* 👨‍🏫 **Section Mentor & Experience Mentor**  
* 🤝 **Section Client (mitra)**  
* 📝 **Section Testimoni (teks & video)**  
* 🏢 **Section Lokasi Office**  
* 🏷️ **Section About Us** (deskripsi singkat)  
* 🧭 **Section Navbar** (navigasi antar section)  
* 📩 **Section Footer** (informasi kontak)  
* ⚡ **Development cepat** menggunakan **Vite**  

## 🛠️ Teknologi

* ⚛️ React
* ⚡ Vite
* 🎨 HTML / CSS / TAILWIND CSS
* 🖼️ Asset gambar statis (JPG, PNG, WEBP)

## 📂 Struktur proyek

```
Desain-Kelas-Hacker-X-Code-React/
├─ mitra/                  # 🤝 gambar client/mitra (PNG)
├─ node_modules/           # 📦 dependency
├─ public/                 # 🌍 file publik (vite.svg, dll)
├─ Render/                 # ⚛️ entry utama React
│  ├─ App.jsx              # 🖥️ komponen utama
│  ├─ index.css            # 🎨 style global
│  └─ main.jsx             # 🚀 entry point React DOM
├─ src/
│  ├─ assets/img/          # 🖼️ asset gambar (mentor, network, office, dll)
│  ├─ komponen/            # 🧩 kumpulan komponen utama
│  │  ├─ AboutUs.jsx       # 🏷️ halaman About Us
│  │  ├─ Biaya.jsx         # 💰 section biaya/pricing
│  │  ├─ Client.jsx        # 🤝 section client/mitra
│  │  ├─ ExperienceMentor.jsx # 👨‍🏫 pengalaman mentor
│  │  ├─ Footer.jsx        # 📩 footer
│  │  ├─ Home.jsx          # 🏠 halaman Home
│  │  ├─ Mentors.jsx       # 👨‍🏫 section mentor
│  │  ├─ Navbar.jsx        # 🧭 navigasi utama
│  │  ├─ OfficeLocation.jsx # 🏢 lokasi kantor
│  │  ├─ Service.jsx       # 🛎️ layanan
│  │  ├─ TestimoniText.jsx # 📝 testimoni teks
│  │  └─ TestimoniVideo.jsx # 🎥 testimoni video
│  ├─ script/              # 📜 kumpulan script tambahan
│  │  └─ script.js         # ⚙️ fungsi utilitas/logic tambahan
├─ .gitignore              # 🚫 file yang diabaikan Git
├─ coba.html               # 🧪 file percobaan statis
├─ eslint.config.js        # ✅ konfigurasi eslint
├─ index.html              # 🌐 entry HTML
├─ package.json            # 📦 dependency & script
└─ vite.config.js          # ⚡ konfigurasi Vite

```

## 📋 Persyaratan

* 🟢 Node.js v16 atau lebih baru (disarankan LTS terbaru)
* 🔵 npm atau yarn

## ▶️ Cara menjalankan (development)

1. Clone repository

```bash
git clone https://github.com/Kevin-Glory-Prasetyo/Desain-Kelas-Hacker-X-Code-React.git
cd Desain-Kelas-Hacker-X-Code-React
```

2. Install dependency

```bash
npm install
# atau
yarn install
```

3. Jalankan server development

```bash
npm run dev
# atau
yarn dev
```

🌍 Akses di `http://localhost:5173/` (default Vite).

## 🔑 Script penting (package.json)

* ▶️ `dev` — jalankan development server (Vite)
* 🏗️ `build` — membuat bundle untuk production
* 👀 `preview` — preview hasil build secara lokal

Contoh:

```bash
npm run build
npm run preview
```

## 🌐 Build & Deployment

* Build menggunakan `npm run build`.
* Deploy ke **Vercel / Netlify / GitHub Pages** dengan output folder `dist`.

### 🚀 Deploy ke Vercel

1. Hubungkan repo ke Vercel
2. Build command: `npm run build`
3. Output directory: `dist`

## 🤝 Kontribusi

1. Fork repository
2. Buat branch baru: `feature/namamu-deskripsi`
3. Commit perubahan, push, lalu buat Pull Request

## ✅ Checklist kualitas sebelum merge

* 📱 Responsif di mobile & desktop
* 🧹 Tidak ada error di console
* ♿ Aksesibilitas dasar (alt text untuk gambar, semantic HTML)

## Dokumentasi 
1.Header + Home Page
<img width="1873" height="575" alt="image" src="https://github.com/user-attachments/assets/c28c4db2-6c5d-4df1-9ba9-20eb8b46edcb" />
2.About Us
<img width="1884" height="396" alt="image" src="https://github.com/user-attachments/assets/b1929251-3d4b-44ab-b051-a6e29f15889b" />
3. Service
<img width="1890" height="914" alt="image" src="https://github.com/user-attachments/assets/b76924f0-dc94-4c2e-94ae-a918e1eb8faf" />
4. Introduction Mentor
<img width="1549" height="586" alt="image" src="https://github.com/user-attachments/assets/837b2acf-f5f7-4ab9-b8da-89e5e6a2ac4f" />
5. Profile Mentor
<img width="1478" height="655" alt="image" src="https://github.com/user-attachments/assets/6aa226f1-248c-4db3-ac0d-bac59521d7c5" />
6. Office Location
<img width="1431" height="536" alt="image" src="https://github.com/user-attachments/assets/0b8b05a9-5217-46eb-8b21-da4f947d6f53" />
7. Client Patner
<img width="1261" height="734" alt="image" src="https://github.com/user-attachments/assets/53955713-af17-408f-ba72-402780723221" />
<img width="1435" height="736" alt="image" src="https://github.com/user-attachments/assets/03184b51-fbf1-4500-88c2-4540aa50df80" />
8. Biaya Course
<img width="1861" height="737" alt="image" src="https://github.com/user-attachments/assets/3c10d7ab-4adf-4440-bafd-d2516c3ca5d7" />
9. Testimoni Video dari Client
<img width="1446" height="768" alt="image" src="https://github.com/user-attachments/assets/6be707c2-96fc-4923-a3d4-bc9b8dfe1a4e" />
10. Testimoni Kata - Kata dari Client
<img width="1439" height="686" alt="image" src="https://github.com/user-attachments/assets/638a3329-0c4b-4ba3-b74a-5e444db149d3" />
11. Footer 
<img width="1883" height="412" alt="image" src="https://github.com/user-attachments/assets/d2f80987-6069-42e9-b3c2-193ee555266a" />

