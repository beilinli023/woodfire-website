
import React from 'react';
import { HeartPulse } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HealthAssessmentButton = () => {
  // Function to trigger the health assessment dialog
  const openHealthAssessment = () => {
    // Find the HealthAssessmentCard dialog trigger and click it
    const healthAssessmentTrigger = document.querySelector('[data-health-assessment-trigger]');
    if (healthAssessmentTrigger) {
      (healthAssessmentTrigger as HTMLElement).click();
    }
  };

  return (
    <div 
      className="flex items-center justify-between w-full p-4 bg-black text-white rounded-md cursor-pointer"
      onClick={openHealthAssessment}
    >
      <HeartPulse className="text-purple-500 h-8 w-8" />
      <span className="text-purple-500 text-xl font-medium">
        点击"评价"
      </span>
    </div>
  );
};

export default HealthAssessmentButton;
