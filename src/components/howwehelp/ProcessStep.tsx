import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProcessStepProps {
  step: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
        </svg>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold leading-8 text-gray-900">
          {step.title}
        </h3>
        <p className="mt-2 text-base leading-7 text-gray-600">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}