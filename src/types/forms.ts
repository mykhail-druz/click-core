export interface FormStep {
  id: string;
  title: string;
  description?: string;
  component: React.ComponentType<{
    data: FormData;
    updateData: (data: FormData) => void;
  }>;
  validation?: (data: Record<string, any>) => boolean;
}


export interface FormData {
  // Contact Details
  name: string;
  email: string;
  phone?: string;
  businessName: string;
  package: string
  
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

  // Two-step form
  addons?: string[]
  industry?: string;
  location?: string;
  companySize: string;
  jobTitles: string[];

  // Index signature that allows to index by string signatures
  [key: string]: string | string[] | number | undefined;
}