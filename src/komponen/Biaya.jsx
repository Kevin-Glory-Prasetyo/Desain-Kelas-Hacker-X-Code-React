import React, { useState, useEffect, useRef, useCallback } from "react";
import left from "../assets/img/left2.svg"
import right from "../assets/img/right2.svg"

const courses = [
  {
    title: "Advanced Cyber Security v3",
    desc: "Silabus sama dengan Elite Hacker v9 tapi yang membedakan belajarnya dari video",
    price: "Rp.1.500.000/Peserta",
    features: ["20 Sesi video", "Konsultasi WA", "Silabus", "Video Ethical Elite Hacker v9 Training"],
  },
  {
    title: "Elite Hacker v9",
    desc: "Pelatihan langsung dengan trainer profesional",
    price: "Rp.2.500.000/Peserta",
    features: ["25 Sesi", "Konsultasi WA", "Silabus", "Praktik Langsung"],
  },
  {
    title: "Penetration Testing",
    desc: "Kursus untuk memahami testing keamanan sistem",
    price: "Rp.1.800.000/Peserta",
    features: ["15 Sesi", "Konsultasi WA", "Silabus", "Tools Lengkap"],
  },
  {
    title: "Network Security",
    desc: "Fokus membangun jaringan yang aman dan stabil",
    price: "Rp.1.700.000/Peserta",
    features: ["18 Sesi", "Konsultasi WA", "Silabus", "Studi Kasus"],
  },
  {
    title: "Web Security",
    desc: "Mengenal dan melindungi aplikasi berbasis web",
    price: "Rp.2.000.000/Peserta",
    features: ["20 Sesi", "Konsultasi WA", "Silabus", "Proyek Akhir"],
  },
  {
    title: "Cloud Security",
    desc: "Mempelajari keamanan sistem berbasis cloud",
    price: "Rp.2.200.000/Peserta",
    features: ["22 Sesi", "Konsultasi WA", "Silabus", "Cloud Tools"],
  },
];

export default function Biaya() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Menggunakan useCallback untuk stabilitas fungsi
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  }, []);

  // PERBAIKAN 1: Membungkus fungsi kalkulasi dengan useCallback
  // Ini memastikan fungsi tidak dibuat ulang kecuali currentIndex berubah.
  const calculateOffset = useCallback(() => {
    if (containerRef.current && sliderRef.current && sliderRef.current.children[currentIndex]) {
      const containerWidth = containerRef.current.offsetWidth;
      const activeCard = sliderRef.current.children[currentIndex];
      const cardWidth = activeCard.offsetWidth;
      const cardLeft = activeCard.offsetLeft;
      
      // Kalkulasi untuk memposisikan titik tengah kartu ke titik tengah kontainer
      const newOffset = (containerWidth / 2) - (cardLeft + cardWidth / 2);
      setOffset(newOffset);
    }
  }, [currentIndex]); // Dependensi hanya pada currentIndex

  // PERBAIKAN 2: Menyederhanakan useEffect
  // Efek ini sekarang hanya bertanggung jawab untuk memanggil kalkulasi dan mengatur listener.
  useEffect(() => {
    // Panggil sekali saat komponen dimuat atau currentIndex berubah
    calculateOffset();

    // Tambahkan event listener untuk resize
    window.addEventListener('resize', calculateOffset);
    
    // Fungsi cleanup untuk menghapus listener saat komponen unmount
    return () => {
      window.removeEventListener('resize', calculateOffset);
    };
  }, [calculateOffset]); // Dependensi pada fungsi yang sudah stabil

  return (
    <section className="biaya-section" id="Silabus">
      <header>
        <h1>
          <span>X-code</span> Training Course
        </h1>
      </header>

      <div className="slider-container" ref={containerRef}>
        <button className="nav-btn prev" onClick={handlePrev}><img src={right} alt="" /></button>

        <div className="slider" ref={sliderRef} style={{ transform: `translateX(${offset}px)` }}>
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`card ${idx === currentIndex ? "active" : ""}`}
              // PERBAIKAN 3: Menambahkan onClick untuk membuat kartu interaktif
              onClick={() => setCurrentIndex(idx)}
            >
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              
              <div className="price">
                {course.price}
              </div>

              <ul>
                {course.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <div className="btn-group">
                <button className="btn btn-silabus">Download Silabus</button>
                <button className="btn btn-beli">Beli</button>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={handleNext}><img src={left} alt="" /></button>
      </div>
    </section>
  );
}