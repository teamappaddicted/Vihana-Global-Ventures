import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const sheetsScope = ['https://www.googleapis.com/auth/spreadsheets'];

function getSheetsClient() {
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY environment variable.');
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(serviceAccountKey),
    scopes: sheetsScope,
  });

  return google.sheets({ version: 'v4', auth });
}

function getEmailTransporter() {
  const host = process.env.EMAIL_SMTP_HOST;
  const port = process.env.EMAIL_SMTP_PORT ? Number(process.env.EMAIL_SMTP_PORT) : undefined;
  const user = process.env.EMAIL_SMTP_USER;
  const pass = process.env.EMAIL_SMTP_PASS;

  if (!host || !port || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function sendNotificationEmail(payload: Record<string, string>) {
  const transporter = getEmailTransporter();
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM || process.env.EMAIL_SMTP_USER;

  if (!transporter || !to || !from) {
    return;
  }

  await transporter.sendMail({
    from,
    to,
    subject: 'New Contact Form Submission',
    html: `
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Company:</strong> ${payload.company}</p>
      <p><strong>Subject:</strong> ${payload.subject}</p>
      <p><strong>Message:</strong><br/>${payload.message}</p>
    `,
  });
}

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

    const sheetId = process.env.GOOGLE_SHEETS_ID;
    if (!sheetId) {
      throw new Error('Missing GOOGLE_SHEETS_ID environment variable.');
    }

    const sheets = getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:G1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          payload.submittedAt,
          payload.name,
          payload.email,
          payload.phone,
          payload.company,
          payload.subject,
          payload.message,
        ]],
      },
    });

    await sendNotificationEmail(payload);

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
