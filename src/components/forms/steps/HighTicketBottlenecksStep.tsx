import React from 'react';
import FormField from '../FormField';

interface HighTicketBottlenecksStepProps {
  data: any;
  updateData: (data: any) => void;
}

export default function HighTicketBottlenecksStep({ data, updateData }: HighTicketBottlenecksStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  const bottlenecks = [
    'qualify_leads', "We can't qualify leads fast enough",
    'personalization', "Our follow-ups aren't personalized",
    'scheduling', "Scheduling demos/meetings is messy",
    'proposals', "Proposals take too long to create",
    'pipeline_data', "Our pipeline data is scattered or inaccurate",
    'closing', "We're losing deals at the last minute"
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold leading-6 text-gray-900 mb-2">
          Where Do You Feel the Biggest Bottleneck Is Happening?
        </label>
        <div className="space-y-3">
          {bottlenecks.map((bottleneck, index) => (
            index % 2 === 0 && (
              <div key={bottleneck} className="flex items-start">
                <input
                  type="checkbox"
                  id={bottleneck}
                  name="bottlenecks"
                  value={bottleneck}
                  checked={data.bottlenecks?.includes(bottleneck)}
                  onChange={(e) => {
                    const value = e.target.value;
                    const currentBottlenecks = data.bottlenecks || [];
                    const newBottlenecks = e.target.checked
                      ? [...currentBottlenecks, value]
                      : currentBottlenecks.filter((b: string) => b !== value);
                    updateData({ bottlenecks: newBottlenecks });
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600 mt-1"
                />
                <label htmlFor={bottleneck} className="ml-3 text-sm text-gray-600">
                  {bottlenecks[index + 1]}
                </label>
              </div>
            )
          ))}
        </div>
      </div>

      <FormField
        label="What Would You Love to Automate or Improve First?"
        name="automationPriorities"
        type="textarea"
        value={data.automationPriorities || ''}
        onChange={handleChange}
        required
      />
      <p className="text-sm text-gray-500 -mt-4">For instance, AI-based lead scoring, personalized outreach sequences, or better post-sales follow-ups.</p>

      <FormField
        label="Are You Currently Tracking the Source of Each Lead?"
        name="leadTracking"
        type="select"
        value={data.leadTracking || ''}
        onChange={handleChange}
        required
        options={[
          { value: '', label: 'Select an option' },
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]}
      />

      {data.leadTracking && (
        <FormField
          label={data.leadTracking === 'yes' ? 'Which attribution tools do you use?' : 'How do you see us helping with lead tracking?'}
          name="leadTrackingDetails"
          type="textarea"
          value={data.leadTrackingDetails || ''}
          onChange={handleChange}
          required
        />
      )}
    </div>
  );
}