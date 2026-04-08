'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function PrivacyPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="legal-page">
        <div className="section-inner">
          <div className="section-tag">LEGAL</div>
          <h1 className="heading-section">Privacy Policy</h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', marginBottom: '40px' }}>Last Updated: January 2025</p>

          <p>LOFlow Solutions LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our website at loflowsolutions.com.</p>

          <h2>Information We Collect</h2>
          <p>We may collect information you provide directly, such as your name, email address, company name, and any messages you send us through our contact forms or booking system.</p>

          <h2>How We Use Your Information</h2>
          <ul style={{ paddingLeft: '24px', marginBottom: '16px', fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.75 }}>
            <li>To respond to your inquiries and provide our services</li>
            <li>To send you information about our services you&apos;ve requested</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide our services.</p>

          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:hello@loflowsolutions.com" style={{ color: 'var(--fg)', textDecoration: 'underline' }}>hello@loflowsolutions.com</a>.</p>
          <p>LOFlow Solutions LLC<br />2108 N ST #11770<br />Sacramento, CA 95816</p>
        </div>
      </main>

      <Footer showSocial={false} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
