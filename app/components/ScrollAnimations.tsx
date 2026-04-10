'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const fadeEls = document.querySelectorAll('main section, .card, .service-card, .feature-item, .metric-card, .kanban-card, .comparison-card, .faq-item, .widget');
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

          // Trigger counter animation for stat values inside this element
          entry.target.querySelectorAll('.card-stat-value[data-target]').forEach(statEl => {
            animateCounter(statEl as HTMLElement);
          });

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

    // Separate observer for pipeline banner — replays every time, with 2s delay
    const bannerTimers: number[] = [];
    const bannerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          // Reset: remove visible, reset counter text
          el.classList.remove('visible');
          el.querySelectorAll('.card-stat-value[data-target]').forEach(statEl => {
            const s = statEl as HTMLElement;
            s.removeAttribute('data-animated');
            s.textContent = '0' + (s.dataset.suffix || '');
          });
          // Force reflow so the reset takes effect before re-adding visible
          void el.offsetWidth;
          // 2 second delay then animate
          const timer = window.setTimeout(() => {
            el.classList.add('visible');
            el.querySelectorAll('.card-stat-value[data-target]').forEach(statEl => {
              animateCounter(statEl as HTMLElement);
            });
          }, 1000);
          bannerTimers.push(timer);
        } else {
          // Scrolled away — reset immediately so it's ready for next entrance
          el.classList.remove('visible');
          el.querySelectorAll('.card-stat-value[data-target]').forEach(statEl => {
            const s = statEl as HTMLElement;
            s.removeAttribute('data-animated');
            s.textContent = '0' + (s.dataset.suffix || '');
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.pipeline-stat-banner').forEach(el => bannerObserver.observe(el));

    return () => {
      observer.disconnect();
      bannerObserver.disconnect();
      bannerTimers.forEach(t => clearTimeout(t));
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
