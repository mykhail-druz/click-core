import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData } from '../../types/forms';

interface ContactDetailsStepProps {
  onBack: () => void;
}

export default function ContactDetailsStep({ onBack }: ContactDetailsStepProps) {
  const { register, formState: { errors, isSubmitting } } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      {/* Previous fields remain the same until package selection */}
      
      <div>
        <label htmlFor="package" className="block text-sm font-medium leading-6 text-gray-900">
          Select Package
        </label>
        <div className="mt-2">
          <select
            id="package"
            {...register('package', { required: 'Package selection is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          >
            <option value="">Choose a Package</option>
            <option value="Starter Pack">Starter Pack - 500 Leads - $127</option>
            <option value="Networker Pack">Networker Pack - 2,500 Leads - $479</option>
            <option value="Connector Pack">Connector Pack - 5,000 Leads - $639</option>
            <option value="Campaign Pack">Campaign Pack - 10,000 Leads - $799</option>
            <option value="Enterprise Pack">Enterprise Pack - 25,000 Leads - $1,679</option>
          </select>
          {errors.package && (
            <p className="mt-2 text-sm text-red-600">{errors.package.message}</p>
          )}
        </div>
      </div>

      {/* Rest of the form remains the same */}
    </div>
  );
}