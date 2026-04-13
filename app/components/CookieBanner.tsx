'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

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
