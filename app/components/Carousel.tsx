'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const slides = [
  [
    { src: '/images/bonzo-logo.jpeg', alt: 'Bonzo' },
    { src: '/images/data-buddy-logo.jpeg', alt: 'Data Buddy' },
    { src: '/images/loflow-solution.png', alt: 'LOFlow Solutions' },
    { src: '/images/zapier.png', alt: 'Zapier' },
  ],
  [
    { src: '/images/loflow-solution.png', alt: 'LOFlow Solutions' },
    { src: '/images/zapier.png', alt: 'Zapier' },
    { src: '/images/bonzo-logo.jpeg', alt: 'Bonzo' },
    { src: '/images/data-buddy-logo.jpeg', alt: 'Data Buddy' },
  ],
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goToSlide = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(current + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [current, goToSlide]);

  return (
    <section className="trusted-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">TOOLS WE WORK WITH</div>
          <p className="trusted-sub">Software and apps we integrate to streamline your workflow</p>
        </div>
        <div className="trusted-carousel">
          <button className="carousel-arrow carousel-prev" onClick={() => goToSlide(current - 1)} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="carousel-track-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slides.map((slide, slideIndex) => (
                <div className="trusted-grid" key={slideIndex}>
                  {slide.map((logo, logoIndex) => (
                    <div className="trusted-logo" key={logoIndex}>
                      <Image src={logo.src} alt={logo.alt} width={200} height={80} style={{ objectFit: 'contain' }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-arrow carousel-next" onClick={() => goToSlide(current + 1)} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
