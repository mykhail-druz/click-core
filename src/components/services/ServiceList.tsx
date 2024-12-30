import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';

export default function ServiceList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Custom App Development",
      description: "End-to-end mobile and web application development with expert teams.",
      items: [
        "Custom mobile app development (iOS & Android)",
        "Progressive web applications (PWA)",
        "Enterprise software solutions",
        "API development and integration",
        "Cloud-native applications"
      ]
    },
    {
      title: "Software Solutions",
      description: "Tailored software development to streamline your business operations.",
      items: [
        "Custom software development",
        "Business process automation",
        "Legacy system modernization",
        "Database design and optimization",
        "Third-party integrations"
      ]
    },
    {
      title: "Digital Marketing & Strategy",
      description: "Comprehensive digital marketing solutions with proven results.",
      items: [
        "Custom marketing strategies",
        "Multi-platform campaign management",
        "Content strategy and creation",
        "Analytics and performance tracking",
        "Social media management"
      ]
    },
    {
      title: "Technical Implementation",
      description: "Expert technical solutions backed by a network of specialists.",
      items: [
        "System architecture design",
        "Technical consulting",
        "Development team coordination",
        "Quality assurance",
        "Deployment and maintenance"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Comprehensive Digital Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From custom app development to digital marketing, we bring together expert teams to deliver end-to-end solutions.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}