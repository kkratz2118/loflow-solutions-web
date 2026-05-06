'use client';

import { sendGAEvent } from '@next/third-parties/google';

declare global {
  interface Window {
    fbq?: (
      action: 'init' | 'track' | 'trackCustom' | 'consent',
      ...args: unknown[]
    ) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConsentState = 'accepted' | 'declined' | null;

export const CONSENT_KEY = 'cookie-consent';
export const CONSENT_EVENT = 'cookie-consent-change';
const FBCLID_KEY = 'fbclid';

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(CONSENT_KEY);
  return v === 'accepted' || v === 'declined' ? v : null;
}

type StoredFbclid = { value: string; ts: number };

export function captureFbclidFromUrl(): void {
  if (typeof window === 'undefined') return;
  const fbclid = new URLSearchParams(window.location.search).get('fbclid');
  if (!fbclid) return;
  if (sessionStorage.getItem(FBCLID_KEY)) return;
  const payload: StoredFbclid = { value: fbclid, ts: Date.now() };
  sessionStorage.setItem(FBCLID_KEY, JSON.stringify(payload));
}

export function getStoredFbclid(): StoredFbclid | null {
  if (typeof window === 'undefined') return null;
  const raw = sessionStorage.getItem(FBCLID_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as StoredFbclid;
    if (typeof parsed?.value === 'string' && typeof parsed?.ts === 'number') return parsed;
  } catch {}
  return null;
}

export function ensureFbcCookie(): void {
  if (typeof document === 'undefined') return;
  if (/(?:^|;\s*)_fbc=/.test(document.cookie)) return;
  const stored = getStoredFbclid();
  if (!stored) return;
  const value = `fb.1.${stored.ts}.${stored.value}`;
  const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:';
  document.cookie = `_fbc=${value}; path=/; max-age=7776000; SameSite=Lax${isHttps ? '; Secure' : ''}`;
}

export function generateEventId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

type LeadParams = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  tool?: string;
  value?: number;
  currency?: string;
};

export function trackPageView() {
  if (getConsent() !== 'accepted') return;
  window.fbq?.('track', 'PageView');
}

export function trackLead(eventId: string, params: LeadParams = {}) {
  if (getConsent() !== 'accepted') return;

  const value = params.value ?? 0;
  const currency = params.currency ?? 'USD';

  sendGAEvent('event', 'generate_lead', {
    currency,
    value,
    tool: params.tool,
  });

  window.fbq?.(
    'track',
    'Lead',
    { value, currency, content_name: params.tool },
    { eventID: eventId },
  );
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (getConsent() !== 'accepted') return;
  sendGAEvent('event', name, params);
  window.fbq?.('trackCustom', name, params);
}
