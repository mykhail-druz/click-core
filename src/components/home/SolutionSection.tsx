import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      title: "One Point of Contact, Multiple Solutions",
      description: "No more dealing with five different agencies. I handle everything from marketing strategy to technical implementation."
    },
    {
      title: "Engineering-Backed Problem Solving",
      description: "I apply systematic approaches to overcome obstacles and streamline your operations. Whether it's optimizing your online presence or enhancing your marketing strategies."
    },
    {
      title: "Clear Communication & Consistent Support",
      description: "Regular updates, straightforward answers, and proactive solutions. No tech jargon, no runaround."
    }
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
            Here's How I Help
          </h2>
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}