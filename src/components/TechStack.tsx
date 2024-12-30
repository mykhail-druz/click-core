import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  { name: 'n8n', logo: '/images/partners/n8n.svg' },
  { name: 'Attio', logo: '/images/partners/attio.svg' },
  { name: 'HubSpot', logo: '/images/partners/hubspot.svg' },
  { name: 'Go High Level', logo: '/images/partners/gohighlevel.svg' },
  { name: 'Google', logo: '/images/partners/google.svg' },
  { name: 'VoiceFlow', logo: '/images/partners/voiceflow.svg' },
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-lg font-semibold text-gray-600">
            Powered by Best-In-Class Tools & Integrations
          </p>
          <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div key={partner.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  className="max-h-12 w-full object-contain"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}