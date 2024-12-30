import React from 'react';
import SolutionsHero from '../components/solutions/SolutionsHero';
import AIInnovation from '../components/solutions/AIInnovation';
import SpeedEfficiency from '../components/solutions/SpeedEfficiency';
import ProvenFrameworks from '../components/solutions/ProvenFrameworks';

export default function Solutions() {
  return (
    <div className="bg-white">
      <SolutionsHero />
      <AIInnovation />
      <SpeedEfficiency />
      <ProvenFrameworks />
    </div>
  );
}