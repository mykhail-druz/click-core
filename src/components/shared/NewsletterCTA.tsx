import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { FORM_NAMES, getNetlifyFormProps } from '../../utils/formConfig';

interface NewsletterFormData {
  email: string;
  'bot-field'?: string;
}

export default function NewsletterCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>();

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': FORM_NAMES.NEWSLETTER,
          ...data
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for subscribing!');
        reset();
      } else {
        throw new Error('Newsletter subscription failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error subscribing. Please try again.');
    }
  };

  return (
    <section ref={ref} className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Get Exclusive Marketing Insights & Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our newsletter for actionable tips on modern marketing strategies and tools
          </p>
          
          <form 
            {...getNetlifyFormProps(FORM_NAMES.NEWSLETTER)}
            onSubmit={handleSubmit(onSubmit)} 
            className="mt-8"
          >
            <input type="hidden" name="form-name" value={FORM_NAMES.NEWSLETTER} />
            <div hidden>
              <input {...register('bot-field')} />
            </div>

            <div className="flex gap-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Subscribe
              </button>
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </form>
          
          <p className="mt-4 text-sm text-gray-500">
            Get our "Digital Marketing Modernization Guide" free when you subscribe
          </p>
        </motion.div>
      </div>
    </section>
  );
}