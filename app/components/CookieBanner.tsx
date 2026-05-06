'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CONSENT_EVENT, CONSENT_KEY, type ConsentState } from '../lib/analytics';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: Exclude<ConsentState, null>) => {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: value }));
    setVisible(false);
  };

  const accept = () => setConsent('accepted');
  const decline = () => setConsent('declined');

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          We use cookies to improve your experience and analyze site traffic. By clicking &ldquo;Accept&rdquo;, you consent to our use of cookies. See our{' '}
          <Link href="/privacy">Privacy Policy</Link> for more information.
        </p>
        <div className="cookie-banner-actions">
          <button className="cookie-btn-decline" onClick={decline}>Decline</button>
          <button className="cookie-btn-accept" onClick={accept}>Accept</button>
        </div>
      </div>
    </div>
  );
}
