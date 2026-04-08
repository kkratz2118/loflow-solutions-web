'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

export default function TermsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="legal-page">
        <div className="section-inner">
          <div className="section-tag">LEGAL</div>
          <h1 className="heading-section">Terms of Service</h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', marginBottom: '40px' }}>Last Updated: January 2025</p>

          <p>Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the LOFlow Solutions website operated by LOFlow Solutions LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our website.</p>

          <h2>Services</h2>
          <p>LOFlow Solutions provides custom CRM setup, mortgage automation workflows, integrations, and ongoing support services for mortgage professionals. Specific service terms will be outlined in individual service agreements.</p>

          <h2>Intellectual Property</h2>
          <p>The website and its original content, features, and functionality are owned by LOFlow Solutions LLC and are protected by international copyright and other intellectual property laws.</p>

          <h2>Limitation of Liability</h2>
          <p>In no event shall LOFlow Solutions LLC be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

          <h2>Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>

          <h2>Changes to Terms</h2>
          <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes by updating the date at the top of this page.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:hello@loflowsolutions.com" style={{ color: 'var(--fg)', textDecoration: 'underline' }}>hello@loflowsolutions.com</a>.</p>
        </div>
      </main>

      <Footer showSocial={false} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
