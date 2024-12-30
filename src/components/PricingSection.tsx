import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      name: 'Starter Pack',
      leads: 500,
      price: 127,
      pricePerLead: 0.254,
      description: 'Kickstart your outreach with quality leads tailored to your niche.',
      features: [
        'Highly targeted leads',
        'Comprehensive contact information',
        '95% accuracy guarantee',
        'Delivery within 7 days',
      ],
    },
    {
      name: 'Networker Pack',
      leads: 2500,
      price: 479,
      pricePerLead: 0.1916,
      description: 'Scale your sales efforts and dominate your market sector.',
      features: [
        'All Starter Pack features',
        'Enhanced data enrichment',
        'Priority support',
        'Save 25% per lead',
      ],
      popular: true,
    },
    {
      name: 'Connector Pack',
      leads: 5000,
      price: 639,
      pricePerLead: 0.1278,
      description: 'Maximize your sales potential with a larger lead volume.',
      features: [
        'All Growth Pack features',
        'Advanced lead scoring',
        'Custom research insights',
        'Save 50% per lead',
      ],
      bestValue: true,
    },
    {
      name: 'Campaign Pack',
      leads: 10000,
      price: 799,
      pricePerLead: 0.0799,
      description: 'Optimal for enterprises seeking vast outreach capabilities.',
      features: [
        'All Scale Pack features',
        'Dedicated account manager',
        'Custom integration support',
        'Save 68% per lead',
      ],
    },
    {
      name: 'Enterprise Pack',
      leads: 25000,
      price: 1679,
      pricePerLead: 0.06716,
      description: 'For larger quantities, contact us for custom pricing.',
      features: [
        'All Enterprise Pack features',
        'Quarterly strategy sessions',
        'Custom API access',
        'Save 74% per lead',
      ],
    },
  ];

  return (
    <section ref={ref} id="pricing" className="py-24 bg-gray-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Perfect Package
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Select the package that best fits your needs and start generating high-quality leads today.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border ${
                pkg.popular ? 'border-secondary-500' : pkg.bestValue ? 'border-primary-500' : 'border-gray-200'
              } p-8 shadow-sm`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary-500 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}
              {pkg.bestValue && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-sm font-semibold text-white">
                  Best Value
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
              <p className="mt-4 text-sm text-gray-600">{pkg.description}</p>
              <div className="mt-6">
                <p className="flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${pkg.price}</span>
                  <span className="text-sm text-gray-600">
                    (${pkg.pricePerLead.toFixed(4)} per lead)
                  </span>
                </p>
                <p className="mt-1 text-sm text-gray-600">{pkg.leads.toLocaleString()} Premium Leads</p>
              </div>
              <ul className="mt-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${pkg.popular ? 'text-secondary-500' : pkg.bestValue ? 'text-primary-500' : 'text-gray-500'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm leading-6 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm ${
                  pkg.popular
                    ? 'bg-secondary-500 hover:bg-secondary-400'
                    : pkg.bestValue
                    ? 'bg-primary-600 hover:bg-primary-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              >
                Get Started Today
              </a>
            </div>
          ))}
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-lg font-semibold text-gray-900">All Packages Include:</h3>
          <ul className="mt-4 text-sm text-gray-600 space-y-2">
            <li>• Highly targeted leads based on your evolving ideal customer persona</li>
            <li>• Comprehensive information: Name, Company, Job Title, Email, Company Phone Number</li>
            <li>• Enhanced data: Company size, Contact's LinkedIn, Organization's Facebook, LinkedIn, and Twitter</li>
            <li>• 95% Data accuracy guarantee</li>
            <li>• Delivery within 7 business days</li>
            <li>• Personalized attention from a dedicated lead generation expert</li>
          </ul>
        </div>
      </div>
    </section>
  );
}