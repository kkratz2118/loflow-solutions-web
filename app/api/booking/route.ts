import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json();

  const { first_name, last_name, email, company, phone, tool, message, agreed_to_terms } = body;

  if (!first_name || !last_name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('booking_submissions')
    .insert([{ first_name, last_name, email, company, phone, tool: tool || 'Not specified', message, agreed_to_terms }])
    .select();

  if (error) {
    console.error('Supabase insert error:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data[0].id });
}
