import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Metric {
  label: string;
  value: string;
}

interface Quote {
  text: string;
  author: string;
  role: string;
}

interface SuccessStoryProps {
  story: {
    title: string;
    description: string;
    metrics: Metric[];
    quote: Quote;
    tags: string[];
  };
  index: number;
}

export default function SuccessStoryCard({ story, index }: SuccessStoryProps) {
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
        <h3 className="text-lg font-semibold leading-8 text-gray-900">
          {story.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-gray-600">
          {story.description}
        </p>
      </div>

      <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {story.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col rounded-lg bg-white px-4 py-3 text-center"
          >
            <dt className="text-sm font-medium leading-6 text-gray-600">
              {metric.label}
            </dt>
            <dd className="text-lg font-semibold leading-6 text-primary-600">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <figure className="mt-8 border-t border-gray-100 pt-6">
        <blockquote className="text-base leading-7 text-gray-600">
          <p>"{story.quote.text}"</p>
        </blockquote>
        <figcaption className="mt-4">
          <div className="font-semibold text-gray-900">{story.quote.author}</div>
          <div className="text-sm text-gray-600">{story.quote.role}</div>
        </figcaption>
      </figure>

      <div className="mt-6 flex flex-wrap gap-2">
        {story.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}