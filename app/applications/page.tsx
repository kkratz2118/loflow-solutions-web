'use client';

import { useState } from 'react';
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
  },
  {
    label: 'Application 02',
    name: 'App Name Here',
    reversed: true,
    description: 'A brief description of what this application does and the problem it solves for mortgage professionals.',
    features: [
      'Key feature or benefit one',
      'Key feature or benefit two',
      'Key feature or benefit three',
      'Key feature or benefit four',
    ],
    screenshotSrc: null,
    screenshotAlt: '',
  },
  {
    label: 'Application 03',
    name: 'App Name Here',
    reversed: false,
    description: 'A brief description of what this application does and the problem it solves for mortgage professionals.',
    features: [
      'Key feature or benefit one',
      'Key feature or benefit two',
      'Key feature or benefit three',
      'Key feature or benefit four',
    ],
    screenshotSrc: null,
    screenshotAlt: '',
  },
];

export default function ApplicationsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState('');

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="main-content">

        {/* Hero */}
        <section className="section-pad">
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
            <div className="container">
              <div className={`feature-detail${app.reversed ? ' reverse' : ''}`}>
                <div>
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
                <div>
                  <h2 className="heading-section" style={{ textTransform: 'none', fontFamily: 'var(--font)' }}>{app.name}</h2>
                  <p className="subheadline">{app.description}</p>
                  <ul className="app-features">
                    {app.features.map((feat, j) => (
                      <li key={j}>{feat}</li>
                    ))}
                  </ul>
                  <button
                    className="btn-primary"
                    style={{ width: 'fit-content' }}
                    onClick={() => { setSelectedTool(app.name); setBookingOpen(true); }}
                  >
                    JOIN TODAY! &rarr;
                  </button>
                </div>
              </div>
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
