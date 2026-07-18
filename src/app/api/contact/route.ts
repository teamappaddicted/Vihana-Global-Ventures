import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      name: body.name || '',
      email: body.email || '',
      phone: body.phone || '',
      company: body.company || '',
      subject: body.subject || '',
      message: body.message || '',
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Apps Script.');
    }

    return NextResponse.json({ success: true, message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to send your message right now. Please try again later.' },
      { status: 500 }
    );
  }
}
