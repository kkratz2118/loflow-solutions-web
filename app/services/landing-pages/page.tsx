'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BookingModal from '../../components/BookingModal';
import FAQ from '../../components/FAQ';
import HeroParallax from '../../components/HeroParallax';
import ScrollAnimations from '../../components/ScrollAnimations';

const LANDING_TOOL_OPTIONS = [
  'Custom Landing Page',
  'Squeeze Page',
  'Application Funnel',
  'Rate Quote Page',
  'VSL / Long-Form Page',
  'Pre-Approval Page',
  'Realtor Co-Branded Page',
  'Not sure yet',
];

type ShowcaseVariant = {
  id: string;
  label: string;
  tagline: string;
  meta: string;
  mockup: React.ReactNode;
};

const SHOWCASE: ShowcaseVariant[] = [
  {
    id: 'squeeze',
    label: 'Squeeze Page',
    tagline: 'Single-field opt-in. Maximum conversion. Built for cold traffic from ads.',
    meta: 'Avg. conv. 18–32%',
    mockup: (
      <>
        <div className="mk-pill">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-dark)' }} />
          FREE RATE ALERT
        </div>
        <div className="mk-headline">LOCK TODAY&apos;S RATE BEFORE IT MOVES.</div>
        <div className="mk-sub">Get instant text alerts when mortgage rates drop in your area. Free. No credit check.</div>
        <input className="mk-input" placeholder="your@email.com" />
        <input className="mk-input" placeholder="Phone (for SMS alerts)" />
        <button className="mk-btn accent">GET MY FREE ALERTS →</button>
        <div className="mk-trust-row">
          <span className="mk-trust-badge">NMLS #2345678</span>
          <span className="mk-trust-badge">Equal Housing</span>
          <span className="mk-trust-badge">SSL Secured</span>
        </div>
      </>
    ),
  },
  {
    id: 'funnel',
    label: 'Multi-Step Application Funnel',
    tagline: 'Progressive 4-step form. Starts easy, builds commitment. Highest-converting format.',
    meta: 'Avg. conv. 24–41%',
    mockup: (
      <>
        <div className="mk-progress">
          <div className="mk-progress-step done" />
          <div className="mk-progress-step done" />
          <div className="mk-progress-step current" />
          <div className="mk-progress-step" />
        </div>
        <div className="mk-eyebrow">Step 3 of 4 — Credit Range</div>
        <div className="mk-headline" style={{ fontSize: '1.1rem' }}>What&apos;s your estimated credit score?</div>
        <div className="mk-sub">This is a soft-pull estimate only — won&apos;t affect your credit.</div>
        <div className="mk-choice selected">
          <span className="mk-choice-dot" />
          <span>Excellent (740+)</span>
        </div>
        <div className="mk-choice">
          <span className="mk-choice-dot" />
          <span>Good (680–739)</span>
        </div>
        <div className="mk-choice">
          <span className="mk-choice-dot" />
          <span>Fair (620–679)</span>
        </div>
        <div className="mk-choice">
          <span className="mk-choice-dot" />
          <span>Not sure</span>
        </div>
        <button className="mk-btn">CONTINUE →</button>
      </>
    ),
  },
  {
    id: 'rate-quote',
    label: 'Instant Rate Quote Page',
    tagline: 'Dynamic quote calculator. Real-time pricing. Routes directly to your calendar.',
    meta: 'Avg. conv. 12–19%',
    mockup: (
      <>
        <div className="mk-eyebrow">Your personalized rates</div>
        <div className="mk-headline" style={{ fontSize: '1.15rem' }}>$425K PURCHASE • 740 FICO</div>
        <div className="mk-rate-grid">
          <div className="mk-rate-card">
            <div className="mk-rate-value">6.875%</div>
            <div className="mk-rate-label">30-Yr Fixed</div>
          </div>
          <div className="mk-rate-card best">
            <div className="mk-rate-value">6.125%</div>
            <div className="mk-rate-label">15-Yr Fixed</div>
          </div>
          <div className="mk-rate-card">
            <div className="mk-rate-value">5.99%</div>
            <div className="mk-rate-label">7/1 ARM</div>
          </div>
        </div>
        <div className="mk-sub" style={{ fontSize: '0.7rem', marginBottom: 10 }}>Estimated monthly payment: <strong>$2,794</strong> (P&amp;I)</div>
        <button className="mk-btn accent">LOCK THIS RATE →</button>
        <div className="mk-trust-row">
          <span className="mk-trust-badge">⭐ 4.9 / 5</span>
          <span className="mk-trust-badge">1,200+ Loans</span>
          <span className="mk-trust-badge">Soft Pull</span>
        </div>
      </>
    ),
  },
  {
    id: 'vsl',
    label: 'VSL / Long-Form Sales Page',
    tagline: 'Video-led. High-trust. Ideal for refi, reverse, and non-QM offers.',
    meta: 'Avg. conv. 8–14%',
    mockup: (
      <>
        <div className="mk-eyebrow">Watch before requesting</div>
        <div className="mk-video">
          <div className="mk-video-play" />
        </div>
        <div className="mk-headline" style={{ fontSize: '1.05rem' }}>HOW HOMEOWNERS OVER 62 ARE UNLOCKING $100K+ TAX-FREE.</div>
        <div className="mk-sub">A 3-minute breakdown of the reverse mortgage strategy my clients use to fund retirement without selling.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span className="mk-stars">★★★★★</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--fg-muted)' }}>&ldquo;Best explanation I&apos;ve seen.&rdquo; — Linda R.</span>
        </div>
        <button className="mk-btn">REQUEST MY CUSTOM PLAN →</button>
      </>
    ),
  },
  {
    id: 'preapproval',
    label: 'Pre-Approval Landing Page',
    tagline: '2-minute pre-qual. Soft-pull language. Perfect for realtor referrals.',
    meta: 'Avg. conv. 22–35%',
    mockup: (
      <>
        <div className="mk-pill">SOFT PULL · NO IMPACT TO CREDIT</div>
        <div className="mk-headline">GET PRE-APPROVED IN 2 MINUTES.</div>
        <div className="mk-sub">Know exactly what you qualify for before you make an offer. Realtors prefer working with pre-approved buyers.</div>
        <div className="mk-row">
          <input className="mk-input" placeholder="First name" style={{ marginBottom: 0 }} />
          <input className="mk-input" placeholder="Last name" style={{ marginBottom: 0 }} />
        </div>
        <input className="mk-input" placeholder="Purchase price estimate" />
        <input className="mk-input" placeholder="ZIP code" />
        <button className="mk-btn accent">START MY PRE-APPROVAL →</button>
        <div className="mk-trust-row">
          <span className="mk-trust-badge">2 Min</span>
          <span className="mk-trust-badge">Soft Pull</span>
          <span className="mk-trust-badge">Bank-Level SSL</span>
        </div>
      </>
    ),
  },
  {
    id: 'realtor',
    label: 'Realtor Co-Branded Page',
    tagline: 'Joint-branded with your referral partners. Splits leads. Strengthens referrals.',
    meta: 'Partner-driven',
    mockup: (
      <>
        <div className="mk-realtor-row">
          <div className="mk-avatar">JS</div>
          <div style={{ flex: 1 }}>
            <div className="mk-name">Jordan Smith</div>
            <div className="mk-label">Your Loan Officer</div>
          </div>
          <div style={{ width: 1, height: 28, background: 'var(--border)' }} />
          <div className="mk-avatar alt">MR</div>
          <div style={{ flex: 1 }}>
            <div className="mk-name">Maria Reyes</div>
            <div className="mk-label">Your Realtor</div>
          </div>
        </div>
        <div className="mk-headline" style={{ fontSize: '1.05rem' }}>FIND &amp; FINANCE YOUR HOME — TOGETHER.</div>
        <div className="mk-sub">One team, one application, one seamless close. Start your homebuying journey with the pros who actually talk to each other.</div>
        <input className="mk-input" placeholder="Name" />
        <input className="mk-input" placeholder="Email" />
        <button className="mk-btn accent">GET STARTED TOGETHER →</button>
      </>
    ),
  },
];

const FEATURES = [
  { title: 'Custom Forms', desc: 'Loan purpose, credit range, property type, co-borrower toggle — fields tuned for mortgage intent.', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13h6 M9 17h4"/> },
  { title: 'Conditional Logic & Branching', desc: "Show the right questions based on loan type, credit, or property use — skip what doesn't apply.", icon: <path d="M6 3v12 M18 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 9a9 9 0 0 0-9 9"/> },
  { title: 'Instant Lead Notifications', desc: 'SMS + email to your phone the moment a lead submits. Get to them before your competition does.', icon: <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0"/> },
  { title: 'CRM / GHL Integration', desc: 'Every submission pipes directly into your pipeline with tags, source, and UTM data intact.', icon: <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/> },
  { title: 'A/B Testing Ready', desc: 'Split-test headlines, CTAs, and offers. Built-in variant tracking to find your highest-converting combo.', icon: <path d="M3 3v18h18 M7 12l3-3 3 3 5-5"/> },
  { title: 'Mobile-First Design', desc: 'Over 70% of loan traffic is mobile. Every page is built mobile-first with tap-friendly forms and fast loads.', icon: <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/> },
  { title: 'Analytics & Pixel Tracking', desc: 'Google Ads, Meta Pixel, TikTok Pixel, GA4 — all wired up so your ad platforms can optimize conversions.', icon: <path d="M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83"/> },
  { title: 'TCPA Consent + Compliance', desc: 'Proper disclosures, opt-in checkboxes, and consent logging — protecting you from costly compliance risk.', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4"/> },
  { title: 'Sub-3s Page Speed', desc: 'Optimized hosting, lazy-loaded images, and zero bloat — because every extra second kills conversions.', icon: <circle cx="12" cy="12" r="10"/> },
  { title: 'Custom Domain + SSL', desc: 'Your branding, your domain, your SSL cert. No generic subdomains or "powered by" footers.', icon: <circle cx="12" cy="12" r="10"/> },
];

const ANATOMY_LEFT = [
  { label: 'Clear, outcome-driven headline', icon: <path d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2 M9 21V11 M15 21V11 M5 11h14"/> },
  { label: 'Trust signals (NMLS, licenses)', icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
  { label: 'Sticky mobile CTA', icon: <rect x="5" y="2" width="14" height="20" rx="2"/> },
  { label: 'Exit-intent capture', icon: <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4 M10 17l5-5-5-5 M15 12H3"/> },
];

const ANATOMY_RIGHT = [
  { label: 'Social proof badge / reviews', icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> },
  { label: 'Multi-step progress bar', icon: <path d="M3 12h4 M10 12h4 M17 12h4"/> },
  { label: 'Conversion pixel firing', icon: <path d="M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M2 12h4 M18 12h4"/> },
  { label: 'Webhook → your CRM', icon: <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/> },
];

const LANDING_FAQS = [
  {
    question: 'How long does it take to build my landing page?',
    answer: 'Most pages go live in 7–14 days from our strategy call. Multi-step funnels and VSL pages with video production can run 2–3 weeks. We share preview links throughout so you can give feedback in real time.',
    highlight: 'Live in 1–2 weeks',
  },
  {
    question: "Do I own the page once it's built?",
    answer: "Yes — 100%. You own the code, the domain, the copy, and the design. No hostage situations, no 'powered by' footers, and no forced monthly fees to keep it online. You can take it anywhere.",
    highlight: 'You own everything',
  },
  {
    question: 'Can I edit the page myself after launch?',
    answer: 'Absolutely. Pages are built on editable platforms (WordPress, Webflow, or your preference) so you can update copy, swap images, or tweak offers without touching code. We also offer an optional retainer for ongoing changes.',
    highlight: 'Edit without touching code',
  },
  {
    question: 'Which CRMs and dialers do you integrate with?',
    answer: 'GoHighLevel, HubSpot, Salesforce, Follow Up Boss, Surefire, Total Expert, Velocify, and most LOS platforms. If your tool has a webhook or API, we can push leads into it.',
    highlight: 'Pushes straight to your pipeline',
  },
  {
    question: 'Is this compliant with TCPA and state mortgage regulations?',
    answer: "Every page includes proper TCPA consent language, opt-in checkboxes with consent logging, NMLS disclosures, and Equal Housing badges. We stay current on state-specific requirements and adapt pages accordingly. (We're not a law firm — final compliance review is always recommended.)",
    highlight: 'Built with compliance in mind',
  },
  {
    question: 'How much does a landing page cost?',
    answer: 'Pricing depends on page type, complexity, and integration scope. Squeeze pages start lower; multi-step funnels and VSL pages cost more. We quote every project on a call after we understand your goals — no surprise fees.',
    highlight: 'Quote after a free call',
  },
  {
    question: "What if my landing page doesn't convert?",
    answer: "We build with conversion in mind — but if the page underperforms, we'll iterate with you. Optional ongoing optimization retainers include A/B testing, copy revisions, and performance reviews to keep the page winning.",
    highlight: 'Optimization, not set-and-forget',
  },
];

export default function LandingPagesServicePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [variant, setVariant] = useState(0);

  const active = SHOWCASE[variant];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="main-content">

        {/* HERO */}
        <section className="hero-section" id="hero">
          <div className="hero-bg">
            <div className="hero-gradient"></div>
            <HeroParallax />
          </div>
          <div className="container">
            <div className="text-center hero-content">
              <div className="badge-announcement">
                <span className="badge-dot"></span>
                LANDING PAGES THAT CLOSE LOANS
              </div>
              <h1 className="heading-display">
                PAGES THAT TURN<br className="hero-br" />CLICKS INTO <strong>CLOSED LOANS.</strong>
              </h1>
              <p className="subheadline" style={{ textAlign: 'center' }}>
                Custom squeeze pages, application funnels, and rate-quote tools built for mortgage pros — engineered to capture high-intent borrowers and drop them straight into your pipeline.
              </p>
              <div className="btn-group" style={{ justifyContent: 'center' }}>
                <button className="btn-primary" onClick={() => scrollTo('showcase')}>
                  SEE WHAT WE BUILD &rarr;
                </button>
                <button className="btn-secondary" onClick={() => setBookingOpen(true)}>
                  BOOK A FREE CALL &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section id="showcase" className="section-pad" style={{ paddingTop: 40 }}>
          <div className="container">
            <div className="text-center mb-12 fade-in">
              <div className="section-tag">THE SHOWCASE</div>
              <h2 className="heading-section">Six Page Styles. <span className="highlight">One Goal: More Loans.</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>Click through live mockups of the exact landing-page formats we build for mortgage pros. Each is optimized for a different stage of borrower intent.</p>
            </div>

            <div className="showcase-grid fade-in">
              <div className="showcase-tabs" role="tablist" aria-label="Landing page styles">
                {SHOWCASE.map((v, i) => (
                  <button
                    key={v.id}
                    role="tab"
                    aria-selected={i === variant}
                    className={`showcase-tab${i === variant ? ' active' : ''}`}
                    onClick={() => setVariant(i)}
                  >
                    <span className="showcase-tab-label">{v.label}</span>
                    <span className="showcase-tab-desc">{v.tagline}</span>
                    <span className="showcase-tab-meta">{v.meta}</span>
                  </button>
                ))}
              </div>

              <div className="mockup-frame" aria-live="polite">
                <div className="mockup-chrome">
                  <div className="mockup-dot r" />
                  <div className="mockup-dot y" />
                  <div className="mockup-dot g" />
                  <div className="mockup-url">yourname.com/{active.id}</div>
                </div>
                <div className={`mockup-body${active.id === 'vsl' ? ' dark' : ''}`}>
                  {active.mockup}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANATOMY */}
        <section className="bg-muted section-pad">
          <div className="container">
            <div className="text-center mb-12 fade-in">
              <div className="section-tag">ANATOMY</div>
              <h2 className="heading-section">What&apos;s Inside a <span className="highlight">High-Converting Page</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>Every page we build ships with these elements — engineered from thousands of mortgage-industry data points.</p>
            </div>

            <div className="anatomy-wrap fade-in">
              <div className="anatomy-grid">
                <div className="anatomy-callouts left">
                  {ANATOMY_LEFT.map((c, i) => (
                    <div className="anatomy-callout" key={i}>
                      <span className="anatomy-callout-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                      </span>
                      <span>{c.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mockup-frame" style={{ minHeight: 420 }}>
                  <div className="mockup-chrome">
                    <div className="mockup-dot r" />
                    <div className="mockup-dot y" />
                    <div className="mockup-dot g" />
                    <div className="mockup-url">anatomy.example.com</div>
                  </div>
                  <div className="mockup-body">
                    <div className="mk-pill">★ 4.9/5 · 1,200+ LOANS</div>
                    <div className="mk-headline">PRE-APPROVED IN 2 MINUTES.</div>
                    <div className="mk-sub">Soft-pull only. No impact to credit. Know what you qualify for before you shop.</div>
                    <div className="mk-progress">
                      <div className="mk-progress-step done" />
                      <div className="mk-progress-step current" />
                      <div className="mk-progress-step" />
                    </div>
                    <input className="mk-input" placeholder="Estimated purchase price" />
                    <input className="mk-input" placeholder="ZIP code" />
                    <button className="mk-btn accent">CHECK MY ELIGIBILITY →</button>
                    <div className="mk-trust-row">
                      <span className="mk-trust-badge">NMLS</span>
                      <span className="mk-trust-badge">Equal Housing</span>
                      <span className="mk-trust-badge">SSL</span>
                    </div>
                  </div>
                </div>

                <div className="anatomy-callouts right">
                  {ANATOMY_RIGHT.map((c, i) => (
                    <div className="anatomy-callout" key={i}>
                      <span className="anatomy-callout-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                      </span>
                      <span>{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section-pad" id="features">
          <div className="container">
            <div className="text-center mb-12 fade-in">
              <div className="section-tag">WHAT&apos;S INCLUDED</div>
              <h2 className="heading-section">Every Page Ships With <span className="highlight">The Essentials.</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>No feature paywalls. No "starter" vs "pro" tiers. Every page we build is loaded with what actually moves the needle.</p>
            </div>

            <div className="lp-features-grid fade-in">
              {FEATURES.map((f, i) => (
                <div className="lp-feature-card" key={i}>
                  <span className="lp-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                  </span>
                  <div>
                    <div className="lp-feature-title">{f.title}</div>
                    <div className="lp-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-muted section-pad">
          <div className="container">
            <div className="text-center mb-12 fade-in">
              <div className="section-tag">PROCESS</div>
              <h2 className="heading-section">From Idea to Live In <span className="highlight">Two Weeks.</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 48px' }}>A clear three-phase build that keeps you in the loop without drowning you in meetings.</p>
            </div>
            <div className="steps fade-in">
              <div>
                <div className="step-num">01</div>
                <div className="step-title">Strategy</div>
                <p className="step-desc">We map your audience, offer, and conversion goal. You walk away with a clear wireframe, copy direction, and integration plan — before a single pixel gets designed.</p>
              </div>
              <div>
                <div className="step-num">02</div>
                <div className="step-title">Design &amp; Build</div>
                <p className="step-desc">We design, copy, and build your page end-to-end — forms, logic, CRM webhooks, pixel tracking, and mobile polish. You get preview links to approve every step.</p>
              </div>
              <div>
                <div className="step-num">03</div>
                <div className="step-title">Launch &amp; Optimize</div>
                <p className="step-desc">We push live, wire up your ad accounts and analytics, and monitor the first week of traffic. Optional retainers cover ongoing A/B tests and copy revisions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="section-pad" id="integrations">
          <div className="container">
            <div className="integrations-orbit-container">
              <div className="integrations-orbit-ring">
                {[
                  <svg key="zap" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                  <svg key="phone" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                  <svg key="monitor" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                  <svg key="dollar" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                  <svg key="calendar" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
                  <svg key="mail" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  <svg key="users" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                  <svg key="globe" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                  <svg key="database" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
                  <svg key="link" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
                  <svg key="clock" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                  <svg key="file" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                  <svg key="gear" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
                  <svg key="shield" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  <svg key="home" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                ].map((icon, i) => (
                  <div
                    className="integration-logo"
                    key={i}
                    style={{ '--i': i, '--total': 15 } as React.CSSProperties}
                  >
                    <div className="integration-logo-inner">{icon}</div>
                  </div>
                ))}
              </div>
              <div className="integrations-orbit-center">
                <div className="section-tag">INTEGRATIONS</div>
                <h2 className="heading-section">Every Page. <span className="highlight">Plugged Into Your Stack.</span></h2>
                <p className="integrations-quote">&ldquo;Leads route straight from your page into the CRM, dialer, or LOS you already use.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={LANDING_FAQS}
          tag="LANDING PAGE FAQ"
          heading={<>Everything You&apos;re <span className="highlight">Wondering About</span></>}
          subhead="The questions LOs ask most often before we build their page."
        />

        {/* CTA */}
        <section className="cta-section" id="cta">
          <div className="container">
            <div className="cta-tag">Let&apos;s build yours</div>
            <h2 className="cta-heading">READY TO STOP PAYING FOR LEADS?<br /><span className="highlight">BUILD YOUR OWN MACHINE.</span></h2>
            <p className="cta-sub">Get a custom landing page built for your loan offers, your brand, and your pipeline. Live in two weeks — yours forever.</p>
            <button className="btn-primary" onClick={() => setBookingOpen(true)}>
              BOOK A FREE CALL &rarr;
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTool="Custom Landing Page"
        toolOptions={LANDING_TOOL_OPTIONS}
      />
      <ScrollAnimations />
    </>
  );
}
