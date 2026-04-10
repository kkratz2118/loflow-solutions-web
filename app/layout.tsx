import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://loflowsolutions-new.vercel.app'),
  title: 'LOFlow Solutions - Custom CRM Systems for Mortgage Professionals',
  description: 'Custom CRM systems for mortgage professionals. LOFlow builds, customizes & supports CRM solutions for loan officers, brokers & mortgage branches.',
  openGraph: {
    type: 'website',
    title: 'LOFlow Solutions - Custom CRM Systems for Mortgage Professionals',
    description: 'Custom CRM systems for mortgage professionals. LOFlow builds, customizes & supports CRM solutions for loan officers, brokers & mortgage branches.',
    images: ['https://loflowsolutions-new.vercel.app/images/preview.image-url.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LOFlow Solutions - Custom CRM Systems for Mortgage Professionals',
    description: 'Custom CRM systems for mortgage professionals. LOFlow builds, customizes & supports CRM solutions for loan officers, brokers & mortgage branches.',
    images: ['https://loflowsolutions-new.vercel.app/images/preview.image-url.png'],
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
      <body>
        {children}
        <Script src="https://ro.am/lobbylinks/embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
