import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import CustomerProfileStep from './CustomerProfileStep';
import ContactDetailsStep from './ContactDetailsStep';
import { FormData } from '../../types/forms';

export default function TwoStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          'event_category': 'Lead',
          'event_label': `Package: ${data.package}`
        });
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'lead-form',
          ...data,
          addons: data.addons?.join(', ') || ''
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your submission! We will contact you shortly.');
        methods.reset();
        setCurrentStep(1);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const nextStep = () => {
    methods.trigger(['industry', 'location', 'companySize', 'jobTitles']).then((isValid) => {
      if (isValid) {
        if (window.gtag) {
          window.gtag('event', 'step_complete', {
            'event_category': 'Lead Form',
            'event_label': 'Step 1'
          });
        }
        setCurrentStep(2);
      }
    });
  };

  return (
    <section id="get-started" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Started With Your Customized Lead Package
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Tell us about your ideal customer and we'll find the perfect matches.
          </p>
        </div>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            name="lead-form"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <input type="hidden" name="form-name" value="lead-form" />
            <input type="hidden" name="bot-field" />

            <AnimatePresence mode="wait">
              {currentStep === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <CustomerProfileStep onNext={nextStep} />
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactDetailsStep onBack={() => setCurrentStep(1)} />
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}