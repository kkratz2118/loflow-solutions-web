'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

declare global {
  interface Window {
    Roam?: {
      initLobbyEmbed: (config: {
        url: string;
        parentElement: HTMLElement;
        prefill?: { name?: string; email?: string; note?: string };
        theme?: 'dark' | 'light';
        lobbyConfiguration?: 'default' | 'booking_only' | 'drop_in_button';
      }) => void;
    };
  }
}

const ROAM_URL = 'https://ro.am/loflow-solutions-llc/lobby-3/';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function RoamEmbed({ firstName, lastName, email, company, phone, tool, message }: {
  firstName: string; lastName: string; email: string; company: string; phone: string; tool: string; message: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;

    const noteParts: string[] = [];
    if (company) noteParts.push(`Company: ${company}`);
    if (phone) noteParts.push(`Phone: ${phone}`);
    if (tool) noteParts.push(`Tool: ${tool}`);
    if (message) noteParts.push(`Message: ${message}`);

    const initEmbed = () => {
      if (!window.Roam || !containerRef.current || initialized.current) return;
      initialized.current = true;
      window.Roam.initLobbyEmbed({
        url: ROAM_URL,
        parentElement: containerRef.current,
        prefill: {
          name: `${firstName} ${lastName}`.trim(),
          email,
          note: noteParts.join(' | '),
        },
        lobbyConfiguration: 'booking_only',
      });
    };

    if (window.Roam) {
      initEmbed();
    } else {
      const script = document.createElement('script');
      script.src = 'https://ro.am/lobbylinks/embed.js';
      script.async = true;
      script.onload = initEmbed;
      document.head.appendChild(script);
    }
  }, [firstName, lastName, email, company, phone, tool, message]);

  return (
    <div className="modal-step active" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h3 style={{ fontFamily: 'var(--font)', fontSize: '1.1rem', margin: '0 0 12px', textAlign: 'center' }}>Pick a time, {firstName}!</h3>
      <div className="modal-iframe-wrap" style={{ flex: 1 }}>
        <div ref={containerRef} id="roam-lobby" style={{ width: '100%', height: '100%', minWidth: '320px' }} />
      </div>
    </div>
  );
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [tool, setTool] = useState('');
  const [message, setMessage] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
    setStep(1);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  const goToStep = (nextStep: number) => {
    if (nextStep === 2) {
      if (!firstName.trim() || !lastName.trim() || !email.trim()) {
        alert('Please fill in all required fields.');
        return;
      }
      const emailInput = document.getElementById('bookingEmail') as HTMLInputElement;
      if (emailInput && !emailInput.validity.valid) {
        alert('Please enter a valid email address.');
        return;
      }
    }

    if (nextStep === 3) {
      if (!agreedToTerms) {
        alert('Please agree to the terms before continuing.');
        return;
      }
      console.log('Booking form data:', { firstName, lastName, email, company, phone, tool, message });
    }

    setStep(nextStep);
  };

  if (!isOpen) return null;

  return (
    <div className="booking-overlay open" onClick={(e) => {
      if ((e.target as HTMLElement).classList.contains('booking-overlay')) handleClose();
    }}>
      <div className={`booking-modal${step === 3 ? ' fullscreen' : ''}`}>
        <div className="modal-header">
          <span className="modal-progress">Step {step} of 3</span>
          <button className="modal-close" onClick={handleClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="modal-body">
          {step === 1 && (
            <div className="modal-step active">
              <h3>Let&apos;s get started</h3>
              <p>Tell us a little about yourself.</p>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingFirstName">First Name</label>
                <input className="form-input" type="text" id="bookingFirstName" placeholder="First name" required value={firstName} onChange={e => setFirstName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingLastName">Last Name</label>
                <input className="form-input" type="text" id="bookingLastName" placeholder="Last name" required value={lastName} onChange={e => setLastName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingEmail">Email</label>
                <input className="form-input" type="email" id="bookingEmail" placeholder="your@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="modal-nav">
                <button className="modal-btn-next" onClick={() => goToStep(2)}>Next</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="modal-step active">
              <h3>About your business</h3>
              <p>Help us understand what you need.</p>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingCompany">Company Name</label>
                <input className="form-input" type="text" id="bookingCompany" placeholder="Your company name" value={company} onChange={e => setCompany(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingPhone">Phone Number</label>
                <input className="form-input" type="tel" id="bookingPhone" placeholder="(555) 123-4567" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingTool">Which tool are you interested in?</label>
                <select className="modal-select" id="bookingTool" value={tool} onChange={e => setTool(e.target.value)}>
                  <option value="" disabled>Select a tool...</option>
                  <option value="Application 01">Application 01</option>
                  <option value="Application 02">Application 02</option>
                  <option value="Application 03">Application 03</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingMessage">What are you looking for help with?</label>
                <textarea className="form-textarea" id="bookingMessage" placeholder="Tell us what you're interested in..." style={{ minHeight: '80px' }} value={message} onChange={e => setMessage(e.target.value)} />
              </div>
              <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '8px' }}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreedToTerms}
                  onChange={e => setAgreedToTerms(e.target.checked)}
                  style={{ marginTop: '4px', accentColor: 'var(--accent)' }}
                />
                <label htmlFor="agreeTerms" style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', cursor: 'pointer', lineHeight: '1.4' }}>
                  I agree to the <a href="/terms" target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Terms of Service</a> and <a href="/privacy" target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Privacy Policy</a>
                </label>
              </div>
              <div className="modal-nav">
                <button className="modal-btn-back" onClick={() => goToStep(1)}>Back</button>
                <button className="modal-btn-next" onClick={() => goToStep(3)} disabled={!agreedToTerms} style={{ opacity: agreedToTerms ? 1 : 0.5, cursor: agreedToTerms ? 'pointer' : 'not-allowed' }}>Connect Me!</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <RoamEmbed
              firstName={firstName}
              lastName={lastName}
              email={email}
              company={company}
              phone={phone}
              tool={tool}
              message={message}
            />
          )}
        </div>
      </div>
    </div>
  );
}
