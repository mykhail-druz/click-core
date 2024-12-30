import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  package: string;
  'bot-field'?: string;
};

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = async (data: FormData) => {
    try {
      window.gtag?.('event', 'form_submit', {
        'event_category': 'Contact',
        'event_label': 'Lead Form'
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...data
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your submission!');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Started Today</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Ready to transform your lead generation? Let's talk about your needs.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" {...register('bot-field')} />
            
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  {...register('name', { required: true })}
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">Name is required</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">Valid email is required</p>}
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  {...register('company', { required: true })}
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.company && <p className="mt-2 text-sm text-red-600">Company is required</p>}
              </div>
            </div>

            <div>
              <label htmlFor="package" className="block text-sm font-semibold leading-6 text-gray-900">
                Package
              </label>
              <div className="mt-2.5">
                <select
                  {...register('package', { required: true })}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select a package</option>
                  <option value="starter">Starter Pack - 500 Leads ($127)</option>
                  <option value="growth">Growth Pack - 2,500 Leads ($479)</option>
                  <option value="scale">Scale Pack - 5,000 Leads ($639)</option>
                  <option value="enterprise">Enterprise Pack - 10,000 Leads ($799)</option>
                  <option value="custom">Custom Pack - 25,000 Leads ($1,679)</option>
                </select>
                {errors.package && <p className="mt-2 text-sm text-red-600">Please select a package</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">Message is required</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}