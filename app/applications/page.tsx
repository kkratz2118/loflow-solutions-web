'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

const apps = [
  {
    label: 'Application 01',
    name: 'DataBuddy',
    reversed: false,
    description: 'AI-powered mortgage pipeline analytics that let you query your lending data in plain English. Stop building reports and start making decisions with instant pipeline visibility — no spreadsheets, no training, no waiting on IT.',
    features: [
      'AI-Powered Search — query your pipeline in plain English',
      'Real-Time Pipeline Metrics — funded volume, stuck loans, cycle time at a glance',
      'Smart Watchlists — drag-and-drop Kanban boards with automatic updates',
      'Secure Sharing — password-protected, revocable report links',
    ],
    screenshotSrc: '/images/databuddy-screenshot.png',
    screenshotAlt: 'DataBuddy pipeline analytics dashboard',
    comingSoon: false,
  },
  {
    label: 'Application 02',
    name: 'DataDrive',
    reversed: true,
    description: 'Gamification for the mortgage industry — turning complex financial tasks into engaging experiences with points, badges, and progress tracking to boost customer engagement, retention, and faster loan processing.',
    features: [
      'Key feature or benefit one',
      'Key feature or benefit two',
      'Key feature or benefit three',
      'Key feature or benefit four',
    ],
    screenshotSrc: '/images/Image Coming Soon.png',
    screenshotAlt: 'DataDrive screenshot coming soon',
    comingSoon: true,
  },
  {
    label: 'Application 03',
    name: 'DataBridge',
    reversed: false,
    description: 'A learning platform built exclusively for mortgage professionals who want to stop drowning in disconnected tools and start building systems that actually close more deals — no code required.',
    features: [
      'Video tutorials, written guides, and courses built around real mortgage workflows and tools like Zapier, N8N, GoHighLevel, and more',
      'The Bridge — a built-in community forum to ask questions, share solutions, and learn from other mortgage professionals',
      'Content organized by skill level, instructor, and tools so you always know where to pick up',
      'Free tier to explore the full library, with Pro access at $49/mo for all content and full community access',
    ],
    screenshotSrc: '/images/Image Coming Soon.png',
    screenshotAlt: 'DataBridge screenshot coming soon',
    comingSoon: true,
  },
];

export default function ApplicationsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState('');

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash) as HTMLElement | null;
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (el.offsetHeight / 2);
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    setTimeout(scrollToHash, 100);
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="main-content">

        {/* Hero */}
        <section className="section-pad" style={{ paddingTop: '40px', paddingBottom: '24px' }}>
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag">OUR TOOLS</div>
              <h1 className="heading-section">Solutions Built for <span className="highlight">Mortgage Professionals</span></h1>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>Purpose-built tools that streamline your workflow, automate follow-up, and keep your pipeline moving.</p>
            </div>
          </div>
        </section>

        {/* Apps */}
        {apps.map((app, i) => (
          <section key={i} id={`app-${i}`} className={`section-pad${i % 2 === 0 ? ' bg-muted' : ''}`}>
            <div className="container" style={{ position: 'relative' }}>
              <div
                className={`feature-detail${app.reversed ? ' reverse' : ''}`}
                style={app.comingSoon ? { filter: 'blur(6px)', pointerEvents: 'none', userSelect: 'none' } : undefined}
              >
                <div className="app-name-mobile">
                  <h2 className="heading-section" style={{ textTransform: 'none', fontFamily: 'var(--font)' }}>{app.name}</h2>
                </div>
                <div className="app-image-col">
                  <div className="app-screenshot">
                    {app.screenshotSrc ? (
                      <img src={app.screenshotSrc} alt={app.screenshotAlt} />
                    ) : (
                      <div className="app-screenshot-placeholder">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        <span>Screenshot Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="app-info-col">
                  <h2 className="heading-section app-name-desktop" style={{ textTransform: 'none', fontFamily: 'var(--font)' }}>{app.name}</h2>
                  <p className="subheadline">{app.description}</p>
                  <ul className="app-features">
                    {app.features.map((feat, j) => (
                      <li key={j}>{feat}</li>
                    ))}
                  </ul>
                  {!app.comingSoon && (
                    <button
                      className="btn-primary"
                      style={{ width: 'fit-content' }}
                      onClick={() => { setSelectedTool(app.name); setBookingOpen(true); }}
                    >
                      SCHEDULE YOUR DEMO! &rarr;
                    </button>
                  )}
                </div>
              </div>
              {app.comingSoon && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                  <span style={{ background: 'var(--accent)', color: '#fff', padding: '12px 32px', borderRadius: '8px', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    COMING SOON
                  </span>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-tag">Reach out anytime</div>
            <h2 className="cta-heading">READY TO OWN YOUR TECH?<br /><span className="highlight">LET&apos;S BUILD YOUR SYSTEM</span></h2>
            <p className="cta-sub">Stop renting bloated CRMs. Get a custom mortgage system that actually drives revenue.</p>
            <button className="btn-primary" onClick={() => setBookingOpen(true)}>
              BOOK A FREE CALL &rarr;
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultTool={selectedTool} toolOptions={apps.map(a => a.name)} />
    </>
  );
}
