'use client';

import Image from 'next/image';

const logos = [
  { src: '/images/bonzo-logo.png', alt: 'Bonzo' },
  { src: '/images/data-buddy-logo.jpeg', alt: 'Data Buddy' },
  { src: '/images/zapier.png', alt: 'Zapier' },
  { src: '/images/n8n-logo.png', alt: 'n8n' },
  { src: '/images/lendingpad-logo.webp', alt: 'LendingPad' },
  { src: '/images/arive-logo.jpg', alt: 'ARIVE' },
];

export default function Carousel() {
  return (
    <div className="trusted-section">
      <div className="text-center">
        <div className="section-tag">TOOLS WE CAN INTEGRATE WITH</div>
        <p className="trusted-sub">Software and apps we integrate to streamline your workflow</p>
      </div>
      <div className="trusted-marquee-wrap">
        <div className="trusted-marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <div className="trusted-logo" key={i}>
              <Image src={logo.src} alt={logo.alt} fill sizes="180px" style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
