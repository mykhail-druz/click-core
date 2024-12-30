export interface FormStep {
  id: string;
  title: string;
  description?: string;
  component: React.ComponentType<{
    data: any;
    updateData: (data: any) => void;
  }>;
}

export interface FormData {
  // Contact Details
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  
  // Sales Process
  currentProcess?: string;
  biggestFrustration?: string;
  timeWasters?: string;
  urgencyLevel?: number;
  
  // CRM Experience
  crmExperience?: string;
  crmDetails?: string;
  
  // Goals & Timeline
  successMetrics?: string;
  timeline?: string;
  additionalNotes?: string;
}