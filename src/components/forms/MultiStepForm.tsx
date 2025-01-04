import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FormStep {
  id: string;
  title: string;
  component: React.ComponentType<{
    data: any;
    updateData: (data: any) => void;
  }>;
  validation?: (data: any) => boolean;
}

interface MultiStepFormProps {
  steps: FormStep[];
  initialData: any;
  formName: string;
}

export default function MultiStepForm({
  steps,
  initialData,
  formName,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const updateData = (newData: any) => {
    const updatedFormData = { ...formData, ...newData };
    setFormData(updatedFormData);
  };

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/#packages');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const stepValidation = steps[currentStep]?.validation;

    if (stepValidation) {
      const isValid = stepValidation(formData);

      if (!isValid) {
        alert('Please fill in all required fields before proceeding.');
        return;
      }
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        return [key, Array.isArray(value) ? value[0] : value];
      })
    );

    console.log('Final cleaned data:', cleanedData);

    const form = e.currentTarget;
    Object.entries(cleanedData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value?.toString() || '';
      form.appendChild(input);
    });

    form.submit();
  };

  const CurrentStepComponent = steps[currentStep].component;

  // Preprocess formData to ensure uniqueness before rendering hidden inputs
  const uniqueFormData = Object.fromEntries(
    Object.entries(formData).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : value,
    ])
  );

  return (
    <form
      name={formName}
      method="POST"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-8"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="bot-field" />

      {/* Render hidden inputs */}
      {Object.entries(uniqueFormData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value || ''} />
      ))}

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${
                index === steps.length - 1 ? '' : 'flex-1'
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  index <= currentStep
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    index < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
        </div>
      </div>

      {/* Form step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <CurrentStepComponent data={formData} updateData={updateData} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={handleBack}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          {currentStep === 0 ? 'Back to Pricing' : 'Back'}
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-500"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-500"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
