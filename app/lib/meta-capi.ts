import { createHash } from 'crypto';

const CAPI_VERSION = 'v21.0';

type LeadEvent = {
  eventName: 'Lead' | 'Schedule' | 'Contact' | 'CompleteRegistration';
  eventId: string;
  eventSourceUrl?: string;
  user: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    ipAddress?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
  };
  custom?: {
    value?: number;
    currency?: string;
    contentName?: string;
  };
};

const sha256 = (v: string) => createHash('sha256').update(v.trim().toLowerCase()).digest('hex');

const normalizePhone = (phone: string) => phone.replace(/\D/g, '');

export async function sendCAPIEvent(event: LeadEvent): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) return;

  const userData: Record<string, string | string[]> = {};
  if (event.user.email) userData.em = sha256(event.user.email);
  if (event.user.phone) userData.ph = sha256(normalizePhone(event.user.phone));
  if (event.user.firstName) userData.fn = sha256(event.user.firstName);
  if (event.user.lastName) userData.ln = sha256(event.user.lastName);
  if (event.user.ipAddress) userData.client_ip_address = event.user.ipAddress;
  if (event.user.userAgent) userData.client_user_agent = event.user.userAgent;
  if (event.user.fbp) userData.fbp = event.user.fbp;
  if (event.user.fbc) userData.fbc = event.user.fbc;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: 'website',
        event_source_url: event.eventSourceUrl,
        user_data: userData,
        custom_data: {
          value: event.custom?.value ?? 0,
          currency: event.custom?.currency ?? 'USD',
          content_name: event.custom?.contentName,
        },
      },
    ],
  };

  if (process.env.META_CAPI_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_CAPI_TEST_EVENT_CODE;
  }

  const url = `https://graph.facebook.com/${CAPI_VERSION}/${pixelId}/events?access_token=${accessToken}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error('Meta CAPI error:', res.status, body);
    }
  } catch (err) {
    console.error('Meta CAPI request failed:', err);
  }
}
