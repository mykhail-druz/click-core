import { FormStep } from '../types/forms';
import HighTicketContactStep from '../components/forms/steps/HighTicketContactStep';
import HighTicketTechStackStep from '../components/forms/steps/HighTicketTechStackStep';
import HighTicketBottlenecksStep from '../components/forms/steps/HighTicketBottlenecksStep';
import HighTicketOutcomeStep from '../components/forms/steps/HighTicketOutcomeStep';

export const highTicketFormSteps: FormStep[] = [
  {
    id: 'contact',
    title: 'Your Contact Details',
    description: 'Tell us about yourself and your company.',
    component: HighTicketContactStep
  },
  {
    id: 'tech-stack',
    title: 'Current Tech Stack',
    description: 'Help us understand your existing tools and systems.',
    component: HighTicketTechStackStep
  },
  {
    id: 'bottlenecks',
    title: 'Current Bottlenecks',
    description: 'Identify where your sales process needs improvement.',
    component: HighTicketBottlenecksStep
  },
  {
    id: 'outcome',
    title: 'Desired Outcome',
    description: 'Define what success looks like for your business.',
    component: HighTicketOutcomeStep
  }
];