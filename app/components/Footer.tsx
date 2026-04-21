import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  showSocial?: boolean;
}

export default function Footer({ showSocial = true }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/home" className="footer-logo-link">
          <Image src="/images/loflow-favicon.png" alt="LOFlow Solutions" width={120} height={30} />
        </Link>
        <nav className="footer-nav">
          <Link href="/home#services">Services</Link>
          <Link href="/services/landing-pages">Landing Pages</Link>
          <Link href="/applications">Our Tools</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        {showSocial && (
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100085539895958" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/mortgage_automation" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="mailto:hello@loflowsolutions.com" className="footer-email">hello@loflowsolutions.com</a>
          </div>
        )}
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">EST. 2026 LOFLOW SOLUTIONS LLC | 2108 N ST #11770 SACRAMENTO CA, 95816</p>
      </div>
    </footer>
  );
}
