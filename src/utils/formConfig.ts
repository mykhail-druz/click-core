// Form configuration for Netlify
export const FORM_NAMES = {
  CONTACT: 'contact-form',
  LEAD: 'lead-form',
  NEWSLETTER: 'newsletter-form'
} as const;

export const getNetlifyFormProps = (formName: string) => ({
  'data-netlify': 'true',
  'netlify-honeypot': 'bot-field',
  name: formName,
  method: 'POST',
});