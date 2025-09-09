// src/components/VideoTestimonialSlider.jsx

import React, { useState, useEffect, useRef } from 'react';

// Data is stored in an array of objects for easier management
const videoTestimonials = [
  { id: 1, name: 'John F Kennedy', title: 'Website X-Code', img: 'https://i.pravatar.cc/50?img=1', videoId: 'dQw4w9WgXcQ' },
  { id: 2, name: 'Leonardo DiCaprio', title: 'Website X-Code', img: 'https://i.pravatar.cc/50?img=2', videoId: '5qap5aO4i9A' },
  { id: 3, name: 'Steve Jobs', title: 'Website X-Code', img: 'https://i.pravatar.cc/50?img=3', videoId: '9bZkp7q19f0' },
  { id: 4, name: 'Bill Gates', title: 'Website X-Code', img: 'https://i.pravatar.cc/50?img=4', videoId: '3JZ_D3ELwOQ' },
  { id: 5, name: 'Mark Zuckerberg', title: 'Website X-Code', img: 'https://i.pravatar.cc/50?img=5', videoId: 'L_jWHffIx5E' },
  { id: 6, name: 'Elon Musk', title: 'Website X-Code', img: 'https://i.pravatar.cc/50?img=6', videoId: 'e-ORhEE9VVg' },
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
    <div className="testimonial-section">
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
        <button id="prev" onClick={handlePrev}>&#8592;</button>
        <button id="next" onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
};

export default TestimoniVideo;