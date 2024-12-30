import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What makes ClickCore different from other digital marketing agencies?",
    answer: "Unlike traditional agencies, you work directly with me - a technical expert with an engineering background. This means more personalized attention, faster problem-solving, and solutions tailored specifically to your business needs."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "No. I believe in earning your business every month. All services are offered on a month-to-month basis, giving you the flexibility to adjust or cancel anytime."
  },
  {
    question: "How do you charge for your services?",
    answer: "Pricing is transparent and based on your specific needs and goals. We'll discuss this during your free strategy call to ensure you get exactly what you need within your budget."
  },
  {
    question: "How often will we communicate about progress?",
    answer: "Communication is key. You'll receive regular updates and have direct access to me for questions or concerns. We can set up a communication schedule that works best for you."
  }
];

export default function FAQSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="bg-white rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-4 text-left">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-primary-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}