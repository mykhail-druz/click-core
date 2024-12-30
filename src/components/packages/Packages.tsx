import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PackageCard from './PackageCard';
import { packages } from '../../constants/packages';

export default function Packages() {
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
            Choose Your Perfect Package
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer three tiers of CRM and automation services—so you can pick the level of 
            sophistication and investment that fits your goals.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              package={pkg}
              index={index}
              isPopular={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}