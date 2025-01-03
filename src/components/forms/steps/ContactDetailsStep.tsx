import React from 'react';
import FormField from '../FormField';

interface ContactDetailsStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function ContactDetailsStep({
  data,
  updateData,
}: ContactDetailsStepProps) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">
        Tell Us About You & Your Business
      </h3>

      <FormField
        label="Name"
        name="name"
        type="text"
        value={data.name || ''}
        onChange={handleChange}
        required
      />

      <FormField
        label="Business Name"
        name="businessName"
        type="text"
        value={data.businessName || ''}
        onChange={handleChange}
        required
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={data.email || ''}
        onChange={handleChange}
        required
      />

      <FormField
        label="Phone (Optional)"
        name="phone"
        type="tel"
        value={data.phone || ''}
        onChange={handleChange}
      />
    </div>
  );
}
