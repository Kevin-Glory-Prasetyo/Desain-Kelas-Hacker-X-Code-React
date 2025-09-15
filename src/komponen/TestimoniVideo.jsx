// src/components/VideoTestimonialSlider.jsx

import React, { useState, useEffect, useRef } from 'react';
import left from "../assets/img/left.svg"
import right from "../assets/img/right.svg"
import imamImg from "../assets/img/testimoni 01_Imam.png"
import adiImg from "../assets/img/testimoni 02_Adi.png"
import evendiImg from "../assets/img/testimoni 03_efendi.png"
import taufikImg from "../assets/img/testimoni 04_taufik.png"
import rizalImg from "../assets/img/testimoni 05_rizal.png"
import larasImg from "../assets/img/testimoni 06_laras.png"

const videoTestimonials = [
  { id: 1, name: 'Imam', title: 'Alumni Ehtical Elite Hacker', img: imamImg, videoId: 'y9BL_woOwJE' },
  { id: 2, name: 'Adi', title: 'Alumni Ethical Elite Hacker', img: adiImg, videoId: '6JhRCXkMR7c' },
  { id: 3, name: 'Evendi', title: 'Alumni X-code Training', img: evendiImg, videoId: 'DlJpwPuEhHk' },
  { id: 4, name: 'Taufik', title: 'Alumni X-code Training', img: taufikImg, videoId: 'DFxmmWBwTgQ' },
  { id: 5, name: 'Rizal', title: 'Alumni X-code Training', img: rizalImg, videoId: '7tEnkZ2r-G4' },
  { id: 6, name: 'Laras', title: 'Alumni X-code Training', img: larasImg, videoId: 'bxmSIVBcFSA' },
];

const TestimoniVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const wrapperRef = useRef(null);

  // Function to determine cards per view based on window width
  const getCardsPerView = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to reset index if it becomes out of bounds
  useEffect(() => {
    if (currentIndex > videoTestimonials.length - cardsPerView) {
      // PERBAIKAN: Mengganti cardsPerV menjadi cardsPerView
      setCurrentIndex(Math.max(0, videoTestimonials.length - cardsPerView));
    }
  }, [cardsPerView, currentIndex]);
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
  };
  
  const handleNext = () => {
    if (currentIndex < videoTestimonials.length - cardsPerView) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  
  // Calculate the offset for the transform
  const cardWidth = wrapperRef.current ? wrapperRef.current.children[0]?.offsetWidth + 15 : 0;
  const offset = -currentIndex * cardWidth;

  return (
    <div className="testimonial-section" id='Testimonial'>
      <h1 className="testimonial-title">Testimoni Video Training di X-CODE</h1>
      <h3>Ulasan Pelanggan Kami (Video)</h3>
      <div className="testimonial-carousel">
        <div 
          className="testimonial-cards-wrapper" 
          ref={wrapperRef}
          style={{ transform: `translateX(${offset}px)`}}
        >
          {videoTestimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-inner">
                <div className="stars">★★★★★</div>
                <div className="media-content">
                  <iframe 
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={testimonial.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="profile">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="controls">
        <button id="prev" onClick={handlePrev}><img src={left} alt="" /></button>
        <button id="next" onClick={handleNext}><img src={right} alt="" /></button>
      </div>
    </div>
  );
};

export default TestimoniVideo;