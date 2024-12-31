import React from 'react';
import {motion} from 'framer-motion';
import {Package} from '../../types/packages';

interface PackageCardProps {
  package: Package;
  index: number;
  isPopular: boolean;
}

export default function PackageCard({ package: pkg, index, isPopular }: PackageCardProps) {
  const getFormUrl = () => {
    switch (pkg.name) {
      case "Basic Package":
        return "/forms/basic";
      case "High Ticket Package":
        return "/forms/high-ticket";
      case "To-The-Moon Package":
        return "/forms/custom";
      default:
        return "#contact";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 shadow-sm flex flex-col h-full ${
        isPopular ? 'border-2 border-primary-500 -mt-4 bg-white pb-12' : 'border border-gray-200 bg-white'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold text-white">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
        <p className="mt-4 text-sm text-gray-600">{pkg.description}</p>
        <p className="mt-6">
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            {typeof pkg.price === 'number' ? `$${pkg.price.toLocaleString()}` : 'Custom'}
          </span>
          {typeof pkg.price === 'number' && (
            <span className="text-sm font-semibold text-gray-600"> one-time setup</span>
          )}
        </p>
      </div>

      <ul className="mb-8 space-y-3 flex-grow">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-x-3">
            <svg
              className={`h-6 w-5 flex-none ${isPopular ? 'text-primary-600' : 'text-gray-600'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a
          href={getFormUrl()}
          className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${
            isPopular
              ? 'bg-primary-600 hover:bg-primary-500'
              : 'bg-gray-600 hover:bg-gray-500'
          }`}
        >
          {pkg.price === 'custom' ? 'Request Custom Quote' : 'Get Started'}
        </a>
        {typeof pkg.price === 'number' && (
          <p className="mt-4 text-xs text-center text-gray-500">
            Optional $499/mo support & maintenance available
          </p>
        )}
      </div>
    </motion.div>
  );
}