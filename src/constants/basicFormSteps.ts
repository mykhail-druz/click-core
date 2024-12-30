import { FormStep } from '../types/forms';
import BasicContactStep from '../components/forms/steps/BasicContactStep';
import BasicSalesProcessStep from '../components/forms/steps/BasicSalesProcessStep';
import BasicCRMStep from '../components/forms/steps/BasicCRMStep';
import BasicGoalsStep from '../components/forms/steps/BasicGoalsStep';

export const basicFormSteps: FormStep[] = [
  {
    id: 'contact',
    title: 'Tell Us About You & Your Business',
    component: BasicContactStep
  },
  {
    id: 'process',
    title: 'Your Current Sales Process',
    component: BasicSalesProcessStep
  },
  {
    id: 'crm',
    title: 'CRM Experience',
    component: BasicCRMStep
  },
  {
    id: 'goals',
    title: 'Goals & Timeline',
    component: BasicGoalsStep
  }
];