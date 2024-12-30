import React from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../../types/features';
import FeatureIcon from './FeatureIcon';
import FeatureCapability from './FeatureCapability';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-50 rounded-lg p-8 h-full flex flex-col"
    >
      <FeatureIcon icon={feature.icon} />
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
      <ul className="mt-4 space-y-2 flex-grow">
        {feature.capabilities.map((capability, i) => (
          <FeatureCapability key={i} capability={capability} />
        ))}
      </ul>
    </motion.div>
  );
}