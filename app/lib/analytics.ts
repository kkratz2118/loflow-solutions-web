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

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(CONSENT_KEY);
  return v === 'accepted' || v === 'declined' ? v : null;
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
