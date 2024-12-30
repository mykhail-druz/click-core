import React from 'react';
import FormField from '../FormField';

interface CompanyStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function CompanyStep({ data, updateData }: CompanyStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <FormField
        label="Company Name"
        name="company"
        type="text"
        value={data.company || ''}
        onChange={handleChange}
        required
      />

      <FormField
        label="Team Size"
        name="teamSize"
        type="select"
        value={data.teamSize || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select team size' },
          { value: '1-5', label: '1-5 employees' },
          { value: '6-20', label: '6-20 employees' },
          { value: '21-50', label: '21-50 employees' },
          { value: '51+', label: '51+ employees' }
        ]}
      />

      <FormField
        label="Current CRM"
        name="currentCRM"
        type="text"
        value={data.currentCRM || ''}
        onChange={handleChange}
      />
    </div>
  );
}