import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

const BREVO_FORM_ACTION_URL =
  'https://3a63b53b.sibforms.com/serve/MUIFAHk5FiOTahhsv8ze2CDiOlE8pI1Wd9J29O1eWxvqc2vkKwM7Wse0nysLbPaJUG1sp3zN6V9CbvVH3FHlOIcOnAVjZPm1Byyvu_lbdR_nTQqySKxp9gVSdIcNmYj5A4p9RVZ9ajs0kzjMVrBu-rbYOO7kaazuR4ugymBnmibgvwNoARhMTFjvErVN22kN7S-bulOH-gJ7uuiWTA==';

function isValidEmail(value) {
  const email = (value || '').replace(/\s+/g, ' ').trim();
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(value) {
  const digits = (value || '').replace(/\D+/g, '');
  return digits.length === 7 || digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
}

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    setStatus('');

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('email_address_check', '');
    formData.append('locale', 'en');

    try {
      await fetch(BREVO_FORM_ACTION_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setStatus("Hooray! You're now on the Kencha House list for cozy playdates, tiny adventures, and all things giggles and cuddles!");
      setEmail('');
    } catch {
      setStatus('Subscription failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 px-6 py-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-stone-400"
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="w-full bg-primary text-white px-8 py-4 uppercase text-[10px] tracking-[0.2em] hover:opacity-90 transition-opacity disabled:opacity-60"
        type="submit"
        disabled={submitting}
      >
        {submitting ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status && (
        <p className="text-xs text-stone-500 dark:text-stone-400" aria-live="polite">{status}</p>
      )}
    </form>
  );
}

const PARTY_BREVO_CONFIG = {
  formActionUrl: BREVO_FORM_ACTION_URL,
  successMessage: 'Thank you for your inquiry. Our team will reach out to you within one business day.',
  errorMessage: 'Our party inquiry form is temporarily unavailable. Please email us at kenchahouse@gmail.com.',
  backupEmail: {
    to: 'kenchahouse@gmail.com',
    subject: 'Kencha House Party Inquiry',
    sourcePage: 'parties',
  },
};

const STUDIO_BREVO_CONFIG = {
  formActionUrl: BREVO_FORM_ACTION_URL,
  successMessage: 'Thank you for your inquiry. Our team will reach out to you within one business day.',
  errorMessage: 'Our studio inquiry form is temporarily unavailable. Please email us at kenchahouse@gmail.com.',
  backupEmail: {
    to: 'kenchahouse@gmail.com',
    subject: 'Kencha House Studio Inquiry',
    sourcePage: 'studio',
  },
};

export const INQUIRY_CONFIGS = {
  partyInquiry: PARTY_BREVO_CONFIG,
  studioInquiry: STUDIO_BREVO_CONFIG,
};

export function InquiryForm({ configKey, placeholder }) {
  const config = INQUIRY_CONFIGS[configKey];
  const [fields, setFields] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(fields.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    if (fields.phone && !isValidPhone(fields.phone)) {
      setStatus('Please enter a valid phone number.');
      return;
    }
    setSubmitting(true);
    setStatus('');

    // Send backup email via FormSubmit.co
    const backupFormData = new FormData();
    backupFormData.append('_to', config.backupEmail.to);
    backupFormData.append('_subject', config.backupEmail.subject);
    backupFormData.append('_source', config.backupEmail.sourcePage);
    backupFormData.append('First Name', fields.firstName);
    backupFormData.append('Last Name', fields.lastName);
    backupFormData.append('Email', fields.email);
    backupFormData.append('Phone', fields.phone);
    backupFormData.append('Message', fields.message);

    try {
      await fetch(`https://formsubmit.co/ajax/${config.backupEmail.to}`, {
        method: 'POST',
        body: backupFormData,
        mode: 'no-cors',
      });
      setStatus(config.successMessage);
      setFields({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch {
      setStatus(config.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-stone-400">First Name</label>
          <input
            className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
            name="firstName"
            placeholder="Jane"
            required
            type="text"
            value={fields.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-stone-400">Last Name</label>
          <input
            className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
            name="lastName"
            placeholder="Doe"
            required
            type="text"
            value={fields.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-stone-400">Email Address</label>
          <input
            className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
            name="email"
            placeholder="jane@example.com"
            required
            type="email"
            value={fields.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-stone-400">Phone</label>
          <input
            className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
            name="phone"
            placeholder="(xxx) xxx-xxxx"
            required
            type="tel"
            value={fields.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-stone-400">Your Inquiry</label>
        <textarea
          className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
          name="message"
          placeholder={placeholder}
          required
          rows={4}
          value={fields.message}
          onChange={handleChange}
        />
      </div>
      <button
        className="w-full bg-primary text-white py-4 uppercase text-xs tracking-[0.2em] hover:opacity-90 transition-opacity disabled:opacity-60"
        type="submit"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
      {status && (
        <p className="text-xs text-stone-500 dark:text-stone-400" aria-live="polite">{status}</p>
      )}
    </form>
  );
}
