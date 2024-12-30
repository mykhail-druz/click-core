import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData } from '../../types/forms';

interface CustomerProfileStepProps {
  onNext: () => void;
}

export default function CustomerProfileStep({ onNext }: CustomerProfileStepProps) {
  const { register, formState: { errors } } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold leading-7 text-gray-900">
          Step 1: Describe Your Ideal Customer
        </h3>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Please provide details about your target audience so we can tailor the leads to your needs.
        </p>
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium leading-6 text-gray-900">
          Industry
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="industry"
            {...register('industry', { required: 'Industry is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          {errors.industry && (
            <p className="mt-2 text-sm text-red-600">{errors.industry.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
          Location
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="location"
            {...register('location', { required: 'Location is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          {errors.location && (
            <p className="mt-2 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="companySize" className="block text-sm font-medium leading-6 text-gray-900">
          Company Size
        </label>
        <div className="mt-2">
          <select
            id="companySize"
            {...register('companySize', { required: 'Company size is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          >
            <option value="">Select Company Size</option>
            <option value="1-10">1-10 Employees</option>
            <option value="11-50">11-50 Employees</option>
            <option value="51-200">51-200 Employees</option>
            <option value="201-500">201-500 Employees</option>
            <option value="501-1000">501-1000 Employees</option>
            <option value="1001+">1001+ Employees</option>
          </select>
          {errors.companySize && (
            <p className="mt-2 text-sm text-red-600">{errors.companySize.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="jobTitles" className="block text-sm font-medium leading-6 text-gray-900">
          Job Titles
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="jobTitles"
            {...register('jobTitles', { required: 'Job titles are required' })}
            placeholder="e.g., CEO, Marketing Manager"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          {errors.jobTitles && (
            <p className="mt-2 text-sm text-red-600">{errors.jobTitles.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={onNext}
          className="w-full rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          Next: Contact Details
        </button>
      </div>
    </div>
  );
}