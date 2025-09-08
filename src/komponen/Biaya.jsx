import React, { useEffect, useState } from "react";


const courses = [
  {
    title: "Advanced Cyber Security v3",
    desc: "Silabus sama dengan Elite Hacker v9 tapi yang membedakan belajarnya dari video",
    price: "Rp. 1.500.000/Peserta",
    features: ["20 Sesi video", "Konsultasi WA", "Silabus", "Video Ethical Elite Hacker v9 Training"],
  },
  {
    title: "Elite Hacker v9",
    desc: "Pelatihan langsung dengan trainer profesional",
    price: "Rp. 2.500.000/Peserta",
    features: ["25 Sesi", "Konsultasi WA", "Silabus", "Praktik Langsung"],
  },
  {
    title: "Penetration Testing",
    desc: "Kursus untuk memahami testing keamanan sistem",
    price: "Rp. 1.800.000/Peserta",
    features: ["15 Sesi", "Konsultasi WA", "Silabus", "Tools Lengkap"],
  },
  {
    title: "Network Security",
    desc: "Fokus membangun jaringan yang aman dan stabil",
    price: "Rp. 1.700.000/Peserta",
    features: ["18 Sesi", "Konsultasi WA", "Silabus", "Studi Kasus"],
  },
  {
    title: "Web Security",
    desc: "Mengenal dan melindungi aplikasi berbasis web",
    price: "Rp. 2.000.000/Peserta",
    features: ["20 Sesi", "Konsultasi WA", "Silabus", "Proyek Akhir"],
  },
  {
    title: "Cloud Security",
    desc: "Mempelajari keamanan sistem berbasis cloud",
    price: "Rp. 2.200.000/Peserta",
    features: ["22 Sesi", "Konsultasi WA", "Silabus", "Cloud Tools"],
  },
];

export default function Biaya() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const slider = document.querySelector(".slider");
    const cards = document.querySelectorAll(".card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function updateSlider() {
      if (!cards.length) return;

      const cardWidth =
        cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
      const cardsInView = window.innerWidth >= 768 ? 3 : 1;

      let offset;
      if (cardsInView === 1) {
        offset = -(currentIndex * cardWidth);
      } else {
        offset = -(currentIndex * cardWidth - ((cardsInView - 1) / 2) * cardWidth);
      }

      slider.style.transform = `translateX(${offset}px)`;

      cards.forEach((card) => card.classList.remove("active"));
      if (currentIndex >= 0 && currentIndex < cards.length) {
        cards[currentIndex].classList.add("active");
      }
    }

    function handlePrev() {
      if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }

    function handleNext() {
      if (currentIndex < courses.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }

    prevBtn.addEventListener("click", handlePrev);
    nextBtn.addEventListener("click", handleNext);
    window.addEventListener("resize", () => {
      setCurrentIndex(1);
    });

    updateSlider();

    return () => {
      prevBtn.removeEventListener("click", handlePrev);
      nextBtn.removeEventListener("click", handleNext);
    };
  }, [currentIndex]);

  return (
    <section className="biaya-section">
      <header>
        <h1>
          <span>X-code</span> Training Course
        </h1>
      </header>

      <div className="slider-container">
        <button className="nav-btn prev">❮</button>

        <div className="slider">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`card ${idx === currentIndex ? "active" : ""}`}
            >
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="price">{course.price}</div>
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

        <button className="nav-btn next">❯</button>
      </div>
    </section>
  );
}
