import React from 'react';

interface StageIconProps {
  icon: string;
}

export default function StageIcon({ icon }: StageIconProps) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
      <svg
        className="h-6 w-6"
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