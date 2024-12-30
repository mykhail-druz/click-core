import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../components/forms/ContactForm';

export default function GetStarted() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's Grow Your Business Together
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-xl">
          <ContactForm />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            Prefer to reach out directly?
          </h3>
          <div className="mt-6 space-y-4">
            <p className="text-gray-600">
              Email: <a href="mailto:info@clickcore.com" className="text-primary-600 hover:text-primary-500">info@clickcore.com</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:+15551234567" className="text-primary-600 hover:text-primary-500">(555) 123-4567</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}