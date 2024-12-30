import { addons } from '../constants/pricing';

interface Metrics {
  openRate: number;
  replyRate: number;
  conversionRate: number;
  aov: number;
}

interface ROICalculationParams {
  leads: number;
  cost: number;
  metrics: Metrics;
}

export const calculateMetrics = (selectedAddons: string[]) => {
  let openRateMultiplier = 1;
  let replyRateMultiplier = 1;

  selectedAddons.forEach(addonId => {
    switch (addonId) {
      case 'research':
        openRateMultiplier *= 1.25;
        replyRateMultiplier *= 1.25;
        break;
      case 'instagram':
        openRateMultiplier *= 1.10;
        replyRateMultiplier *= 1.10;
        break;
      case 'phone':
        replyRateMultiplier *= 1.25;
        break;
      case 'email':
        openRateMultiplier *= 1.15;
        replyRateMultiplier *= 1.15;
        break;
    }
  });

  return {
    openRate: Math.min(Math.round(50 * openRateMultiplier), 100),
    replyRate: Math.min(Math.round(15 * replyRateMultiplier), 100)
  };
};

export const calculateROI = ({ leads, cost, metrics }: ROICalculationParams) => {
  const opens = Math.round((leads * metrics.openRate) / 100);
  const replies = Math.round((opens * metrics.replyRate) / 100);
  const conversions = Math.round((replies * metrics.conversionRate) / 100);
  const potentialRevenue = conversions * metrics.aov;
  const roi = (potentialRevenue - cost) / cost;

  return {
    totalCost: cost,
    potentialRevenue,
    roi,
    conversions
  };
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};