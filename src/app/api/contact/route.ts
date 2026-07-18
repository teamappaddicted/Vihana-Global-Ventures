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

    const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!endpoint) {
      throw new Error('Missing GOOGLE_APPS_SCRIPT_URL environment variable.');
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const responseText = await response.text();
      throw new Error(`Google Apps Script returned ${response.status} ${response.statusText}: ${responseText}`);
    }

    return NextResponse.json({ success: true, message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Contact API error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
