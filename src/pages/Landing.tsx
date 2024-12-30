import React from 'react';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Pipeline from '../components/pipeline/Pipeline';
import ProblemStatement from '../components/problem/ProblemStatement';
import Features from '../components/features/Features';
import Packages from '../components/packages/Packages';
import Contact from '../components/contact/Contact';

export default function Landing() {
  return (
    <main className="pt-16">
      <Hero />
      <TechStack />
      <div id="features">
        <Features />
      </div>
      <div id="pipeline">
        <Pipeline />
      </div>
      <ProblemStatement />
      <div id="packages">
        <Packages />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}