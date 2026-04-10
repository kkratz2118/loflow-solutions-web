'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Carousel from './components/Carousel';
import FAQ from './components/FAQ';
import ScrollAnimations from './components/ScrollAnimations';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [serviceIdx, setServiceIdx] = useState(0);
  const serviceCards = [
    {
      badges: ['Clear to Close Update', 'Loaniversary Reminder', 'Referral Follow-Up'],
      icon: null,
      title: 'Done-For-You CRM Setup',
      desc: 'We handle the heavy lifting — full onboarding, workflow configuration, and mortgage-specific automation so you can focus on closing loans, not managing tech.',
    },
    {
      badges: null,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-3-3"/></svg>,
      title: 'Mortgage-Specific Workflows',
      desc: 'Annual review sequences, referral pipelines, post-close follow-up, and lead routing systems built for how top LOs actually work — not generic templates.',
    },
    {
      badges: null,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
      title: 'Pipeline Intelligence',
      desc: 'Know exactly where every lead stands with real-time data insights. No more guessing about your pipeline health or missing follow-up opportunities.',
    },
    {
      badges: null,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
      title: 'Custom Integrations',
      desc: 'Seamlessly connect your LOS, dialer, and other tools without the hassle. We build the bridges so your systems actually talk to each other.',
    },
    {
      badges: null,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: 'Ongoing CRM Support',
      desc: 'Get expert guidance to optimize your system as your business grows. Optional support retainer keeps your CRM running smoothly and profitably.',
    },
  ];

  const nextService = useCallback(() => {
    setServiceIdx(prev => (prev + 1) % serviceCards.length);
  }, [serviceCards.length]);

  useEffect(() => {
    const timer = setInterval(nextService, 8000);
    return () => clearInterval(timer);
  }, [nextService]);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="main-content">

        {/* HERO */}
        <section className="hero-section" id="hero">
          <div className="hero-bg"><div className="hero-gradient"></div></div>
          <div className="container">
            <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="badge-announcement">
                  <span className="badge-dot"></span>
                  YOUR MORTGAGE AUTOMATION PARTNER
                </div>
                <h1 className="heading-display" style={{ whiteSpace: 'nowrap' }}>
                  YOU DON&apos;T NEED MORE TOOLS.<br />YOU NEED <strong>BETTER SYSTEMS.</strong>
                </h1>
                <p className="subheadline" style={{ textAlign: 'center' }}>
                  Custom-built mortgage automation that saves you time and actually drives revenue.
                </p>
                <div className="btn-group" style={{ justifyContent: 'center' }}>
                  <button className="btn-primary" onClick={() => setBookingOpen(true)}>
                    BOOK A FREE CALL &rarr;
                  </button>
                  <a href="#services" className="btn-secondary">LEARN MORE</a>
                </div>
            </div>
            <Carousel />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="section-pad" style={{ paddingTop: '40px' }}>
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag">PROCESS</div>
              <h2 className="heading-section">Our Simple &amp; <span className="highlight">Smart Process</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 48px' }}>Everything you need to collaborate, create, and scale, all in one place.</p>
            </div>
            <div className="steps">
              <div>
                <div className="step-num">01</div>
                <div className="step-title">Discover &amp; Analyze</div>
                <p className="step-desc">We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.</p>
              </div>
              <div>
                <div className="step-num">02</div>
                <div className="step-title">Design &amp; Implement</div>
                <p className="step-desc">We configure your own system with its own identity — mortgage-specific workflows: annual reviews, referral pipelines, and post-close automation.</p>
              </div>
              <div>
                <div className="step-num">03</div>
                <div className="step-title">Optimize &amp; Scale</div>
                <p className="step-desc">We stick with you, continuously refine performance using real-time insights. As your business evolves, your automation grows with it.</p>
              </div>
            </div>
          </div>
        </section>



        {/* PIPELINE MANAGEMENT */}
        <section className="bg-muted section-pad">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag">PIPELINE MANAGEMENT</div>
              <h2 className="heading-section">One Pipeline. <span className="highlight">Every Tool Connected.</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>Your CRM, LOS, dialer, and email all feeding into a single view. No more switching tabs or losing leads between systems.</p>
            </div>

            <div className="pipeline-stat-banner">
              <div className="pipeline-stat">
                <span className="pipeline-stat-value card-stat-value" data-target={27} data-suffix="%">0%</span>
                <span className="pipeline-stat-label">more loans closed when your systems are properly connected</span>
              </div>
            </div>

            <div className="kanban">
              <div className="kanban-col">
                <div className="kanban-col-title">
                  <span>New Lead</span>
                  <span className="kanban-col-count">3</span>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-source source-crm">CRM</div>
                  <div className="kanban-card-name">John Smith</div>
                  <div className="kanban-card-meta">Inbound &middot; $485K VA</div>
                  <div className="kanban-card-tools">
                    <span className="kanban-tool" title="Auto-dialer queued">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72c.13.88.37 1.81.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c1 .33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                    <span className="kanban-tool" title="Email drip active">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                  </div>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-source source-los">LOS</div>
                  <div className="kanban-card-name">Davis, K.</div>
                  <div className="kanban-card-meta">Pre-Qual &middot; $478K Conv</div>
                  <div className="kanban-card-tools">
                    <span className="kanban-tool" title="LOS synced">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </span>
                  </div>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-source source-web">Web</div>
                  <div className="kanban-card-name">Patel, R.</div>
                  <div className="kanban-card-meta">Website Form &middot; $320K FHA</div>
                  <div className="kanban-card-tools">
                    <span className="kanban-tool" title="Auto-assigned">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="kanban-col-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>

              <div className="kanban-col">
                <div className="kanban-col-title">
                  <span>In Progress</span>
                  <span className="kanban-col-count">2</span>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-source source-los">LOS</div>
                  <div className="kanban-card-name">Brandon Cotter</div>
                  <div className="kanban-card-meta">Submitted to UW &middot; $612K FHA</div>
                  <div className="kanban-card-tools">
                    <span className="kanban-tool" title="LOS synced">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </span>
                    <span className="kanban-tool" title="Status update sent">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                  </div>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-source source-crm">CRM</div>
                  <div className="kanban-card-name">Chen, M.</div>
                  <div className="kanban-card-meta">Rate Locked &middot; $550K VA</div>
                  <div className="kanban-card-tools">
                    <span className="kanban-tool" title="Dialer follow-up">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72c.13.88.37 1.81.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c1 .33 1.93.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="kanban-col-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>

              <div className="kanban-col">
                <div className="kanban-col-title">
                  <span>Clear to Close</span>
                  <span className="kanban-col-count">2</span>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-source source-los">LOS</div>
                  <div className="kanban-card-name">Tabitha Centry</div>
                  <div className="kanban-card-meta">CTC &middot; $425K Conv</div>
                  <div className="kanban-card-tools">
                    <span className="kanban-tool" title="Closing docs sent">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </span>
                    <span className="kanban-tool" title="Celebration email queued">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </span>
                  </div>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-source source-crm">CRM</div>
                  <div className="kanban-card-name">Martinez, A.</div>
                  <div className="kanban-card-meta">Docs Out &middot; $510K VA</div>
                  <div className="kanban-card-tools">
                    <span className="kanban-tool" title="Post-close drip ready">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-pad">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag">SERVICES</div>
              <h2 className="heading-section">Mortgage Automation, <span className="highlight">Built for You</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>Everything top-producing LOs need to streamline follow-up, capture referrals, and close more loans.</p>
            </div>
            <div className="services-carousel">
              <button className="services-arrow services-prev" onClick={() => setServiceIdx((serviceIdx - 1 + serviceCards.length) % serviceCards.length)} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div className="services-track-wrapper">
                {serviceCards.map((card, i) => {
                  const offset = ((i - serviceIdx) % serviceCards.length + serviceCards.length) % serviceCards.length;
                  const pos = offset > Math.floor(serviceCards.length / 2) ? offset - serviceCards.length : offset;
                  const isCenter = pos === 0;
                  const isVisible = Math.abs(pos) <= 1;
                  if (!isVisible) return null;
                  return (
                    <div
                      className={`service-card sc-pos-${pos}`}
                      key={i}
                      style={{
                        transform: `translateX(${pos * 105}%) scale(${isCenter ? 1 : 0.88})`,
                        opacity: isCenter ? 1 : 0.5,
                        filter: isCenter ? 'none' : 'blur(2px)',
                        zIndex: isCenter ? 2 : 1,
                      }}
                    >
                      {card.badges ? (
                        <div className="service-tag-row">
                          {card.badges.map((b, j) => <span className="service-badge" key={j}>{b}</span>)}
                        </div>
                      ) : (
                        <div className="card-icon">{card.icon}</div>
                      )}
                      <div className="service-title">{card.title}</div>
                      <p className="service-desc">{card.desc}</p>
                    </div>
                  );
                })}
              </div>
              <button className="services-arrow services-next" onClick={() => setServiceIdx((serviceIdx + 1) % serviceCards.length)} aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
            <div className="services-dots">
              {serviceCards.map((_, i) => (
                <button key={i} className={`services-dot${i === serviceIdx ? ' active' : ''}`} onClick={() => setServiceIdx(i)} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>


        {/* INTEGRATIONS */}
        <section className="bg-muted section-pad" id="integrations">
          <div className="container">
            <div className="integrations-orbit-container">
              <div className="integrations-orbit-ring">
                {[
                  /* Zap / Automation */
                  <svg key="zap" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
                  /* Phone / Dialer */
                  <svg key="phone" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                  /* Monitor / LOS */
                  <svg key="monitor" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                  /* Dollar / Pricing */
                  <svg key="dollar" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                  /* Calendar / Scheduling */
                  <svg key="calendar" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
                  /* Mail / Email */
                  <svg key="mail" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                  /* Users / Contacts */
                  <svg key="users" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                  /* Globe / Web */
                  <svg key="globe" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                  /* Database / Data */
                  <svg key="database" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
                  /* Link / API */
                  <svg key="link" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
                  /* Clock / Automation */
                  <svg key="clock" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                  /* File / Documents */
                  <svg key="file" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                  /* Gear / Settings */
                  <svg key="gear" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
                  /* Shield / Security */
                  <svg key="shield" viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  /* Home / Mortgage */
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
                <h2 className="heading-section"><span className="highlight">Seamless</span> Integrations</h2>
                <p className="integrations-quote">&ldquo;Our automations plug into your stack to create a unified, intelligent workflow&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <section className="cta-section" id="cta">
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
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <ScrollAnimations />
    </>
  );
}
