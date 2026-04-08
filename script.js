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

    const lobbyEl = document.getElementById('roamLobby');
    if (lobbyEl) {
      const note = [
        data.company ? 'Company: ' + data.company : '',
        data.phone ? 'Phone: ' + data.phone : '',
        data.tool ? 'Interested in: ' + data.tool : '',
        data.message ? 'Message: ' + data.message : '',
      ].filter(Boolean).join(' | ');

      // Try Roam SDK embed first
      if (typeof Roam !== 'undefined' && typeof Roam.initLobbyEmbed === 'function') {
        lobbyEl.innerHTML = '';
        Roam.initLobbyEmbed({
          url: ROAM_URL,
          parentElement: lobbyEl,
          accentColor: '#1DE9B6',
          theme: 'light',
          prefill: {
            name: ((data.firstName || '') + ' ' + (data.lastName || '')).trim(),
            email: data.email || '',
            note: note,
          },
          onSizeChange: (width, height) => {
            lobbyEl.style.height = Math.max(height, 500) + 'px';
          },
        });

        // If embed iframe is empty after 3s, fall back to direct iframe
        setTimeout(() => {
          const embeddedIframe = lobbyEl.querySelector('iframe');
          if (!embeddedIframe || !embeddedIframe.offsetHeight) {
            loadDirectIframe(lobbyEl);
          }
        }, 3000);
      } else {
        loadDirectIframe(lobbyEl);
      }
    }
  }

  function loadDirectIframe(container) {
    container.innerHTML = '<iframe src="' + ROAM_URL + '" style="width:100%;height:100%;min-height:600px;border:none;border-radius:8px;" title="Book a call"></iframe>';
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
