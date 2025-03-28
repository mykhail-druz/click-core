import React, { useState } from 'react';
import FormField from './FormField';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    package: '',
    message: '',
  });

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={() => {
        alert('Thank you for your message. We will get back to you soon!');
      }}
      className="space-y-6"
      action="/"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <FormField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <FormField
        label="Company"
        name="company"
        type="text"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        required
      />

      <FormField
        label="Package"
        name="package"
        type="select"
        value={formData.package}
        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
        required
        options={[
          { value: '', label: 'Select a package' },
          { value: 'basic', label: 'Basic Package - $2,000' },
          { value: 'high-ticket', label: 'High Ticket Package - $5,000' },
          { value: 'custom', label: 'To-The-Moon Package - Custom Quote' },
        ]}
      />

      <FormField
        label="Message"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />

      <button
        type="submit"
        className="w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      >
        Send Message
      </button>
    </form>
  );
}
