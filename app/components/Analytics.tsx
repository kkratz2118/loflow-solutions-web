'use client';

import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';
import {
  CONSENT_EVENT,
  captureFbclidFromUrl,
  ensureFbcCookie,
  getConsent,
  type ConsentState,
} from '../lib/analytics';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    setConsent(getConsent());
    captureFbclidFromUrl();
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ConsentState>).detail;
      setConsent(detail);
    };
    window.addEventListener(CONSENT_EVENT, handler as EventListener);
    return () => window.removeEventListener(CONSENT_EVENT, handler as EventListener);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;
    const granted = consent === 'accepted' ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      ad_storage: granted,
      analytics_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    });
  }, [consent]);

  useEffect(() => {
    if (consent !== 'accepted') return;
    ensureFbcCookie();
    if (window.fbq) window.fbq('track', 'PageView');
  }, [consent]);

  return (
    <>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

      {META_PIXEL_ID && consent === 'accepted' && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
