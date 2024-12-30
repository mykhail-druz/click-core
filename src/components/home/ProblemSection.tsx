import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    "You're juggling multiple service providers who don't communicate with each other",
    "You're paying enterprise prices for cookie-cutter solutions",
    "You're spending valuable time figuring out technical details instead of growing your business",
    "You need someone who actually understands your business goals"
  ];

  return (
    <section ref={ref} className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            The Reality For Most Business Owners
          </h2>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-x-3">
                <svg className="h-6 w-5 flex-none text-red-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                <span className="text-lg text-gray-600">{problem}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}