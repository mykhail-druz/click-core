import React from 'react';
import MultiStepForm from '../../components/forms/MultiStepForm';
import {highTicketFormSteps} from '../../constants/formSteps';
import {highTicketFormData} from '../../constants/formData';

export default function HighTicketPackageForm() {
  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'high-ticket-package',
          ...data
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your submission! We will contact you shortly.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            High Ticket Package Application
          </h1>
          <p className="mt-4 text-lg text-gray-600 mb-8">
            Scale your business with our comprehensive High Ticket Package
          </p>
          
          <MultiStepForm
            steps={highTicketFormSteps}
            initialData={highTicketFormData}
            onSubmit={handleSubmit}
            formName="high-ticket-package"
          />
        </div>
      </div>
    </div>
  );
}