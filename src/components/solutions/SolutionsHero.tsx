import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SolutionsHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI-Powered Solutions for Digital Success
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your business with cutting-edge technology and proven frameworks that deliver results in record time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://calendly.com/isaiah-clickcore/disco"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}