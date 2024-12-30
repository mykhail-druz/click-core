import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    items: string[];
    testimonial?: {
      quote: string;
      author: string;
    };
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200"
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900">
          {service.title}
        </h3>
        <p className="mt-4 text-base text-gray-600">
          {service.description}
        </p>
      </div>

      <ul className="mt-8 space-y-3">
        {service.items.map((item, itemIndex) => (
          <li key={itemIndex} className="flex items-start gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-primary-600 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      {service.testimonial && (
        <blockquote className="mt-8 border-t border-gray-100 pt-6">
          <p className="text-sm italic text-gray-600">"{service.testimonial.quote}"</p>
          <footer className="mt-3">
            <p className="text-sm font-semibold text-gray-900">{service.testimonial.author}</p>
          </footer>
        </blockquote>
      )}

      <div className="mt-8">
        <a
          href="https://calendly.com/isaiah-clickcore/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
        >
          Schedule a Free Strategy Call <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.div>
  );
}