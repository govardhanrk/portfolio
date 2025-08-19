import { Injectable } from '@angular/core';
import { EMAIL_CONFIG } from './email.config';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  constructor() {}

  async sendContactEmail(formData: ContactFormData): Promise<boolean> {
    try {
      // Use Formspree for email sending
      const response = await fetch(`https://formspree.io/f/${EMAIL_CONFIG.FORMSPREE.FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully via Formspree');
        return true;
      } else {
        console.error('Failed to send email via Formspree:', response.status, response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error sending email via Formspree:', error);
      return false;
    }
  }

  // Check if email service is configured
  isEmailServiceConfigured(): boolean {
    return EMAIL_CONFIG.FORMSPREE.ENABLED && !!EMAIL_CONFIG.FORMSPREE.FORM_ID;
  }
}
