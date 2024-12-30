import React from 'react';
import FormField from '../FormField';

interface HighTicketContactStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function HighTicketContactStep({ data, updateData }: HighTicketContactStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">
        This form lets us dive deeper into the challenges you're facing. Our High Ticket Package covers advanced automations, multi-channel outreach, and serious pipeline oversight.
      </p>

      <FormField
        label="Name & Role"
        name="nameAndRole"
        type="text"
        value={data.nameAndRole || ''}
        onChange={handleChange}
        required
      />

      <FormField
        label="Company Name"
        name="companyName"
        type="text"
        value={data.companyName || ''}
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
        label="Best Phone Number"
        name="phone"
        type="tel"
        value={data.phone || ''}
        onChange={handleChange}
      />
    </div>
  );
}