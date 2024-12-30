import React from 'react';
import FormField from '../FormField';

interface BasicContactStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function BasicContactStep({ data, updateData }: BasicContactStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">
        This brief questionnaire helps us understand where you are in your sales journey and how our Basic Package can make a dramatic difference.
      </p>

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