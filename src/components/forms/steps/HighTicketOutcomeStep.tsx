import React from 'react';
import FormField from '../FormField';

interface HighTicketOutcomeStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function HighTicketOutcomeStep({ data, updateData }: HighTicketOutcomeStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="What Does a Successful Outcome Look Like?"
        name="successOutcome"
        type="textarea"
        value={data.successOutcome || ''}
        onChange={handleChange}
        required
      />
      <p className="text-sm text-gray-500 -mt-4">E.g., "I want a steady funnel of 10-20 new qualified leads/week," or "I want my reps spending 80% less time on admin tasks."</p>

      <FormField
        label="Timeline & Motivation"
        name="timeline"
        type="select"
        value={data.timeline || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select your timeline' },
          { value: 'immediate', label: 'We want to implement advanced automations ASAP—within a month' },
          { value: 'quarter', label: "We're doing initial research; likely want to start in the next 2-3 months" },
          { value: 'exploring', label: 'Just exploring, not fully ready to commit' }
        ]}
      />

      <FormField
        label="Additional Information"
        name="additionalInfo"
        type="textarea"
        value={data.additionalInfo || ''}
        onChange={handleChange}
      />
      <p className="text-sm text-gray-500 -mt-4">We'll craft a high-level strategy before our first call. Is there anything else we should know?</p>

      <p className="mt-6 text-sm text-gray-600">
        We'll respond in 24 hours to book your discovery call. Remember, if we can't complete your CRM + advanced automation setup within 3 weeks, you'll receive a full refund—no questions asked. We look forward to helping you scale!
      </p>
    </div>
  );
}