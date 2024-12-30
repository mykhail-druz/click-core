import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function IntroSection() {
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
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Hey, I'm <span className="text-primary-600">Isaiah</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I help entrepreneurs and business owners navigate the digital landscape without getting lost in the technical weeds. After years of engineering massive infrastructure projects, I realized something: businesses need someone who can solve complex problems AND understand their unique challenges.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            That's why I created ClickCore.
          </p>
        </motion.div>
      </div>
    </section>
  );
}