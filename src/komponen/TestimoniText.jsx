// src/components/TextTestimonialSlider.jsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import left from "../assets/img/left2.svg"
import right from "../assets/img/right2.svg"

// Data untuk testimoni (tidak ada perubahan)
const textTestimonials = [
  { id: 11, name: 'Denny Oktafian', img: 'https://i.pravatar.cc/150?img=11', text: 'Mantaf ilmunya, menunjang sekali dalam pekerjaan. Kebetulan saya bekerja disalah satu perusahaan it.' },
  { id: 12, name: 'Andy Setiyawan', img: 'https://i.pravatar.cc/150?img=12', text: 'xcode adalah tempat training yg sangat bagus dalam memberikan pengalaman untuk dunia keamanan sistem.' },
  { id: 13, name: 'Yoga Satria', img: 'https://i.pravatar.cc/150?img=13', text: 'Rekomendasi banget bagi yang ingin mendalami security network, kita diajarkan bagaimana cara attack dan defense. Banyak studi kasus real yang dipelajari, Mantap josss mas..' },
  { id: 14, name: 'Achmad Nurizal', img: 'https://i.pravatar.cc/150?img=14', text: 'Saya buta dalam Dunia Hacking.. setelah mengikuti saya jadi tau bagaimana melindungi diri dari peretas.. wajib hukumnya bagi profesional it utk tau dunia hacking.' },
  { id: 15, name: 'Agus Sofyan', img: 'https://i.pravatar.cc/150?img=15', text: 'Senang bisa belajar di xcode. Cara penyampaian materi yg mudah dimengerti, pelayanan yg sangat bagus terutama peserta dari luar kota, bisa nambah teman yg berminat bidang IT Security, cocok buat pemula hingga expert.' },
  { id: 16, name: 'Widi', img: 'https://i.pravatar.cc/150?img=16', text: 'Ingin mendalami cyber security & ethical hacking? Ikutan kursus di xcode aja...Saya ikut kursus online 16 x pertemuan. Materi nya lengkap, disediakan fasilitas program pendukung, video training dll & pengajarnya langsung dibawakan oleh ahlinya Master Kurniawan...supaya hasil kursus nya maksimal, setidaknya mesti punya basic ilmu jaringan komputer dasar, tcp ip & jgn lupa PRAKTEK...????' },
];

const TestimoniText = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0); // State baru untuk menyimpan nilai transform
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null); // Ref baru untuk wrapper

  const goToSlide = useCallback((index) => {
    // Memastikan index tidak keluar dari rentang yang ada
    const newIndex = (index + textTestimonials.length) % textTestimonials.length;
    setCurrentSlide(newIndex);
  }, []);

  const handlePrev = () => {
    goToSlide(currentSlide - 1);
  };

  const handleNext = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  // Efek auto-slide (tidak ada perubahan)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // EFEK BARU: Menghitung offset untuk menempatkan kartu aktif di tengah
  useEffect(() => {
    if (sliderRef.current && wrapperRef.current && sliderRef.current.children.length > 0) {
      const wrapperWidth = wrapperRef.current.offsetWidth;
      const cardElement = sliderRef.current.children[currentSlide];
      
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const cardLeft = cardElement.offsetLeft; // Jarak kartu dari sisi kiri slider
        
        // Kalkulasi offset agar pusat kartu aktif sejajar dengan pusat wrapper
        const newOffset = (wrapperWidth / 2) - (cardLeft + cardWidth / 2);
        setOffset(newOffset);
      }
    }
  }, [currentSlide, textTestimonials.length]); // Dijalankan setiap kali slide berubah

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title">Testimoni Training di X-CODE</h1>
      <div
        className="slider-wrapper"
        ref={wrapperRef} // Tambahkan ref di sini
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="nav-button prev" onClick={handlePrev}>
          <div className="nav-arrow"><img src={right} alt="" /></div>
        </button>
        <div 
          className="testimonial-slider" 
          ref={sliderRef} 
          style={{ transform: `translateX(${offset}px)` }}
        >
          {textTestimonials.map((testimonial, index) => (
            <div
              className={`testimonial-card text ${index === currentSlide ? 'center-card' : ''}`}
              key={testimonial.id}
              onClick={()=> goToSlide(index)}
            >
              <div className="card-header">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <div className="star" key={i}></div>)}
                </div>
                <div className="profile-image">
                  <img src={testimonial.img} alt={testimonial.name} />
                </div>
              </div>
              <div className="card-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <h3 className="author-name">{testimonial.name}</h3>
                <div className="author-title"></div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={handleNext}>
          <div className="nav-arrow"><img src={left} alt="" /></div>
        </button>
      </div>
      <div className="pagination-dots">
        {textTestimonials.map((_, index) => (
          <div
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            key={index}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimoniText;