import React from 'react';
import FormField from '../FormField';

interface BasicCRMStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function BasicCRMStep({ data, updateData }: BasicCRMStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="On a Scale of 1-10, How Important Is It for You to Fix This Now?"
        name="urgencyLevel"
        type="select"
        value={data.urgencyLevel || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select urgency level' },
          ...Array.from({ length: 10 }, (_, i) => ({
            value: String(i + 1),
            label: `${i + 1}${i === 0 ? ' - Not urgent' : i === 9 ? ' - Extremely urgent' : ''}`
          }))
        ]}
      />
      <p className="text-sm text-gray-500 -mt-4">This helps us gauge how fast you need a solution.</p>

      <FormField
        label="Any CRM Experience So Far?"
        name="hasCRMExperience"
        type="select"
        value={data.hasCRMExperience || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select your experience' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]}
      />

      {data.hasCRMExperience === 'yes' && (
        <FormField
          label="Tell us about your CRM experience"
          name="crmDetails"
          type="textarea"
          value={data.crmDetails || ''}
          onChange={handleChange}
          required
        />
      )}
      <p className="text-sm text-gray-500 -mt-4">If you're using one (like HubSpot, Zoho, etc.), tell us what's working or not working.</p>
    </div>
  );
}