'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('.card, .service-card, .feature-item, .metric-card, .kanban-card, .comparison-card, .faq-item, .widget');
    fadeEls.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
