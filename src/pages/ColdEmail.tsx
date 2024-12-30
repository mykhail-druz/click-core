import React from 'react';
import { motion } from 'framer-motion';

export default function ColdEmail() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cold Email Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Coming Soon
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}