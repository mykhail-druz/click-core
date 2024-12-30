import React from 'react';
import { motion } from 'framer-motion';
import StageIcon from '../icons/StageIcon';

interface PipelineStageProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  isLast: boolean;
}

export default function PipelineStage({ title, description, icon, index, isLast }: PipelineStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center"
    >
      <div className="relative w-full">
        {!isLast && (
          <div 
            className="absolute top-6 left-[50%] h-0.5 bg-primary-100 hidden lg:block" 
            style={{ 
              width: 'calc(100% + 2rem)',
              transform: 'translateX(0)',
              zIndex: 0
            }}
          />
        )}
        <div className="relative z-10 flex justify-center">
          <StageIcon icon={icon} />
        </div>
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}