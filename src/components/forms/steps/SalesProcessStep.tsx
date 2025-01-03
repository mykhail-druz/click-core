import React from 'react';
import FormField from '../FormField';

interface SalesProcessStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function SalesProcessStep({
  data,
  updateData,
}: SalesProcessStepProps) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
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

      <FormField
        label="What's Your Biggest Frustration with Your Current System?"
        name="biggestFrustration"
        type="select"
        value={data.biggestFrustration || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select your biggest frustration' },
          { value: 'losing_leads', label: 'We lose track of leads easily' },
          {
            value: 'inconsistent_followup',
            label: 'Follow-up is inconsistent',
          },
          { value: 'no_crm', label: "We don't have a CRM at all" },
          {
            value: 'messy_process',
            label: 'Everything feels messy and time-consuming',
          },
          { value: 'other', label: 'Other' },
        ]}
      />

      <FormField
        label="Where Do You Feel You're Losing the Most Time Each Week?"
        name="timeWasters"
        type="textarea"
        value={data.timeWasters || ''}
        onChange={handleChange}
        required
      />

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
            label: `${i + 1} - ${i === 0 ? 'Not urgent' : i === 9 ? 'Extremely urgent' : ''}`,
          })),
        ]}
      />
    </div>
  );
}
