'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

const listStyle = { paddingLeft: '24px', marginBottom: '16px', fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.75 };
const linkStyle = { color: 'var(--fg)', textDecoration: 'underline' };

export default function TermsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="legal-page">
        <div className="section-inner">
          <div className="section-tag">LEGAL</div>
          <h1 className="heading-section">Terms &amp; Conditions</h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', marginBottom: '40px' }}>Effective Date: April 2026</p>

          <p>By accessing or using our website (<a href="https://loflowsolutions.com" style={linkStyle}>loflowsolutions.com</a>) and services, you agree to comply with and be bound by the following Terms of Service (&ldquo;Terms&rdquo;). Please read these Terms carefully.</p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing our services, you confirm that you accept these Terms and agree to comply with them. If you do not agree with any part of these Terms, you may not use our services.</p>

          <h2>Services Provided</h2>
          <p>LOFlow Solutions LLC provides workflow automation and CRM optimization services specifically tailored for mortgage professionals. These services include:</p>
          <ul style={listStyle}>
            <li>Custom CRM automation build-outs</li>
            <li>Workflow management and optimization</li>
            <li>Dedicated CRM support and consultation</li>
          </ul>

          <h2>User Responsibilities</h2>
          <p>As a user, you agree to:</p>
          <ul style={listStyle}>
            <li>Provide accurate, current, and complete information during the registration process and maintain it.</li>
            <li>Secure and protect your account credentials.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Use the services solely for lawful purposes.</li>
          </ul>

          <h2>Prohibited Activities</h2>
          <p>You may not:</p>
          <ul style={listStyle}>
            <li>Engage in any activity that interferes with or disrupts our services.</li>
            <li>Attempt to gain unauthorized access to LOFlow Solutions LLC&rsquo;s systems or user data.</li>
            <li>Use the services for any fraudulent or illegal purposes.</li>
          </ul>

          <h2>Account Termination</h2>
          <p>LOFlow Solutions LLC reserves the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including if you breach the Terms.</p>

          <h2>Intellectual Property</h2>
          <p>All content, including software, graphics, logos, and materials provided by LOFlow Solutions LLC, is owned by or licensed to LOFlow Solutions LLC. You agree not to copy, modify, distribute, sell, or lease any part of our services or included content without explicit permission.</p>

          <h2>Disclaimer of Warranties</h2>
          <p>Our services are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. LOFlow Solutions LLC makes no representations or warranties of any kind, express or implied, regarding the reliability, accuracy, or completeness of the services provided.</p>

          <h2>Limitation of Liability</h2>
          <p>In no event shall LOFlow Solutions LLC be liable for any indirect, consequential, incidental, special, or punitive damages arising from your use or inability to use our services, even if we have been advised of the possibility of such damages.</p>

          <h2>Indemnification</h2>
          <p>You agree to indemnify and hold harmless LOFlow Solutions LLC, its employees, agents, and partners from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney&rsquo;s fees, arising out of your use of the services, your violation of these Terms, or infringement of any intellectual property rights.</p>

          <h2>Changes to Terms of Service</h2>
          <p>LOFlow Solutions LLC may update or change these Terms periodically. We will notify you of any significant changes by posting the updated Terms on this page and revising the effective date. Continued use of our services after any changes implies acceptance of the new Terms.</p>

          <h2>Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which LOFlow Solutions LLC operates, without regard to its conflict of law principles.</p>

          <h2>Contact Information</h2>
          <p>For any questions or concerns regarding these Terms, please contact us at:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:serious@loflowsolutions.com" style={linkStyle}>serious@loflowsolutions.com</a><br />
            <strong>Address:</strong> 2108 N ST #11770, Sacramento, CA 95816
          </p>
        </div>
      </main>

      <Footer showSocial={false} />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
