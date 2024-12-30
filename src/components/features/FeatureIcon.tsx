import React from 'react';

interface FeatureIconProps {
  icon: string;
}

export default function FeatureIcon({ icon }: FeatureIconProps) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
      <svg
        className="h-6 w-6 text-primary-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </div>
  );
}