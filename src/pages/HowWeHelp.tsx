import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowWeHelp() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    "Wasting time managing multiple freelancers and agencies",
    "Paying enterprise prices for cookie-cutter solutions",
    "Getting lost in technical details instead of running your business",
    "Struggling with inconsistent communication across time zones",
    "Missing opportunities because you can't be everywhere at once"
  ];

  const solutions = [
    {
      title: "Single Point of Contact",
      description: "No more juggling multiple providers or dealing with overseas teams. Work directly with me—an engineer turned digital expert who understands your business goals and speaks your language."
    },
    {
      title: "Custom Growth Strategy",
      description: "Whether you're selling horse grooming tools or recipe cards, I help you find the right platforms and strategies for YOUR specific business. No one-size-fits-all approaches."
    },
    {
      title: "Technical Problem-Solving",
      description: "With my engineering background, I systematically solve problems others miss. From platform optimization to marketing strategy, I handle the complex details so you don't have to."
    }
  ];

  const process = [
    {
      title: "Discovery",
      items: [
        "Deep dive into your business goals and challenges",
        "Analyze current digital presence and opportunities",
        "Identify quick wins and long-term strategies"
      ]
    },
    {
      title: "Strategy Development",
      items: [
        "Create custom digital roadmap",
        "Select optimal platforms and channels",
        "Design marketing and growth plans"
      ]
    },
    {
      title: "Implementation",
      items: [
        "Handle technical setup and optimization",
        "Manage marketing campaigns",
        "Monitor performance and adjust strategies"
      ]
    },
    {
      title: "Ongoing Support",
      items: [
        "Regular strategy calls",
        "Performance updates",
        "Proactive problem-solving"
      ]
    }
  ];

  const services = [
    {
      title: "Platform Strategy & Management",
      items: [
        "E-commerce platform selection and setup",
        "Multi-channel selling strategy",
        "Inventory and listing management"
      ]
    },
    {
      title: "Digital Marketing",
      items: [
        "Social media advertising",
        "Google Ads management",
        "Pinterest marketing",
        "Content strategy"
      ]
    },
    {
      title: "Technical Solutions",
      items: [
        "Website optimization",
        "Systems integration",
        "Process automation",
        "Analytics setup"
      ]
    },
    {
      title: "Growth Consulting",
      items: [
        "Market research",
        "Competitor analysis",
        "Business strategy",
        "Performance tracking"
      ]
    }
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
            From Digital Chaos to Clarity: Your Personal Digital Assistant
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stop juggling multiple service providers and technical headaches. Get a dedicated expert who handles everything while you focus on growth.
          </p>
        </div>
      </motion.section>

      {/* Problem Statement */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              The Reality for Most Business Owners
            </h2>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-x-3">
                  <svg className="h-6 w-5 flex-none text-red-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                  <span className="text-lg text-gray-600">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
              Here's How I Transform Your Digital Presence
            </h2>
            <div className="space-y-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How We Work Together
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="absolute top-4 left-full w-full h-0.5 bg-primary-100 hidden lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <span className="text-lg font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Your Digital Growth Partner
            </h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-x-3">
                      <svg className="h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Book a free strategy call. Let's discuss your business goals and create a plan to achieve them.
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