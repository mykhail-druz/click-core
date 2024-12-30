import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
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
            Meet Your Digital Growth Partner
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bridging the gap between vision and technical execution
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl bg-gray-50 p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="flex justify-start">
                <div className="w-[85%] lg:w-[85%] aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://www.dropbox.com/scl/fi/cu877pmhsgnycqedllq34/circular_cropped_image.png?rlkey=kxangrat58fehogomde6kpobj&raw=1"
                    alt="Solutions Engineer"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions-Driven Leadership</h3>
                <p className="text-gray-600 mb-6">
                  As a solutions engineer and marketing strategist with over a decade of experience, I've built a network of elite designers, developers, and marketing experts. Together, we bring enterprise-grade solutions to growing businesses, combining technical expertise with strategic marketing insight.
                </p>
                <p className="text-gray-600 mb-6">
                  My team and I specialize in transforming complex technical challenges into streamlined solutions that drive real business growth. By leveraging our collective expertise, we deliver comprehensive digital strategies that would typically require multiple agencies or a full in-house team.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Our Approach</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-x-3">
                        <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Full-stack expertise across design, development, and marketing</span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Vetted network of specialized professionals</span>
                      </li>
                      <li className="flex items-center gap-x-3">
                        <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Results-driven implementation and strategy</span>
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
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Let's discuss how our team can help you achieve your business goals.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/isaiah-clickcore/disco"
                target="_blank"
                rel="noopener noreferrer"
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