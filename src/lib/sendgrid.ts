import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize SendGrid with API key
const SENDGRID_API_KEY = process.env.VITE_SENDGRID_API_KEY;
const FROM_EMAIL = process.env.VITE_FROM_EMAIL || 'your-verified-sender@example.com';
const TO_EMAIL = process.env.VITE_TO_EMAIL || 'your-email@example.com';

if (!SENDGRID_API_KEY) {
  console.warn('SendGrid API key is not set. Email functionality will not work.');
}

sgMail.setApiKey(SENDGRID_API_KEY);

export async function sendEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!SENDGRID_API_KEY) {
    throw new Error('SendGrid API key is not configured');
  }

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    replyTo: data.email,
    subject: `Portfolio Contact: ${data.subject}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('SendGrid Error:', error);
    throw error;
  }
} 