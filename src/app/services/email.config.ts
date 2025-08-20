import { environment } from '../../environments/environment';

export const EMAIL_CONFIG = {
  FORMSPREE: {
    FORM_ID: environment.email.formspree.formId,
    ENABLED: environment.email.formspree.enabled
  }
};
