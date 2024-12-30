import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceList from '../components/services/ServiceList';
import ProcessSection from '../components/services/ProcessSection';
import FAQSection from '../components/services/FAQSection';

export default function Services() {
  return (
    <div className="bg-white">
      <ServiceHero />
      <ServiceList />
      <ProcessSection />
      <FAQSection />
      
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
                href="https://calendly.com/isaiah-clickcore/disco"
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