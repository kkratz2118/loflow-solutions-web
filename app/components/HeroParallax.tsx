'use client';

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function HeroParallax() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const count = isMobile ? 8 : 20;

    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 5 + Math.random() * 10,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 8,
        opacity: 0.25 + Math.random() * 0.45,
      }))
    );
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const gradient = document.querySelector('.hero-gradient') as HTMLElement | null;
    if (!gradient) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          gradient.style.transform = `translateX(-50%) translateY(${scrollY * 0.15}px)`;
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="hero-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--particle-opacity': p.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
