import React from 'react';
import FormField from '../FormField';

interface HighTicketTechStackStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function HighTicketTechStackStep({ data, updateData }: HighTicketTechStackStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Describe Your Current Sales Tech Stack"
        name="techStack"
        type="textarea"
        value={data.techStack || ''}
        onChange={handleChange}
        required
      />
      <p className="text-sm text-gray-500 -mt-4">Which CRM(s), email marketing tools, or scheduling platforms do you use? Any AI tools in play?</p>

      <FormField
        label="What's the Approximate Monthly Revenue of Your Business?"
        name="monthlyRevenue"
        type="select"
        value={data.monthlyRevenue || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select monthly revenue' },
          { value: 'under10k', label: 'Under $10k' },
          { value: '10k-50k', label: '$10k-$50k' },
          { value: '50k-100k', label: '$50k-$100k' },
          { value: '100kplus', label: '$100k+' }
        ]}
      />
      <p className="text-sm text-gray-500 -mt-4">Just to understand your scale and ensure we can tailor the right solution. Your info stays confidential.</p>

      <FormField
        label="How Many People Are on Your Sales Team?"
        name="teamSize"
        type="number"
        value={data.teamSize || ''}
        onChange={handleChange}
        required
      />
      <p className="text-sm text-gray-500 -mt-4">Include anyone who follows up on leads or closes deals.</p>
    </div>
  );
}