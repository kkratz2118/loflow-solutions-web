'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';

const listStyle = { paddingLeft: '24px', marginBottom: '16px', fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.75 };
const linkStyle = { color: 'var(--fg)', textDecoration: 'underline' };

export default function PrivacyPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setBookingOpen(true)} />
      <main className="legal-page">
        <div className="section-inner">
          <div className="section-tag">LEGAL</div>
          <h1 className="heading-section">Privacy Policy</h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', marginBottom: '40px' }}>Effective Date: April 2026</p>

          <p>At LOFlow Solutions LLC, accessible from loflowsolutions.com, one of our main priorities is the privacy of our visitors and customers. This Privacy Policy document describes the types of information collected and recorded by LOFlow Solutions and how we use it.</p>

          <h2>Information We Collect</h2>
          <p>LOFlow Solutions LLC collects the following types of personal information:</p>
          <ul style={listStyle}>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and company name.</li>
            <li><strong>Account Details:</strong> Login credentials and preferences.</li>
            <li><strong>Usage Data:</strong> Information on how our website and services are accessed and used.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul style={listStyle}>
            <li>Provide, operate, and maintain our services.</li>
            <li>Improve and personalize our services.</li>
            <li>Communicate with you, directly or through our partners, for customer service, support, and marketing purposes.</li>
            <li>Send transactional and administrative emails and SMS messages.</li>
          </ul>

          <h2>GDPR Compliance</h2>
          <p>If you are a resident of the European Economic Area (EEA), our processing of your personal information is based on your consent, the need to perform a contract, or our legitimate business interests. You have the right to access, rectify, or erase your data, restrict processing, object to processing, and the right to data portability. To exercise these rights, please contact us using the contact information provided below.</p>

          <h2>CCPA Compliance</h2>
          <p>If you are a resident of California, you have the right under the California Consumer Privacy Act (CCPA) to:</p>
          <ul style={listStyle}>
            <li>Know what personal information we collect, use, disclose, or sell.</li>
            <li>Request deletion of your personal information.</li>
            <li>Opt-out of the sale of your personal information (note: we do not sell your personal data).</li>
            <li>Not receive discriminatory treatment for exercising your privacy rights.</li>
          </ul>
          <p>To exercise your CCPA rights, please contact us using the information provided below.</p>

          <h2>CAN-SPAM Compliance</h2>
          <p>LOFlow Solutions LLC adheres to the CAN-SPAM Act, ensuring that all email communications:</p>
          <ul style={listStyle}>
            <li>Clearly identify LOFlow Solutions as the sender.</li>
            <li>Include our physical address.</li>
            <li>Provide clear options for unsubscribing from future communications.</li>
            <li>Promptly honor unsubscribe requests.</li>
          </ul>

          <h2>A2P/10DLC Compliance</h2>
          <p>LOFlow Solutions LLC adheres to A2P/10DLC messaging standards. All SMS messaging is done in compliance with carrier guidelines, ensuring proper consent is obtained, message frequency is clearly communicated, and users have the option to opt-out at any time by replying STOP.</p>

          <h2>Data Sharing and Disclosure</h2>
          <p>LOFlow Solutions LLC does not sell your personal information. We may share data with third parties only under the following circumstances:</p>
          <ul style={listStyle}>
            <li>To comply with applicable laws, regulations, or legal requests.</li>
            <li>With third-party service providers to help us deliver our services.</li>
            <li>During a business transfer, merger, or acquisition.</li>
          </ul>

          <h2>Cookies</h2>
          <p>We use cookies to enhance your browsing experience and analyze website traffic. You have the option to disable cookies through your browser settings, but doing so may limit the functionality of certain parts of our website.</p>

          <h2>Data Security</h2>
          <p>LOFlow Solutions LLC employs industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet-based service is completely secure, and we cannot guarantee absolute security.</p>

          <h2>Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required or permitted by law.</p>

          <h2>Your Data Protection Rights</h2>
          <p>You have the right to:</p>
          <ul style={listStyle}>
            <li>Request access to your personal information.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>Object to or restrict the processing of your personal data.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:serious@loflowsolutions.com" style={linkStyle}>serious@loflowsolutions.com</a>.</p>

          <h2>Children&apos;s Privacy</h2>
          <p>LOFlow Solutions LLC does not knowingly collect personal information from children under 13 years of age. If you believe that your child has provided personal information, please contact us immediately.</p>

          <h2>Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Effective Date&rdquo; at the top. You are encouraged to review this Privacy Policy periodically for any changes.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
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
