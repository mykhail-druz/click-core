import React from 'react';
import FormField from '../FormField';

interface BasicSalesProcessStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function BasicSalesProcessStep({ data, updateData }: BasicSalesProcessStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Briefly Describe Your Current Sales Process"
        name="currentProcess"
        type="textarea"
        value={data.currentProcess || ''}
        onChange={handleChange}
        required
      />
      <p className="text-sm text-gray-500 -mt-4">For example, do you track leads in a spreadsheet? Are you following up manually? The more detail, the better.</p>

      <FormField
        label="What's Your Biggest Frustration with Your Current System?"
        name="biggestFrustration"
        type="select"
        value={data.biggestFrustration || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select your biggest frustration' },
          { value: 'lose_leads', label: 'We lose track of leads easily' },
          { value: 'inconsistent', label: 'Follow-up is inconsistent' },
          { value: 'no_crm', label: "We don't have a CRM at all" },
          { value: 'messy', label: 'Everything feels messy and time-consuming' },
          { value: 'other', label: 'Other' }
        ]}
      />

      {data.biggestFrustration === 'other' && (
        <FormField
          label="Please specify your biggest frustration"
          name="otherFrustration"
          type="text"
          value={data.otherFrustration || ''}
          onChange={handleChange}
          required
        />
      )}

      <FormField
        label="Where Do You Feel You're Losing the Most Time Each Week?"
        name="timeWasters"
        type="textarea"
        value={data.timeWasters || ''}
        onChange={handleChange}
        required
      />
      <p className="text-sm text-gray-500 -mt-4">Is it chasing invoices, writing proposals, or remembering to follow up with prospects? Let us know!</p>
    </div>
  );
}