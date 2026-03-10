import React from 'react';

const PlanetAnalysis = ({ planet }) => {
  return (
    <div className="mystic-card">
      <h3 className="text-xl text-mystic-400 mb-4 text-center">ดาวประจำวันเกิด</h3>
      
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-mystic-900 to-mystic-500 shadow-lg flex items-center justify-center text-4xl border-2 border-mystic-500/50">
          {planet.icon}
        </div>
        
        <h4 className={`text-xl font-bold ${planet.color || 'text-gray-100'}`}>ดาว{planet.name}</h4>
        <p className="text-center text-sm text-gray-300 leading-relaxed">
          {planet.meaning}
        </p>
      </div>
    </div>
  );
};

export default PlanetAnalysis;
