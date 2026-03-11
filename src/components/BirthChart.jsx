import React from 'react';
import { useTranslation } from 'react-i18next';

const BirthChart = ({ birthChart }) => {
  const { t } = useTranslation();
  if (!birthChart) return null;

  return (
    <div className="mystic-card col-span-1 md:col-span-2 flex flex-col items-center justify-center p-8">
      <h3 className="text-2xl text-gray-100 mb-10 font-prompt font-bold">
        {t('birth_chart_title')}
      </h3>
      
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.03)] bg-white/[0.02] backdrop-blur-md">
        {/* Zodiac wheel rings decor */}
        <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-8 border border-white/5 rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_60%)]"></div>
        
        {/* Center icon */}
        <div className="absolute text-3xl opacity-50 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]">
          🧿
        </div>

        {/* Planet Plotting */}
        {birthChart.map((planet, idx) => {
          // Calculate x,y position on the circle boundary
          const angleRad = (planet.angle - 90) * (Math.PI / 180);
          const radius = window.innerWidth > 768 ? 140 : 110;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <div 
              key={idx}
              className={`absolute flex flex-col items-center justify-center transform group cursor-help transition-all duration-300 hover:scale-125 hover:z-20`}
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
              title={`${planet.name} at ${planet.angle}°`}
            >
              <span className={`text-2xl drop-shadow-sm ${planet.color}`}>
                {planet.icon}
              </span>
              <span className="opacity-0 group-hover:opacity-100 absolute top-8 text-xs font-medium text-gray-200 bg-[#1c153b] px-3 py-1.5 rounded-lg border border-white/10 transition-opacity whitespace-nowrap z-20 shadow-lg">
                {t(`planet_${planet.name.toLowerCase()}`)}
              </span>
            </div>
          );
        })}
      </div>
      
      <p className="mt-10 text-sm text-gray-400 font-sarabun text-center max-w-sm">
        {t('birth_chart_desc')}
      </p>
    </div>
  );
};

export default BirthChart;
