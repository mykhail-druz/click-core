import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';

interface FormStep {
  id: string;
  title: string;
  component: React.ComponentType<{
    data: any;
    updateData: (data: any) => void;
  }>;
}

interface MultiStepFormProps {
  steps: FormStep[];
  initialData: any;
  onSubmit: (data: any) => Promise<void>;
  formName: string;
  formAction: string;
}

export default function MultiStepForm({ steps, initialData, onSubmit, formName, formAction  }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const updateData = (newData: any) => {
    setFormData({ ...formData, ...newData });
  };

  const handleBack = () => {
    if (currentStep === 0) {
      navigate('/#packages');
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Encode form data for Netlify
    const encodedData = Object.entries(formData).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        return { ...acc, [key]: value.join(', ') };
      }
      return { ...acc, [key]: String(value) };
    }, {});

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': formName,
          ...encodedData
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your submission! We will contact you shortly.');
        navigate('/#packages');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="bot-field" />
      
      {/* Hidden inputs for all form fields */}
      {Object.entries(formData).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value?.toString() || ''} />
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
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index <= currentStep ? 'bg-primary-600 text-white' : 'bg-gray-200'
              }`}>
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${
                  index < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                }`} />
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
          <CurrentStepComponent
            data={formData}
            updateData={updateData}
          />
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