import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  options?: Option[];
}

export default function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  options
}: FormFieldProps) {
  const baseClasses = "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6";

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2.5">
        {type === 'textarea' ? (
          <textarea
            name={name}
            id={name}
            rows={4}
            value={value}
            onChange={onChange}
            required={required}
            className={baseClasses}
          />
        ) : type === 'select' ? (
          <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className={baseClasses}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            required={required}
            className={baseClasses}
          />
        )}
      </div>
    </div>
  );
}