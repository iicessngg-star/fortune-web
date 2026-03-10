import React from 'react';
import ElementAnalysis from './ElementAnalysis';
import BaziAnalysis from './BaziAnalysis';
import PlanetAnalysis from './PlanetAnalysis';
import AIReading from './AIReading';

const ResultCard = ({ results, onReset }) => {
  if (!results) return null;

  return (
    <div className="space-y-6 mt-10 animate-fade-in w-full max-w-4xl mx-auto relative z-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ElementAnalysis element={results.element} />
        <PlanetAnalysis planet={results.planet} />
        <BaziAnalysis bazi={results.bazi} birthChart={results.birthChart} />
        <AIReading aiReading={results.aiReading} />
      </div>

      <div className="text-center mt-8">
        <button 
          onClick={onReset}
          className="px-6 py-2 border border-mystic-500 text-mystic-300 hover:bg-mystic-800 rounded-xl transition-all"
        >
          วิเคราะห์ดวงใหม่
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
