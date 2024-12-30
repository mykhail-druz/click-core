import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServiceHero() {
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
            Digital Solutions That Drive Real Growth
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From strategy to execution, get the expert support you need to thrive in the digital landscape.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://calendly.com/isaiah-clickcore/disco"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Schedule Your Free Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}