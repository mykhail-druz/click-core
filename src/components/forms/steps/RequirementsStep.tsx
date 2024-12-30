import React from 'react';
import FormField from '../FormField';

interface RequirementsStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function RequirementsStep({ data, updateData }: RequirementsStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Project Requirements"
        name="requirements"
        type="textarea"
        value={data.requirements || ''}
        onChange={handleChange}
        required
      />

      <FormField
        label="Timeline"
        name="timeline"
        type="select"
        value={data.timeline || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select timeline' },
          { value: 'immediate', label: 'Immediate (1-2 months)' },
          { value: 'quarter', label: 'This Quarter' },
          { value: 'sixmonths', label: 'Next 6 Months' },
          { value: 'year', label: 'This Year' }
        ]}
      />

      <FormField
        label="Additional Notes"
        name="notes"
        type="textarea"
        value={data.notes || ''}
        onChange={handleChange}
      />
    </div>
  );
}