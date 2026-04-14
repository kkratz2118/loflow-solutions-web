'use client';

import { useState, useEffect, useCallback } from 'react';
import { APP_NAMES } from '../data/apps';

const ROAM_URL = 'https://ro.am/loflow-solutions-llc/lobby-3/';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTool?: string;
  toolOptions?: string[];
}

export default function BookingModal({ isOpen, onClose, defaultTool = '', toolOptions }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [tool, setTool] = useState(defaultTool);
  const [message, setMessage] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTermsWarning, setShowTermsWarning] = useState(false);

  useEffect(() => {
    setTool(defaultTool);
  }, [defaultTool]);

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
        setShowTermsWarning(true);
        setTimeout(() => setShowTermsWarning(false), 3000);
        return;
      }
      setShowTermsWarning(false);

      fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          company: company || null,
          phone: phone || null,
          tool,
          message: message || null,
          agreed_to_terms: agreedToTerms,
        }),
      })
        .then((res) => {
          if (res && !res.ok) console.error('Booking API error:', res.status);
        })
        .catch((err) => console.error('Failed to save booking:', err));
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
                <button className="modal-btn-next" onClick={() => goToStep(2)}>Next: Tell Us About Your Business</button>
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
                  {(toolOptions ?? [...APP_NAMES]).map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="bookingMessage">What are you looking for help with?</label>
                <textarea className="form-textarea" id="bookingMessage" placeholder="Tell us what you're interested in..." style={{ minHeight: '80px' }} value={message} onChange={e => setMessage(e.target.value)} />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginTop: '8px', whiteSpace: 'nowrap' }}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreedToTerms}
                  onChange={e => setAgreedToTerms(e.target.checked)}
                  style={{ accentColor: 'var(--accent)', flexShrink: 0 }}
                />
                <label htmlFor="agreeTerms" style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', cursor: 'pointer' }}>
                  I agree to the <a href="/terms" target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Terms of Service</a> and <a href="/privacy" target="_blank" rel="noopener" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Privacy Policy</a>
                </label>
              </div>
              {showTermsWarning && (
                <p style={{ fontSize: '0.78rem', color: '#ef4444', margin: '0 0 8px', textAlign: 'center' }}>
                  Please agree to the terms before continuing.
                </p>
              )}
              <div className="modal-nav">
                <button className="modal-btn-back" onClick={() => goToStep(1)}>Back</button>
                <button className="modal-btn-next" onClick={() => goToStep(3)} style={{ opacity: agreedToTerms ? 1 : 0.5, cursor: agreedToTerms ? 'pointer' : 'not-allowed' }}>Connect Me!</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="modal-step active" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontFamily: 'var(--font)', fontSize: '1.1rem', margin: '0 0 12px', textAlign: 'center' }}>Pick a time, {firstName}!</h3>
              <div className="modal-iframe-wrap" style={{ flex: 1 }}>
                <iframe
                  src={`${ROAM_URL}?name=${encodeURIComponent(firstName + ' ' + lastName)}&email=${encodeURIComponent(email)}${company ? '&company=' + encodeURIComponent(company) : ''}${phone ? '&phone=' + encodeURIComponent(phone) : ''}`}
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                  title="Book a meeting"
                  allow="camera; microphone"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
