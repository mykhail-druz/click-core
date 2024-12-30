import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PersonaCard from './target-audience/PersonaCard';
import { personas } from '../../constants/personas';

export default function TargetAudience() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Who We Serve</h2>
          <p className="mt-4 text-lg text-gray-600">
            Empowering visionaries at every stage of their entrepreneurial journey
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {personas.map((persona, index) => (
            <PersonaCard key={persona.name} persona={persona} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}