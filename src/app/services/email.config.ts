import { environment } from '../../environments/environment';

// Email Configuration
// Formspree configuration for contact form (client-side friendly)

export const EMAIL_CONFIG = {
  // Formspree Configuration (Primary - works from client-side)
  FORMSPREE: {
    FORM_ID: environment.email.formspree.formId,
    ENABLED: environment.email.formspree.enabled
  }
};
