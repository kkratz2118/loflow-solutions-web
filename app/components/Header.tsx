'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onOpenBooking: () => void;
}

const announcement = {
  text: 'DataBuddy — AI-powered pipeline analytics is now in beta!',
  href: '/applications#app-0',
};

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCenter = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (el.offsetHeight / 2);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}${bannerVisible ? ' has-banner' : ''}`} id="top">
      {bannerVisible && (
        <div className="notification-bar">
          <Link href={announcement.href} className="notification-bar-link">
            <span className="notification-bar-badge">NEW</span>
            {announcement.text}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
          <button className="notification-bar-close" onClick={() => setBannerVisible(false)} aria-label="Dismiss">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      )}
      <nav className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/images/loflow-favicon.png" alt="LOFlow Solutions Logo" width={160} height={40} priority />
        </Link>
        <div className="nav-links">
          <a href="/#how-it-works" className="nav-link" onClick={(e) => scrollToCenter(e, 'how-it-works')}>Process</a>
          <a href="/#services" className="nav-link" onClick={(e) => scrollToCenter(e, 'services')}>Services</a>
          <Link href="/applications" className="nav-link">Our Tools</Link>
        </div>
        <button className="nav-cta" onClick={onOpenBooking}>
          <span>Book A Free Call</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        <a href="/#how-it-works" className="mobile-nav-link" onClick={(e) => { scrollToCenter(e, 'how-it-works'); setMobileMenuOpen(false); }}>Process</a>
        <a href="/#services" className="mobile-nav-link" onClick={(e) => { scrollToCenter(e, 'services'); setMobileMenuOpen(false); }}>Services</a>
        <Link href="/applications" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Our Tools</Link>
        <button className="mobile-cta" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>Book A Free Call</button>
      </div>
    </header>
  );
}
