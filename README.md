

# 🚀 Hacker X Code Class Design - React

## 📌 Description

This project is a **landing page for Hacker X Code Class**, built with **React** and **Vite**.
Its main purpose is to showcase program information, learning materials, mentors, partners, and registration CTA with a **modern and responsive UI**.

---

## ✨ Key Features

* 📱 **Responsive Layout** (desktop & mobile)
* 🖼️ **Hero Section (Home)** with CTA
* 💰 **Pricing Section**
* 👨‍🏫 **Mentor & Mentor Experience Section**
* 🤝 **Client/Partner Section**
* 📝 **Testimonial Section** (text & video)
* 🏢 **Office Location Section**
* 🏷️ **About Us Section**
* 🧭 **Navigation Bar (Navbar)**
* 📩 **Footer Section** (contact info)
* ⚡ **Fast development** using **Vite**

---

## 🛠️ Tech Stack

* ⚛️ React
* ⚡ Vite
* 🎨 HTML / CSS / Tailwind CSS
* 🖼️ Static image assets (JPG, PNG, WEBP)

---

## 📂 Project Structure

```bash
HackerXCode-React/
├─ mitra/                  # 🤝 client/partner logos
├─ node_modules/           # 📦 dependencies
├─ public/                 # 🌍 public files (vite.svg, etc.)
├─ Render/                 # ⚛️ main React entry
│  ├─ App.jsx              # 🖥️ root component
│  ├─ index.css            # 🎨 global styles
│  └─ main.jsx             # 🚀 React DOM entry point
├─ src/
│  ├─ assets/img/          # 🖼️ images (mentor, network, office, etc.)
│  ├─ komponen/            # 🧩 main components
│  │  ├─ AboutUs.jsx
│  │  ├─ Biaya.jsx
│  │  ├─ Client.jsx
│  │  ├─ ExperienceMentor.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Home.jsx
│  │  ├─ Mentors.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ OfficeLocation.jsx
│  │  ├─ Service.jsx
│  │  ├─ TestimoniText.jsx
│  │  └─ TestimoniVideo.jsx
│  ├─ script/
│  │  └─ script.js         # ⚙️ utility/helper functions
├─ .gitignore
├─ coba.html
├─ eslint.config.js
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## 📋 Requirements

* 🟢 Node.js v16 or later (LTS recommended)
* 🔵 npm or yarn

---

## ▶️ Getting Started (Development)

1. Clone the repository

   ```bash
   git clone https://github.com/Kevin-Glory-Prasetyo/Desain-Kelas-Hacker-X-Code-React.git
   cd Desain-Kelas-Hacker-X-Code-React
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

👉 Access it at: `http://localhost:5173/` (default Vite).

---

## 🔑 Available Scripts (`package.json`)

* ▶️ `dev` — start development server (Vite)
* 🏗️ `build` — build for production
* 👀 `preview` — locally preview the production build

Example:

```bash
npm run build
npm run preview
```

---

## 🌐 Build & Deployment

* Build with `npm run build`.
* Deploy to **Vercel / Netlify / GitHub Pages** using the `dist` folder as output.

### 🚀 Deploy to Vercel

1. Connect repository to Vercel
2. Build command: `npm run build`
3. Output directory: `dist`

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `feature/yourname-description`
3. Commit changes, push, and open a Pull Request

---

## ✅ Quality Checklist (Before Merge)

* 📱 Responsive on mobile & desktop
* 🧹 No errors in console
* ♿ Basic accessibility (alt text, semantic HTML)

---

## 📸 Documentation

### 💻 Desktop View

1. **Header + Home Page**
   ![Header](https://github.com/user-attachments/assets/463b6ef1-b229-4334-8e86-2b9a7bff5dc5)

2. **About Us**
   ![About Us](https://github.com/user-attachments/assets/d09b807a-90f9-4c3f-87a1-a259e19c5211)

3. **Service**
   ![Service](https://github.com/user-attachments/assets/b4c7c4a4-f824-4729-abcb-035446957f2f)

4. **Introduction Mentor**
   ![Intro Mentor](https://github.com/user-attachments/assets/d1b65dde-c45c-4174-bedf-68895d13febd)

5. **Profile Mentor**
   ![Profile Mentor](https://github.com/user-attachments/assets/6aa226f1-248c-4db3-ac0d-bac59521d7c5)

6. **Office Location**
   ![Office](https://github.com/user-attachments/assets/0b8b05a9-5217-46eb-8b21-da4f947d6f53)

7. **Client Partner**
   ![Client](https://github.com/user-attachments/assets/c1ad1014-7f0d-4ed8-a416-1f041f9afd66)

8. **Pricing**
   ![Pricing](https://github.com/user-attachments/assets/6890dd0a-9dc9-4457-b2e8-f253e1e69591)

9. **Video Testimonial**
   ![Video Testimonial](https://github.com/user-attachments/assets/6be707c2-96fc-4923-a3d4-bc9b8dfe1a4e)

10. **Text Testimonial**
    ![Text Testimonial](https://github.com/user-attachments/assets/8be5bebb-07cb-49ef-87f7-354ed9a14d85)

11. **Footer**
    ![Footer](https://github.com/user-attachments/assets/d2f80987-6069-42e9-b3c2-193ee555266a)

---

### 📱 Mobile View

1. **Header + Home Page + Hamburger Menu**
   
   ![Header Mobile](https://github.com/user-attachments/assets/a2c3d34a-5dbe-4aa2-b75c-96ac8589d51b)

2. **About Us**
   
   ![About Us Mobile](https://github.com/user-attachments/assets/67751c9f-d542-46ac-90b5-c4ed069b63b7)

3. **Service**
   
   ![Service Mobile](https://github.com/user-attachments/assets/b97106dc-5dfe-48f7-83f4-2ca99b8d00cf)

4. **Introduction Mentor**
 
   ![Intro Mentor Mobile](https://github.com/user-attachments/assets/193bf45f-84fc-41f9-812f-13cdf6dd5d0a)

5. **Profile Mentor**
 
   ![Profile Mentor Mobile](https://github.com/user-attachments/assets/a84b467e-02d2-4dde-b85c-20ef2f3abf4b)

6 **Office Location**
 
   ![Office Mobile](https://github.com/user-attachments/assets/8ea2ed64-e8e1-4575-a10a-251efa61af29)

7 **Client Partner**
 
   ![Client Mobile](https://github.com/user-attachments/assets/a8b8b3e4-c056-4e68-98a3-c184134eab9e)

8. **Pricing**
 
   ![Pricing Mobile](https://github.com/user-attachments/assets/875d2029-d455-45c4-890c-fa9e85af024d)

9. **Video Testimonial**
 
   ![Video Testimonial Mobile](https://github.com/user-attachments/assets/ffbc294f-4fa7-4b49-80eb-b69cb70dadc4)

10. **Text Testimonial**
 
    ![Text Testimonial Mobile](https://github.com/user-attachments/assets/c1e64392-3dce-4d14-ad2a-933c012ee971)

11. **Footer**

    ![Footer Mobile](https://github.com/user-attachments/assets/23b0530a-47c8-4110-98df-ff2e24ff3c50)

12. **Hamburger Menu**
    
    ![Hamburger](https://github.com/user-attachments/assets/7190e964-e6e8-441d-bf64-362c6668f344)



