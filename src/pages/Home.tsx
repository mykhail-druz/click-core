import React from 'react';
import Hero from '../components/home/Hero';
import Purpose from '../components/home/Purpose';
import ValueProposition from '../components/home/ValueProposition';
import BrandPillars from '../components/home/BrandPillars';
import NewsletterCTA from '../components/shared/NewsletterCTA';
import TargetAudience from '../components/home/TargetAudience';

export default function Home() {
  return (
    <div>
      <Hero 
        headline="Stay Ahead of the Digital Curve Without the Enterprise Price Tag"
        subtext="Modernize your marketing with AI-powered tools and expert guidance—designed for established businesses ready to scale"
        ctaText="Book Your Strategy Session"
        ctaLink="https://calendly.com/isaiah-clickcore/disco"
      />
      
      <Purpose />
      <ValueProposition />
      <BrandPillars />
      <TargetAudience />
      <NewsletterCTA />
    </div>
  );
}