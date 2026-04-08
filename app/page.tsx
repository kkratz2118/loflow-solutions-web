'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Carousel from './components/Carousel';
import FAQ from './components/FAQ';
import ScrollAnimations from './components/ScrollAnimations';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main style={{ paddingTop: '72px' }}>

        {/* HERO */}
        <section className="hero-section" id="hero">
          <div className="hero-bg"><div className="hero-gradient"></div></div>
          <div className="container">
            <div className="grid-2">
              <div style={{ maxWidth: '520px' }}>
                <div className="badge-announcement">
                  <span className="badge-dot"></span>
                  YOUR MORTGAGE AUTOMATION PARTNER
                </div>
                <h1 className="heading-display">
                  YOU DON&apos;T NEED MORE TOOLS.<br />YOU NEED <strong>BETTER SYSTEMS.</strong>
                </h1>
                <p className="subheadline">
                  Custom-built mortgage automation that saves you time and actually drives revenue. No bloated CRMs, no monthly markups, no cookie-cutter templates.
                </p>
                <div className="btn-group">
                  <button className="btn-primary" onClick={() => setBookingOpen(true)}>
                    BOOK A FREE CALL &rarr;
                  </button>
                  <a href="#services" className="btn-secondary">LEARN MORE</a>
                </div>
              </div>

              {/* Pipeline Widget */}
              <div>
                <div className="widget">
                  <div className="widget-header">
                    <div className="widget-title">
                      <span>PIPELINE OVERVIEW</span>
                      <span className="live-dot"></span>
                      <span style={{ color: '#1DE9B6', fontSize: '0.6rem' }}>LIVE</span>
                    </div>
                    <div className="widget-tabs">
                      <button className="widget-tab">DAILY</button>
                      <button className="widget-tab active">WEEKLY</button>
                      <button className="widget-tab">MONTHLY</button>
                    </div>
                  </div>
                  <div className="widget-big-number">$24.8M</div>
                  <div className="widget-trend">&#8599; 12.4% from last month</div>
                  <div className="widget-grid">
                    <div className="widget-card">
                      <div className="widget-card-title">FUNDED VOLUME</div>
                      <div className="widget-card-value">$12.4M</div>
                      <div className="widget-card-delta">&#8599; +18.2%</div>
                      <div className="sparkline"></div>
                    </div>
                    <div className="widget-card">
                      <div className="widget-card-title">STUCK LOANS</div>
                      <div className="widget-card-value">8</div>
                      <div className="widget-card-delta">&#8600; -3 this week</div>
                      <div className="sparkline"></div>
                    </div>
                    <div className="widget-card">
                      <div className="widget-card-title">APPS THIS WEEK</div>
                      <div className="widget-card-value">24</div>
                      <div className="widget-card-delta">&#8599; +6 vs last week</div>
                      <div className="sparkline"></div>
                    </div>
                    <div className="widget-card">
                      <div className="widget-card-title">AVG CYCLE TIME</div>
                      <div className="widget-card-value">32d</div>
                      <div className="widget-card-delta">&#9201; -4d improvement</div>
                      <div className="sparkline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED BY */}
        <Carousel />

        {/* BENEFITS */}
        <section id="benefits" className="section-pad">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag">BENEFITS</div>
              <h2 className="heading-section">Everything You Need. Nothing You Don&apos;t.</h2>
            </div>
            <div className="grid-4">
              <div className="card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div className="heading-card">Real-Time Intelligence</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)' }}>Access accurate, real-time data to drive smarter decisions. Get instant visibility into your mortgage pipeline.</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <div className="heading-card">Measurable Impact</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)' }}>Track performance, uncover insights, and achieve data-backed growth. See exactly how your CRM drives revenue.</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <div className="heading-card">Seamless Integration</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)' }}>Connect tools, teams, and workflows with intelligent automation. Your CRM plays nice with your LOS and dialer.</p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <div className="heading-card">Pipeline Intelligence</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)' }}>Know exactly where every lead stands with real-time data insights. No more guessing about pipeline health.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE #1 — Pipeline Search */}
        <section className="bg-muted section-pad">
          <div className="container">
            <div className="feature-detail">
              <div>
                <div className="eyebrow">Pipeline Intelligence</div>
                <h2 className="heading-section" style={{ textTransform: 'none', fontFamily: 'var(--font)' }}>Know Where Every<br />Loan Stands</h2>
                <p className="subheadline" style={{ marginBottom: 0 }}>Search by name, loan number, or status. LOFlow gives you instant visibility into your pipeline so nothing falls through the cracks.</p>
              </div>
              <div>
                <div className="demo-panel">
                  <div className="demo-panel-header">Pipeline search &mdash; 3 results</div>
                  <table className="demo-table">
                    <thead>
                      <tr><th>Borrower</th><th>Status</th><th>Stage</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>John Smith</td><td>Application Sent</td><td>In Progress</td></tr>
                      <tr><td>Tabitha Centry</td><td>Clear to Close</td><td>CTC</td></tr>
                      <tr><td>Brandon Cotter</td><td>Submitted to UW</td><td>Underwriting</td></tr>
                    </tbody>
                  </table>
                  <p className="demo-caption">Real-time pipeline data &middot; Always up to date</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE #2 — Real-Time Metrics */}
        <section className="section-pad">
          <div className="container">
            <div className="feature-detail reverse">
              <div>
                <div className="eyebrow">Real-Time Metrics</div>
                <h2 className="heading-section" style={{ textTransform: 'none', fontFamily: 'var(--font)' }}>Your Pipeline<br />at a Glance</h2>
                <p className="subheadline" style={{ marginBottom: 0 }}>Metrics that actually matter to your mortgage business. Click any number to drill into the underlying data.</p>
              </div>
              <div>
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-title">FUNDED VOLUME</div>
                    <div className="metric-value">$12.4M</div>
                    <div className="metric-delta">&#8599; +18.2%</div>
                    <div className="sparkline" style={{ marginTop: '12px' }}></div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-title">STUCK LOANS</div>
                    <div className="metric-value">8</div>
                    <div className="metric-delta">&#8600; -3 this week</div>
                    <div className="sparkline" style={{ marginTop: '12px' }}></div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-title">APPS THIS WEEK</div>
                    <div className="metric-value">24</div>
                    <div className="metric-delta">&#8599; +6 vs last week</div>
                    <div className="sparkline" style={{ marginTop: '12px' }}></div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-title">AVG CYCLE TIME</div>
                    <div className="metric-value">32d</div>
                    <div className="metric-delta">&#9201; -4d improvement</div>
                    <div className="sparkline" style={{ marginTop: '12px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE #3 — Kanban */}
        <section className="bg-muted section-pad">
          <div className="container">
            <div className="text-center mb-12">
              <div className="eyebrow">Workflow Management</div>
              <h2 className="heading-section">See Your Deals Move Through The Pipeline</h2>
            </div>
            <div className="kanban">
              <div className="kanban-col">
                <div className="kanban-col-title">Application</div>
                <div className="kanban-card">
                  <div className="kanban-card-name">John Smith</div>
                  <div className="kanban-card-meta">Application Sent &middot; $485K VA</div>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-name">Davis, K.</div>
                  <div className="kanban-card-meta">Qualification &middot; $478K Conv</div>
                </div>
              </div>
              <div className="kanban-col">
                <div className="kanban-col-title">Underwriting</div>
                <div className="kanban-card">
                  <div className="kanban-card-name">Brandon Cotter</div>
                  <div className="kanban-card-meta">Submitted to UW &middot; $612K FHA</div>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-name">Chen, M.</div>
                  <div className="kanban-card-meta">Locked &middot; $550K VA</div>
                </div>
              </div>
              <div className="kanban-col">
                <div className="kanban-col-title">Clear to Close</div>
                <div className="kanban-card">
                  <div className="kanban-card-name">Tabitha Centry</div>
                  <div className="kanban-card-meta">CTC &middot; $425K Conv</div>
                </div>
                <div className="kanban-card">
                  <div className="kanban-card-name">Martinez, A.</div>
                  <div className="kanban-card-meta">Docs Out &middot; $510K VA</div>
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
            <div className="services-grid">
              <div className="service-card">
                <div className="service-tag-row">
                  <span className="service-badge">Clear to Close Update</span>
                  <span className="service-badge">Loaniversary Reminder</span>
                  <span className="service-badge">Referral Follow-Up</span>
                </div>
                <div className="service-title">Done-For-You CRM Setup</div>
                <p className="service-desc">We handle the heavy lifting — full onboarding, workflow configuration, and mortgage-specific automation so you can focus on closing loans, not managing tech.</p>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-3-3"/></svg>
                </div>
                <div className="service-title">Mortgage-Specific Workflows</div>
                <p className="service-desc">Annual review sequences, referral pipelines, post-close follow-up, and lead routing systems built for how top LOs actually work — not generic templates.</p>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <div className="service-title">Pipeline Intelligence</div>
                <p className="service-desc">Know exactly where every lead stands with real-time data insights. No more guessing about your pipeline health or missing follow-up opportunities.</p>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <div className="service-title">Custom Integrations</div>
                <p className="service-desc">Seamlessly connect your LOS, dialer, and other tools without the hassle. We build the bridges so your systems actually talk to each other.</p>
              </div>
              <div className="service-card">
                <div className="card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div className="service-title">Ongoing CRM Support</div>
                <p className="service-desc">Get expert guidance to optimize your system as your business grows. Optional support retainer keeps your CRM running smoothly and profitably.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-muted section-pad">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag">FEATURES</div>
              <h2 className="heading-section">Everything You Need <span className="highlight">In One Place</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>Built specifically for mortgage professionals who demand control, not cookie-cutter solutions.</p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5-5-4 4-3-3"/></svg>
                </div>
                <div>
                  <h4 className="feature-title">Annual Review Automation</h4>
                  <p className="feature-desc">Automatically nurture past clients with personalized mortgage review sequences. Never miss a refi opportunity again.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <h4 className="feature-title">Referral Pipeline Management</h4>
                  <p className="feature-desc">Build and maintain realtor relationships with automated follow-up systems designed to generate consistent referral flow.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4 className="feature-title">Post-Close Follow-Up</h4>
                  <p className="feature-desc">Keep clients engaged after closing with evergreen sequences that drive reviews, referrals, and repeat business.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
                </div>
                <div>
                  <h4 className="feature-title">Lead Routing &amp; Management</h4>
                  <p className="feature-desc">Instantly capture and route inbound leads while automating outbound follow-up. No lead falls through the cracks.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <div>
                  <h4 className="feature-title">Pipeline Intelligence</h4>
                  <p className="feature-desc">Track loan progress in real-time with dashboards that show exactly where your business stands — no guessing.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <div>
                  <h4 className="feature-title">LOS Integration</h4>
                  <p className="feature-desc">Connect seamlessly with ARIVE, LendingPad, and other mortgage systems. Your CRM works with your existing stack.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="section-pad">
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

        {/* INTEGRATIONS */}
        <section className="bg-muted section-pad" id="integrations">
          <div className="container">
            <div className="text-center mb-8">
              <div className="section-tag">INTEGRATIONS</div>
              <h2 className="heading-section"><span className="highlight">Seamless</span> Integrations</h2>
              <p className="integrations-quote">&ldquo;Our automations plug into your stack to create a unified, intelligent workflow&rdquo;</p>
            </div>
            <div className="integrations-marquee-wrap">
              <div className="integrations-track">
                {[...Array(2)].map((_, setIdx) => (
                  <Fragment key={setIdx}>
                    <div className="integration-logo">
                      <Image src="https://framerusercontent.com/images/5rVfhRpaT4VTcXV85kG3LS09lXQ.png" alt="Integration logo" width={36} height={36} />
                    </div>
                    <div className="integration-logo">
                      <svg viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div className="integration-logo">
                      <svg viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    </div>
                    <div className="integration-logo">
                      <svg viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                    </div>
                    <div className="integration-logo">
                      <svg viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div className="integration-logo">
                      <svg viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </div>
                    <div className="integration-logo">
                      <svg viewBox="0 0 24 24" fill="none" width="30" height="30" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* COMPARISON */}
        <section className="bg-muted section-pad" id="comparison">
          <div className="container">
            <div className="text-center mb-12">
              <div className="section-tag">COMPARISON</div>
              <h2 className="heading-section">Why Choose Us <span className="highlight">Over Others</span></h2>
              <p className="section-sub" style={{ margin: '0 auto 32px' }}>See how we compare against others in performance and growth</p>
            </div>
            <div className="comparison-grid">
              <div className="comparison-card comparison-us">
                <div className="comparison-logo-wrap">
                  <Image src="/images/loflow-favicon.png" alt="LOFlow Logo" width={36} height={36} />
                  <span style={{ fontFamily: 'var(--font)', fontWeight: 900, textTransform: 'uppercase' as const }}>LOFlow</span>
                </div>
                <ul className="comparison-list">
                  {['Fast setup & Implemented on your behalf', 'Built to grow and adapt with you', 'Real-time Integrations & Follow-ups', 'Automates tasks, reducing overhead', 'Expert support + AI guidance'].map((item, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="comparison-card">
                <div className="comparison-others-label">Others</div>
                <ul className="comparison-list comparison-list-neg">
                  {['Slower execution and manual setup', 'Requires manual updates as you scale', 'Limited or delayed reporting', 'Higher labor costs, less automation', 'Generic support or none at all'].map((item, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="cta">
          <div className="container">
            <div className="cta-tag">Reach out anytime</div>
            <h2 className="cta-heading">READY TO OWN YOUR TECH?<br /><span className="highlight">LET&apos;S BUILD YOUR SYSTEM</span></h2>
            <p className="cta-sub">Stop renting bloated CRMs. Get a custom mortgage system that actually drives revenue.</p>
            <button className="btn-primary" onClick={() => setBookingOpen(true)}>
              BOOK A FREE CALL &rarr;
            </button>
            <div className="cta-social">
              <a href="https://www.instagram.com/mortgage_automation" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <div className="social-divider"></div>
              <a href="https://www.facebook.com/profile.php?id=100085539895958" target="_blank" rel="noopener" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
            <a href="mailto:hello@loflowsolutions.com" className="cta-email">hello@loflowsolutions.com</a>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <ScrollAnimations />
    </>
  );
}
