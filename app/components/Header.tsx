'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <nav className="nav-inner">
        <Link href="/#top" className="nav-logo">
          <Image src="/images/loflow-favicon.png" alt="LOFlow Solutions Logo" width={160} height={40} priority />
        </Link>
        <div className="nav-links">
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/applications" className="nav-link">Our Tools</Link>
          <Link href="/#how-it-works" className="nav-link">Process</Link>
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
        <Link href="/#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link href="/applications" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Our Tools</Link>
        <Link href="/#how-it-works" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Process</Link>
        <button className="mobile-cta" onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}>Book A Free Call</button>
      </div>
    </header>
  );
}
