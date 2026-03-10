import React from 'react';

const AIReading = ({ aiReading }) => {
  return (
    <div className="mystic-card col-span-1 md:col-span-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-mystic-600/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
      
      <h3 className="text-xl text-gold-400 mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        AI วิเคราะห์ดวง
      </h3>
      
      <p className="text-gray-200 leading-relaxed text-lg z-10 relative">
        "{aiReading}"
      </p>
    </div>
  );
};

export default AIReading;
