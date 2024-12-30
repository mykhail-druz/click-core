import React from 'react';
import { motion } from 'framer-motion';
import { Persona } from '../../../types/personas';

interface PersonaCardProps {
  persona: Persona;
  index: number;
}

export default function PersonaCard({ persona, index }: PersonaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg p-8 shadow-sm"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{persona.name}</h3>
      <p className="text-gray-600 mb-6">{persona.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900">Goals:</h4>
          <ul className="mt-2 space-y-2">
            {persona.goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-x-3">
                <svg className="h-5 w-5 flex-none text-primary-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-900">Challenges:</h4>
          <ul className="mt-2 space-y-2">
            {persona.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-x-3">
                <svg className="h-5 w-5 flex-none text-red-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
                <span className="text-sm text-gray-600">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}