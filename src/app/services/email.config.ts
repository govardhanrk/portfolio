import { environment } from '../../environments/environment';

console.log('🔧 Loading email configuration...');
console.log('📦 Environment:', environment);

// Email Configuration
// Formspree configuration for contact form (client-side friendly)

export const EMAIL_CONFIG = {
  // Formspree Configuration (Primary - works from client-side)
  FORMSPREE: {
    FORM_ID: environment.email.formspree.formId,
    ENABLED: environment.email.formspree.enabled
  }
};

console.log('✅ Email config loaded:', EMAIL_CONFIG);
