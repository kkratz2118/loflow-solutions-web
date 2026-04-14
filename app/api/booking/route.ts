import { NextResponse } from 'next/server';

const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/upsert';

export async function POST(request: Request) {
  const body = await request.json();

  const { first_name, last_name, email, company, phone, tool, message, agreed_to_terms } = body;

  if (!first_name || !last_name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const ghlBody: Record<string, unknown> = {
    firstName: first_name,
    lastName: last_name,
    email,
    locationId: process.env.GHL_LOCATION_ID,
    tags: ['website_lead', tool || 'Not specified'],
    source: 'LOFlow Website',
  };

  if (company) ghlBody.companyName = company;
  if (phone) ghlBody.phone = phone;

  // Store the message and terms agreement in custom fields or notes
  const notes: string[] = [];
  if (tool) notes.push(`Tool interest: ${tool}`);
  if (message) notes.push(`Message: ${message}`);
  if (agreed_to_terms) notes.push('Agreed to terms: Yes');

  // GHL doesn't have a direct "notes" field on create, so we can add it via customFields
  // For now, we combine tool + message into tags for visibility
  if (message) {
    ghlBody.tags = [...(ghlBody.tags as string[]), 'Has Message'];
  }

  try {
    const response = await fetch(GHL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GHL_API_KEY}`,
        Version: '2021-07-28',
      },
      body: JSON.stringify(ghlBody),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('GHL API error:', response.status, errorData);
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, id: data.contact?.id });
  } catch (err) {
    console.error('GHL API request failed:', err);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
}
