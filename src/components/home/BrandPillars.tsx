import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pillars = [
  {
    title: "Democratized Access",
    description: "Breaking down barriers to deliver enterprise-grade tools for entrepreneurs of all stages."
  },
  {
    title: "AI-Driven Innovation",
    description: "Integrating cutting-edge AI to accelerate learning curves and optimize performance."
  },
  {
    title: "Speed & Efficiency",
    description: "Proven frameworks and rapid deployment systems to get you to market faster."
  },
  {
    title: "Proven Frameworks",
    description: "Battle-tested processes developed from real-world experience and continuous learning."
  },
  {
    title: "Personalized Partnerships",
    description: "Tailored engagements that align with your unique vision and goals."
  }
];

export default function BrandPillars() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Our Core Pillars
          </h2>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}