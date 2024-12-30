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
      className="relative"
    >
      {index < 3 && (
        <div className="absolute top-4 left-full w-full h-0.5 bg-primary-100 hidden lg:block" />
      )}
      <div className="relative flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
          </svg>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
}