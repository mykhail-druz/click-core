import { FormStep } from '../types/forms';
import ContactDetailsStep from '../components/forms/steps/ContactDetailsStep';
import SalesProcessStep from '../components/forms/steps/SalesProcessStep';
import CRMExperienceStep from '../components/forms/steps/CRMExperienceStep';
import GoalsTimelineStep from '../components/forms/steps/GoalsTimelineStep';

export const basicFormSteps: FormStep[] = [
  {
    id: 'contact',
    title: 'Tell Us About You & Your Business',
    description:
      'This brief questionnaire helps us understand where you are in your sales journey and how our Basic Package can make a dramatic difference.',
    component: ContactDetailsStep,
    validation: (data) => !!data.name && !!data.businessName && !!data.email,
  },
  {
    id: 'process',
    title: 'Your Current Sales Process',
    description: 'Help us understand your current workflow and challenges.',
    component: SalesProcessStep,
    validation: (data) =>
      !!data.currentProcess &&
      !!data.biggestFrustration &&
      !!data.timeWasters &&
      !!data.urgencyLevel,
  },
  {
    id: 'crm',
    title: 'CRM Experience',
    description: 'Tell us about your experience with CRM systems.',
    component: CRMExperienceStep,
    validation: (data) => {
      if (!data.crmExperience) {
        return false;
      }
      if (data.crmExperience === 'yes') {
        return !!data.crmDetails;
      }
      return true;
    },
  },
  {
    id: 'goals',
    title: 'Goals & Timeline',
    description: 'Let us align on your objectives and preferred timeline.',
    component: GoalsTimelineStep,
    validation: (data) => !!data.successMetrics && !!data.timeline,
  },
];

export const highTicketFormSteps: FormStep[] = [
  {
    id: 'contact',
    title: 'Your Contact Details',
    description: 'Tell us about yourself and your company.',
    component: ContactDetailsStep,
    validation: (data) => !!data.name && !!data.businessName && !!data.email,
  },
  {
    id: 'tech',
    title: 'Current Tech Stack',
    description: 'Help us understand your existing tools and systems.',
    component: SalesProcessStep,
    validation: (data) =>
      !!data.currentProcess &&
      !!data.biggestFrustration &&
      !!data.timeWasters &&
      !!data.urgencyLevel,
  },
  {
    id: 'needs',
    title: 'Business Needs',
    description: 'Share your specific requirements and challenges.',
    component: CRMExperienceStep,
    validation: (data) => {
      if (!data.crmExperience) {
        return false;
      }
      if (data.crmExperience === 'yes') {
        return !!data.crmDetails;
      }
      return true;
    },
  },
  {
    id: 'goals',
    title: 'Goals & Timeline',
    description: 'Define your success metrics and preferred timeline.',
    component: GoalsTimelineStep,
    validation: (data) => !!data.successMetrics && !!data.timeline,
  },
];

export const customFormSteps: FormStep[] = [
  {
    id: 'contact',
    title: 'Key Contact & Company Info',
    description: 'Tell us about your organization.',
    component: ContactDetailsStep,
    validation: (data) => !!data.name && !!data.businessName && !!data.email,
  },
  {
    id: 'tech',
    title: 'Current Tech Stack',
    description: 'Share your existing tools and infrastructure.',
    component: SalesProcessStep,
    validation: (data) =>
      !!data.currentProcess &&
      !!data.biggestFrustration &&
      !!data.timeWasters &&
      !!data.urgencyLevel,
  },
  {
    id: 'requirements',
    title: 'Enterprise Requirements',
    description: 'Detail your specific needs and compliance requirements.',
    component: CRMExperienceStep,
    validation: (data) => {
      if (!data.crmExperience) {
        return false;
      }
      if (data.crmExperience === 'yes') {
        return !!data.crmDetails;
      }
      return true;
    },
  },
  {
    id: 'goals',
    title: 'Goals & Investment',
    description: 'Define your success metrics and investment comfort level.',
    component: GoalsTimelineStep,
    validation: (data) => !!data.successMetrics && !!data.timeline,
  },
];
