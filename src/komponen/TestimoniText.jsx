// src/components/TextTestimonialSlider.jsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import left from "../assets/img/left2.svg"
import right from "../assets/img/right2.svg"

// Data untuk testimoni (tidak ada perubahan)
const textTestimonials = [
  { id: 11, name: 'Ahmad Rizky', img: 'https://i.pravatar.cc/150?img=11', text: 'Training XCODE sangat membantu saya memahami konsep pengembangan aplikasi iOS.' },
  { id: 12, name: 'Sari Dewi', img: 'https://i.pravatar.cc/150?img=12', text: 'Instruktur berpengalaman dan metode pembelajaran interaktif membuat saya cepat menguasai XCODE.' },
  { id: 13, name: 'Budi Santoso', img: 'https://i.pravatar.cc/150?img=13', text: 'Setelah training ini, saya berhasil membuat aplikasi iOS pertama saya. Terima kasih XCODE!' },
  { id: 14, name: 'Maya Putri', img: 'https://i.pravatar.cc/150?img=14', text: 'Training sangat worth it! Semua dijelaskan detail, dari basic sampai advanced.' },
  { id: 15, name: 'Andi Pratama', img: 'https://i.pravatar.cc/150?img=15', text: 'Fasilitas training lengkap, mentor sabar dalam mengajar. Sangat puas dengan XCODE.' },
  { id: 16, name: 'Dewi Lestari', img: 'https://i.pravatar.cc/150?img=16', text: 'Materi update sesuai tren terbaru. Saya jadi percaya diri membuat aplikasi sendiri.' },
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