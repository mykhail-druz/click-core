import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutIsaiah() {
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
            Meet Isaiah Carleton
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your dedicated digital marketing partner
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-gray-50 p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src="/images/isaiah-placeholder.jpg"
                    alt="Isaiah Carleton"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hi, I'm Isaiah</h3>
                <p className="text-gray-600 mb-6">
                  With a passion for helping entrepreneurs bring their ideas to life, I started ClickCore to provide affordable, hands-on digital marketing support. I love connecting with people, learning about their journeys, and finding ways to make their marketing efforts easier and more effective.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">My Approach</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-x-3">
                        <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Collaborative: Think of me as your marketing guy—here to handle the tech stuff</span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Transparent: No jargon, no smoke and mirrors</span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Flexible: Month-to-month partnerships with no strings attached</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Ready to Work Together?
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let's discuss how we can help you achieve your marketing goals.
            </p>
            <div className="mt-10">
              <a
                href="/get-started"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}