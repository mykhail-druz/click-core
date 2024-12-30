import React from 'react';
import FormField from '../FormField';

interface ContactStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function ContactStep({ data, updateData }: ContactStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Name"
        name="name"
        type="text"
        value={data.name || ''}
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
        label="Phone"
        name="phone"
        type="tel"
        value={data.phone || ''}
        onChange={handleChange}
        required
      />
    </div>
  );
}