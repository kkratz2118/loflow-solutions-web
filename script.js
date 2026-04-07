// LOFlow Solutions — script.js

// ---- Mobile Menu ----
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ---- Process Tabs ----
const stepBtns = document.querySelectorAll('.step-btn');
const stepContents = document.querySelectorAll('.process-step-content');
stepBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const step = btn.getAttribute('data-step');
    stepBtns.forEach(b => b.classList.remove('active'));
    stepContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector('.process-step-content[data-step="' + step + '"]')?.classList.add('active');
  });
});

// ---- FAQ Accordion ----
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
  q.addEventListener('click', () => {
    const isOpen = q.getAttribute('aria-expanded') === 'true';
    // Close all
    faqQuestions.forEach(other => {
      other.setAttribute('aria-expanded', 'false');
      other.nextElementSibling?.classList.remove('open');
    });
    // Toggle current
    if (!isOpen) {
      q.setAttribute('aria-expanded', 'true');
      q.nextElementSibling?.classList.add('open');
    }
  });
});

// ---- Scroll Animations ----
const fadeEls = document.querySelectorAll('.benefit-card, .service-card, .feature-item, .faq-item, .comparison-card, .process-step-content');
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
const navbar = document.querySelector('.navbar');
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
