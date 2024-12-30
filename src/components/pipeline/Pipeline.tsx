import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import PipelineStage from './PipelineStage';
import { pipelineStages } from '../../constants/pipeline';

export default function Pipeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            How It Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our automated CRM setup streamlines your entire sales process
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4 lg:gap-2">
          {pipelineStages.map((stage, index) => (
            <PipelineStage
              key={stage.title}
              {...stage}
              index={index}
              isLast={index === pipelineStages.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}