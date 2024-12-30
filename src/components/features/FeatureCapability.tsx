import React from 'react';

interface FeatureCapabilityProps {
  capability: string;
}

export default function FeatureCapability({ capability }: FeatureCapabilityProps) {
  return (
    <li className="flex items-start gap-x-3">
      <svg
        className="h-5 w-5 flex-none text-primary-600 mt-0.5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-sm text-gray-600">{capability}</span>
    </li>
  );
}