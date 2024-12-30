import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Turn Digital Chaos Into Business Growth - Without The Enterprise Price Tag
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get a dedicated digital expert who understands your business, solves your problems, and helps you scale - all while you focus on what you do best.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://calendly.com/isaiah-clickcore/disco"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Schedule Your Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}