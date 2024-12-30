import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SuccessStories() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      client: "K1 Outdoors",
      type: "Launch to Success",
      founder: "James W. - Founder",
      challenges: [
        "Starting an e-commerce brand from scratch",
        "Need for comprehensive digital strategy",
        "Complex product launch requirements",
        "Building presence in competitive outdoor market"
      ],
      solutions: [
        "Developed complete e-commerce launch strategy",
        "Created compelling brand identity",
        "Implemented multi-channel marketing approach",
        "Established strong digital foundation"
      ],
      quote: {
        text: "Isaiah helped us transform our vision into reality. His systematic approach to launching our brand made what seemed overwhelming become manageable and successful.",
        author: "James W.",
        role: "Founder, K1 Outdoors"
      }
    },
    {
      client: "Dermillusion Beauty Co.",
      type: "Multi-Channel Growth",
      founder: "Elisha P. - Owner",
      challenges: [
        "Balancing physical and online presence",
        "Need for cohesive digital marketing strategy",
        "Product line development and marketing",
        "Training program digitization"
      ],
      solutions: [
        "Created integrated online/offline strategy",
        "Developed digital product marketing campaigns",
        "Streamlined online booking systems",
        "Expanded digital reach across platforms"
      ],
      quote: {
        text: "Working with Isaiah has been transformative for our business. He helped us create a seamless experience between our in-person services and online presence, significantly growing our digital footprint.",
        author: "Elisha P.",
        role: "Owner, Dermillusion Beauty"
      }
    },
    {
      client: "Healthcare Services Company",
      type: "Lead Generation Pipeline",
      founder: "Healthcare Services",
      challenges: [
        "Need for consistent lead generation",
        "Complex sales cycle management",
        "Healthcare industry compliance requirements",
        "Converting digital leads to consultations"
      ],
      solutions: [
        "Developed targeted lead generation system",
        "Implemented compliant marketing strategies",
        "Created automated follow-up sequences",
        "Optimized conversion pathways"
      ],
      quote: {
        text: "Isaiah built us a lead generation pipeline that not only kickstarted our sales campaigns but continues to sustain our growth. His systematic approach to digital marketing has transformed our patient acquisition process.",
        author: "John D.",
        role: "Director of Operations, Healthcare Services Company"
      }
    },
    {
      client: "Envy Lashes",
      type: "Strategic Ad Management",
      founder: "Amy M. - Founder",
      challenges: [
        "Inconsistent ad performance",
        "Need for strategic campaign management",
        "Targeting ideal customer demographics",
        "Maximizing ad spend ROI"
      ],
      solutions: [
        "Developed targeted ad strategies",
        "Implemented systematic campaign testing",
        "Created data-driven optimization process",
        "Established clear performance metrics"
      ],
      quote: {
        text: "Isaiah's systematic approach to ad management has helped us achieve consistent growth while optimizing our marketing budget. His attention to detail and strategic thinking have been invaluable.",
        author: "Amy M.",
        role: "Founder, Envy Lashes"
      }
    }
  ];

  const valueProps = [
    {
      title: "Engineering-Backed Solutions",
      description: "Every business challenge is approached systematically, finding solutions others miss."
    },
    {
      title: "Industry Versatility",
      description: "From e-commerce to healthcare, we adapt strategies to your specific needs."
    },
    {
      title: "Clear Communication",
      description: "One dedicated point of contact who understands your business inside and out."
    },
    {
      title: "Measurable Results",
      description: "Focus on metrics that matter: growth, engagement, and ROI."
    }
  ];

  const industries = [
    "E-commerce Brands",
    "Healthcare & Medical",
    "Beauty & Wellness",
    "Service-Based Businesses",
    "Professional Services",
    "Retail & Physical Products"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative isolate px-6 pt-14 pb-24 sm:pb-32 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Real Results Across Industries
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how dedicated digital support transforms businesses from e-commerce to healthcare
          </p>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{study.client} - {study.type}</h3>
                  <p className="mt-1 text-sm text-primary-600">{study.founder}</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Challenges:</h4>
                  <ul className="mt-2 space-y-2">
                    {study.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-x-3">
                        <svg className="h-5 w-5 flex-none text-red-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                        <span className="text-sm text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Solutions:</h4>
                  <ul className="mt-2 space-y-2">
                    {study.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-x-3">
                        <svg className="h-5 w-5 flex-none text-primary-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="mt-6 border-t border-gray-100 pt-6">
                  <p className="text-sm italic text-gray-600">"{study.quote.text}"</p>
                  <footer className="mt-3">
                    <p className="text-sm font-semibold text-gray-900">{study.quote.author}</p>
                    <p className="text-sm text-gray-600">{study.quote.role}</p>
                  </footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why These Stories Matter
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{prop.title}</h3>
                <p className="text-sm text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Sectors We've Transformed
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 lg:max-w-none lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-x-3 bg-gray-50 rounded-lg p-4"
              >
                <svg className="h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-900">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ready to Write Your Success Story?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Let's discuss how we can transform your digital presence and accelerate your growth.
            </p>
            <div className="mt-10">
              <a
                href="https://calendly.com/isaiah-clickcore/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Schedule Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}