import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PurposeStatement from './purpose/PurposeStatement';
import MissionStatement from './purpose/MissionStatement';
import VisionStatement from './purpose/VisionStatement';

export default function Purpose() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl space-y-16"
        >
          <PurposeStatement />
          <MissionStatement />
          <VisionStatement />
        </motion.div>
      </div>
    </section>
  );
}