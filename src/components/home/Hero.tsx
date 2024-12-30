import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HeroProps {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ headline, subtext, ctaText, ctaLink }: HeroProps) {
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
            Your Expert in Developing and Marketing Your Business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From Apps to SaaS to E-commerce, I deliver solutions that generate more revenue, faster. Let's transform your ideas into profit-driving digital solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              {ctaText}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-primary-600">Fast Results</h3>
              <p className="text-gray-600">From concept to revenue in weeks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-primary-600">Proven ROI</h3>
              <p className="text-gray-600">Solutions that drive real growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}