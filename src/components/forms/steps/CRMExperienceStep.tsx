import React from 'react';
import FormField from '../FormField';

interface CRMExperienceStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function CRMExperienceStep({
  data,
  updateData,
}: CRMExperienceStepProps) {
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
        label="Do You Have Any CRM Experience?"
        name="crmExperience"
        type="select"
        value={data.crmExperience || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select your experience' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ]}
      />

      {data.crmExperience === 'yes' && (
        <FormField
          label="Tell us about your current CRM setup"
          name="crmDetails"
          type="textarea"
          value={data.crmDetails || ''}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );
}
