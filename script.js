// LOFlow Solutions — script.js

// ---- Mobile Menu ----
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ---- FAQ Accordion ----
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('open');
    });
    // Toggle current
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// ---- Booking Modal ----
const ROAM_URL = 'https://ro.am/loflow-solutions-llc/lobby-3/';

function openBookingModal() {
  const overlay = document.getElementById('bookingOverlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    goToStep(1);
  }
}

function closeBookingModal() {
  const overlay = document.getElementById('bookingOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    const lobbyEl = document.getElementById('roamLobby');
    if (lobbyEl) lobbyEl.innerHTML = '';
  }
}

function goToStep(step) {
  // Validate step 1 before advancing
  if (step === 2) {
    const first = document.getElementById('bookingFirstName');
    const last = document.getElementById('bookingLastName');
    const email = document.getElementById('bookingEmail');
    if (!first.value.trim() || !last.value.trim() || !email.value.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!email.validity.valid) {
      alert('Please enter a valid email address.');
      return;
    }
  }

  // Log data and load iframe on step 3
  if (step === 3) {
    const data = {
      firstName: document.getElementById('bookingFirstName')?.value,
      lastName: document.getElementById('bookingLastName')?.value,
      email: document.getElementById('bookingEmail')?.value,
      company: document.getElementById('bookingCompany')?.value,
      phone: document.getElementById('bookingPhone')?.value,
      tool: document.getElementById('bookingTool')?.value,
      message: document.getElementById('bookingMessage')?.value,
    };
    console.log('Booking form data:', data);

    // Open Roam in new tab
    window.open(ROAM_URL, '_blank');

    // Show confirmation in modal
    const lobbyEl = document.getElementById('roamLobby');
    if (lobbyEl) {
      lobbyEl.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:60px 24px;gap:20px;">'
        + '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1DE9B6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
        + '<h3 style="font-family:var(--font);font-size:1.3rem;margin:0;">You\'re all set, ' + (data.firstName || '') + '!</h3>'
        + '<p style="color:var(--fg-muted);font-size:0.9rem;max-width:360px;margin:0;">Your booking page just opened in a new tab. Pick a time that works and we\'ll take it from there.</p>'
        + '<a href="' + ROAM_URL + '" target="_blank" rel="noopener" class="btn-primary" style="width:fit-content;margin-top:8px;">OPEN BOOKING PAGE &rarr;</a>'
        + '</div>';
    }
  }

  // Toggle fullscreen for step 3
  const modal = document.querySelector('.booking-modal');
  if (modal) {
    if (step === 3) {
      modal.classList.add('fullscreen');
    } else {
      modal.classList.remove('fullscreen');
    }
  }

  // Show the target step
  document.querySelectorAll('.modal-step').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('modalStep' + step);
  if (target) target.classList.add('active');

  const progress = document.getElementById('modalProgress');
  if (progress) progress.textContent = 'Step ' + step + ' of 3';
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('booking-overlay')) {
    closeBookingModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBookingModal();
});

// ---- Trusted By Carousel ----
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
if (carouselTrack && prevBtn && nextBtn) {
  const slides = carouselTrack.querySelectorAll('.trusted-grid');
  let current = 0;
  const total = slides.length;

  function goToSlide(index) {
    current = (index + total) % total;
    carouselTrack.style.transform = `translateX(-${current * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(current - 1);
    resetAutoPlay();
  });
  nextBtn.addEventListener('click', () => {
    goToSlide(current + 1);
    resetAutoPlay();
  });

  let autoPlay = setInterval(() => goToSlide(current + 1), 10000);
  function resetAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => goToSlide(current + 1), 10000);
  }
}

// ---- Scroll Animations ----
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

// ---- Navbar scroll effect ----
const navbar = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    if (href === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---- Contact form (if on contact page) ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        btn.innerHTML = 'Message Sent! ✓';
        contactForm.reset();
      } else {
        btn.innerHTML = 'Error — try again';
      }
    } catch {
      btn.innerHTML = 'Error — try again';
    }
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 3000);
  });
}
