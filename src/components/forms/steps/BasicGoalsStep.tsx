import React from 'react';
import FormField from '../FormField';

interface BasicGoalsStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function BasicGoalsStep({ data, updateData }: BasicGoalsStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="What Does Success Look Like for You in the Next 3 Months?"
        name="successMetrics"
        type="textarea"
        value={data.successMetrics || ''}
        onChange={handleChange}
        required
      />
      <p className="text-sm text-gray-500 -mt-4">Fewer manual tasks? Seeing all leads in one place? More consistent follow-ups? Help us understand your goals.</p>

      <FormField
        label="When Would You Like to Get Started?"
        name="timeline"
        type="select"
        value={data.timeline || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select your preferred timeline' },
          { value: 'asap', label: 'ASAP - Ready to start!' },
          { value: '2-4weeks', label: 'Next 2-4 weeks' },
          { value: '1-2months', label: 'Within 1-2 months' }
        ]}
      />

      <p className="mt-6 text-sm text-gray-600">
        We'll follow up within one business day to schedule an intro call. Remember, we guarantee your CRM setup within 3 weeks or your money back. Let's get you moving!
      </p>
    </div>
  );
}