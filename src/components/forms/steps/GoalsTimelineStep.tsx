import React from 'react';
import FormField from '../FormField';

interface GoalsTimelineStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function GoalsTimelineStep({
  data,
  updateData,
}: GoalsTimelineStepProps) {
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
        label="What Does Success Look Like for You in the Next 3 Months?"
        name="successMetrics"
        type="textarea"
        value={data.successMetrics || ''}
        onChange={handleChange}
        required
      />

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
          { value: '1-2months', label: 'Within 1-2 months' },
        ]}
      />

      <FormField
        label="Additional Notes (Optional)"
        name="additionalNotes"
        type="textarea"
        value={data.additionalNotes || ''}
        onChange={handleChange}
      />
    </div>
  );
}
