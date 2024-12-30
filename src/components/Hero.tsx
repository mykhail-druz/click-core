import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Automate Your Sales. Accelerate Your Growth.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Click Core builds you a custom CRM and sales pipeline that cuts out the busywork, 
            so you and your team can focus on closing deals—instead of wrestling with spreadsheets 
            or manual follow-ups.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Get Your CRM in 3 Weeks—Guaranteed
            </a>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-center gap-x-3">
                <svg className="h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Save 20–40 hours per week by eliminating repetitive sales tasks</span>
              </li>
              <li className="flex items-center gap-x-3">
                <svg className="h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">In-depth AI and automation features, customized to your needs</span>
              </li>
              <li className="flex items-center gap-x-3">
                <svg className="h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">One-time setup fee + optional monthly roadmap for continuous improvement</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}