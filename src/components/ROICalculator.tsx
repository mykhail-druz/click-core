import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { packages, addons } from '../constants/pricing';
import { calculateMetrics, calculateROI, formatCurrency } from '../utils/calculations';

export default function ROICalculator() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({
    baseOpenRate: 50,
    baseReplyRate: 15,
    enhancedOpenRate: 50,
    enhancedReplyRate: 15,
    conversionRate: 5,
    averageOrderValue: 1000
  });
  const [results, setResults] = useState({
    totalCost: 0,
    potentialRevenue: 0,
    roi: 0,
    conversions: 0
  });

  const handleMetricsChange = (field: 'conversionRate' | 'averageOrderValue', value: string) => {
    const numValue = parseFloat(value) || 0;
    setMetrics(prev => ({
      ...prev,
      [field]: field === 'conversionRate' ? Math.min(Math.max(numValue, 0), 100) : Math.max(numValue, 0)
    }));
  };

  useEffect(() => {
    const enhancedMetrics = calculateMetrics(selectedAddOns);
    setMetrics(prev => ({
      ...prev,
      enhancedOpenRate: enhancedMetrics.openRate,
      enhancedReplyRate: enhancedMetrics.replyRate
    }));
  }, [selectedAddOns]);

  useEffect(() => {
    const totalCost = selectedPackage.price + selectedAddOns.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon ? addon.pricePerLead * selectedPackage.leads : 0);
    }, 0);

    const results = calculateROI({
      leads: selectedPackage.leads,
      cost: totalCost,
      metrics: {
        openRate: metrics.enhancedOpenRate,
        replyRate: metrics.enhancedReplyRate,
        conversionRate: metrics.conversionRate,
        aov: metrics.averageOrderValue
      }
    });

    setResults(results);
  }, [selectedPackage, selectedAddOns, metrics]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-8">
        {/* Package Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Your Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {packages.map((pkg) => (
              <button
                key={pkg.name}
                onClick={() => setSelectedPackage(pkg)}
                className={`p-4 rounded-lg border ${
                  selectedPackage.name === pkg.name
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200'
                }`}
              >
                <h4 className="font-semibold">{pkg.name}</h4>
                <p className="text-sm text-gray-600">{pkg.leads.toLocaleString()} Leads</p>
                <p className="text-primary-600 font-semibold">{formatCurrency(pkg.price)}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Performance Enhancing Add-Ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-medium">{addon.name}</h4>
                  <p className="text-sm text-gray-600">{addon.price}</p>
                  {addon.id === 'research' && (
                    <p className="text-xs text-green-600">+25% Open & Reply rates</p>
                  )}
                  {addon.id === 'instagram' && (
                    <p className="text-xs text-green-600">+10% Open & Reply rates</p>
                  )}
                  {addon.id === 'phone' && (
                    <p className="text-xs text-green-600">+25% Reply rate</p>
                  )}
                  {addon.id === 'email' && (
                    <p className="text-xs text-green-600">+15% Open & Reply rates</p>
                  )}
                </div>
                <Switch
                  checked={selectedAddOns.includes(addon.id)}
                  onChange={(checked) => {
                    setSelectedAddOns(
                      checked
                        ? [...selectedAddOns, addon.id]
                        : selectedAddOns.filter((id) => id !== addon.id)
                    );
                  }}
                  className={`${
                    selectedAddOns.includes(addon.id) ? 'bg-primary-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable {addon.name}</span>
                  <span
                    className={`${
                      selectedAddOns.includes(addon.id) ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Metrics */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Campaign Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Email Open Rate</h4>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Base Rate:</span>
                <span className="font-semibold">{metrics.baseOpenRate}%</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-gray-600">Enhanced Rate:</span>
                <span className="font-semibold text-green-600">
                  {metrics.enhancedOpenRate}%
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Reply Rate</h4>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Base Rate:</span>
                <span className="font-semibold">{metrics.baseReplyRate}%</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-gray-600">Enhanced Rate:</span>
                <span className="font-semibold text-green-600">
                  {metrics.enhancedReplyRate}%
                </span>
              </div>
            </div>
          </div>

          {/* User Adjustable Metrics */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="conversionRate" className="block font-medium mb-2">
                Conversion Rate (%)
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type="number"
                  id="conversionRate"
                  value={metrics.conversionRate}
                  onChange={(e) => handleMetricsChange('conversionRate', e.target.value)}
                  min="0"
                  max="100"
                  step="0.1"
                  className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Enter conversion rate"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Percentage of replies that convert to sales
              </p>
            </div>
            <div>
              <label htmlFor="averageOrderValue" className="block font-medium mb-2">
                Average Order Value
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="averageOrderValue"
                  value={metrics.averageOrderValue}
                  onChange={(e) => handleMetricsChange('averageOrderValue', e.target.value)}
                  min="0"
                  step="100"
                  className="block w-full rounded-md border-gray-300 pl-7 pr-3 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Enter average order value"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Average revenue per successful conversion
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Projected Campaign Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-sm text-gray-600">Total Investment</h4>
              <p className="text-2xl font-bold text-primary-600">
                {formatCurrency(results.totalCost)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-sm text-gray-600">Expected Conversions</h4>
              <p className="text-2xl font-bold text-blue-600">
                {results.conversions.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-sm text-gray-600">Potential Revenue</h4>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(results.potentialRevenue)}
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-sm text-gray-600">ROI</h4>
              <p className="text-2xl font-bold text-indigo-600">
                {(results.roi * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}