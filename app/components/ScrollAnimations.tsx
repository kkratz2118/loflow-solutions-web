'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('main section');
    fadeEls.forEach(el => el.classList.add('fade-in'));

    // Stagger: assign transition-delay based on data-stagger attribute
    document.querySelectorAll('[data-stagger]').forEach(el => {
      const idx = parseInt((el as HTMLElement).dataset.stagger || '0', 10);
      (el as HTMLElement).style.transitionDelay = `${idx * 120}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Clear stagger delay after entrance so hover transitions aren't delayed
          const el = entry.target as HTMLElement;
          if (el.dataset.stagger) {
            const delay = parseInt(el.dataset.stagger, 10) * 120 + 500;
            setTimeout(() => { el.style.transitionDelay = '0ms'; }, delay);
          }
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Separate observer for pipeline banner — plays once with delay
    let bannerTimer: number | null = null;
    const bannerObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          bannerTimer = window.setTimeout(() => {
            el.classList.add('visible');
            el.querySelectorAll('.card-stat-value[data-target]').forEach(statEl => {
              animateCounter(statEl as HTMLElement);
            });
          }, 1000);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.pipeline-stat-banner').forEach(el => bannerObserver.observe(el));

    return () => {
      observer.disconnect();
      bannerObserver.disconnect();
      if (bannerTimer) clearTimeout(bannerTimer);
    };
  }, []);

  return null;
}

function animateCounter(el: HTMLElement) {
  if (el.dataset.animated) return;
  el.dataset.animated = 'true';

  const target = parseFloat(el.dataset.target || '0');
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const startTime = performance.now();
  const isDecimal = target % 1 !== 0;

  function tick(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;

    el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current).toString()) + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}
