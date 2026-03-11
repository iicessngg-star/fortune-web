import React from 'react';
import { useTranslation } from 'react-i18next';

const ElementChart = ({ distribution }) => {
  const { t } = useTranslation();
  // Generate SVG conic-gradient based on the distribution
  let accumulatedPercent = 0;
  const stops = distribution.map(elem => {
    const start = accumulatedPercent;
    accumulatedPercent += elem.percent;
    return `${elem.color} ${start}%, ${elem.color} ${accumulatedPercent}%`;
  }).join(', ');

  return (
    <div className="mystic-card col-span-1 md:col-span-2 mb-6 flex flex-col items-center">
      <h3 className="text-xl text-gray-100 mb-8 text-center font-prompt font-bold">
        {t('element_balance')}
      </h3>
      
      <div className="flex flex-col md:flex-row items-center gap-10 w-full justify-center">
        {/* Radial Chart Visualization */}
        <div 
          className="w-48 h-48 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.2)] animate-[spin_60s_linear_infinite] shrink-0"
          style={{
            background: `conic-gradient(${stops})`,
            border: '4px solid rgba(107, 70, 193, 0.4)'
          }}
        >
          {/* Inner hole for donut style */}
          <div className="w-32 h-32 bg-[#1a0b2e] rounded-full mx-auto mt-7 flex items-center justify-center border-4 border-purple-900/50 shadow-inner">
            <span className="text-xl animate-pulse">✨</span>
          </div>
        </div>
        
        {/* Legend Data */}
        <div className="space-y-3 w-full max-w-xs">
          {distribution.map((elem, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white/[0.04] px-5 py-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-4">
                <span className="drop-shadow-sm text-lg">{elem.icon}</span> 
                <span className="font-prompt text-gray-200 font-medium">{t(`element_${elem.name}`)}</span>
              </div>
              <div className="font-bold font-prompt" style={{ color: elem.color }}>
                {elem.percent}%
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-400 font-sarabun max-w-md mx-auto">
          {t('element_chart_desc')}
        </p>
      </div>
    </div>
  );
};

export default ElementChart;
