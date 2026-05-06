import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Analytics from './components/Analytics';
import CookieBanner from './components/CookieBanner';
import './globals.css';

const CONSENT_DEFAULT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.loflowsolutions.com'),
  title: 'LOFlow Solutions - Custom Systems for Mortgage Professionals',
  description: 'Custom CRM systems for mortgage professionals. LOFlow builds, customizes & supports CRM solutions for loan officers, brokers & mortgage branches.',
  openGraph: {
    type: 'website',
    title: 'LOFlow Solutions - Custom Systems for Mortgage Professionals',
    description: 'Custom CRM systems for mortgage professionals. LOFlow builds, customizes & supports CRM solutions for loan officers, brokers & mortgage branches.',
    images: ['https://www.loflowsolutions.com/images/preview.image-url.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LOFlow Solutions - Custom Systems for Mortgage Professionals',
    description: 'Custom CRM systems for mortgage professionals. LOFlow builds, customizes & supports CRM solutions for loan officers, brokers & mortgage branches.',
    images: ['https://www.loflowsolutions.com/images/preview.image-url.png'],
  },
  icons: {
    icon: '/images/loflow-favicon.png',
    apple: '/images/loflow-favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT }} />
      </head>
      <body>
        {children}
        <CookieBanner />
        <Analytics />
        <Script src="https://ro.am/lobbylinks/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
