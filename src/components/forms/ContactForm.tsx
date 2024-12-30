import React from 'react';
import { useForm } from 'react-hook-form';
import { FORM_NAMES, getNetlifyFormProps } from '../../utils/formConfig';

interface FormData {
  name: string;
  email: string;
  businessName: string;
  description: string;
  preferredContact: string;
  'bot-field'?: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          'event_category': 'Contact',
          'event_label': 'Get Started Form'
        });
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': FORM_NAMES.CONTACT,
          ...data
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your submission! We will contact you shortly.');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <form 
      {...getNetlifyFormProps(FORM_NAMES.CONTACT)}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={FORM_NAMES.CONTACT} />
      <div hidden>
        <input {...register('bot-field')} />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2">
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-medium leading-6 text-gray-900">
          Business Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'Business name is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          {errors.businessName && (
            <p className="mt-2 text-sm text-red-600">{errors.businessName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
          Brief Description of Your Needs
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            rows={4}
            {...register('description', { required: 'Description is required' })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          {errors.description && (
            <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >
          Submit
        </button>
        <a
          href="https://calendly.com/isaiah-clickcore/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md bg-secondary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 text-center"
        >
          Schedule a Call
        </a>
      </div>
    </form>
  );
}