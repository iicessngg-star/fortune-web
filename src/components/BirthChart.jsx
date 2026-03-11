import React from 'react';
import { useTranslation } from 'react-i18next';

const BirthChart = ({ birthChart }) => {
  const { t } = useTranslation();
  if (!birthChart) return null;

  // Extract a few aspects for the bottom info mapping
  const aspects = birthChart.slice(0, 2);

  return (
    <div className="mystic-card h-full flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6 w-full">
        <h3 className="text-xl font-bold text-gray-100 font-prompt tracking-wide border-b border-white/10 pb-2 drop-shadow-sm w-full">
          {t('natal_chart')}
        </h3>
      </div>
      
      <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center my-4">
        {/* SVG Concentric Zodiac Wheel */}
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] text-purple-300">
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.8" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
          
          {/* Wheel Spokes (12 Houses) */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 100 + 50 * Math.cos(angle);
            const y1 = 100 + 50 * Math.sin(angle);
            const x2 = 100 + 95 * Math.cos(angle);
            const y2 = 100 + 95 * Math.sin(angle);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
            );
          })}

          {/* Connect inner aspect lines randomly based on planets */}
          {birthChart.length >= 3 && (
            <polygon 
               points={birthChart.slice(0,3).map(p => {
                 const a = (p.angle * Math.PI) / 180;
                 return `${100 + 40 * Math.cos(a)},${100 + 40 * Math.sin(a)}`;
               }).join(' ')} 
               fill="none" 
               stroke="#a855f7" 
               strokeWidth="1"
               strokeOpacity="0.6"
            />
          )}
          {birthChart.length >= 4 && (
            <line 
               x1={100 + 40 * Math.cos((birthChart[1].angle * Math.PI) / 180)}
               y1={100 + 40 * Math.sin((birthChart[1].angle * Math.PI) / 180)}
               x2={100 + 40 * Math.cos((birthChart[3].angle * Math.PI) / 180)}
               y2={100 + 40 * Math.sin((birthChart[3].angle * Math.PI) / 180)}
               stroke="#3b82f6" 
               strokeWidth="0.5"
            />
          )}

          {/* Plot Planets */}
          {birthChart.map((planet, idx) => {
            const angleRad = (planet.angle * Math.PI) / 180;
            const radius = 65; // Inner track
            const x = 100 + radius * Math.cos(angleRad) - 4;
            const y = 100 + radius * Math.sin(angleRad) + 4; // Adjust baseline
            return (
              <text key={idx} x={x} y={y} fontSize="12" fill="currentColor" opacity="0.9">
                {planet.icon}
              </text>
            );
          })}
        </svg>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div>
          <h4 className="text-gray-400 font-sarabun text-xs uppercase tracking-widest mb-2">{t('aspects')}</h4>
          {aspects.map((asp, i) => (
             <div key={i} className="text-sm font-prompt text-gray-200 mb-1 flex items-center gap-1">
               <span className="text-yellow-400 opacity-80">{asp.icon}</span> 
               <span>{t(`planet_${asp.name.toLowerCase()}`)} {asp.angle}°</span>
             </div>
          ))}
        </div>
        <div>
          <h4 className="text-gray-400 font-sarabun text-xs uppercase tracking-widest mb-2">{t('current_positions')}</h4>
          {birthChart.slice(2, 4).map((asp, i) => (
             <div key={i} className="text-sm font-prompt text-gray-200 mb-1 flex items-center gap-1">
               <span className="text-blue-400 opacity-80">{asp.icon}</span> 
               <span>{t(`planet_${asp.name.toLowerCase()}`)} {asp.angle}°</span>
             </div>
          ))}
        </div>
      </div>

      <button className="w-full py-3 mt-6 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-prompt text-sm tracking-widest font-semibold hover:bg-white/10 hover:text-white transition-all uppercase focus:outline-none">
        {t('view_full_chart')}
      </button>
    </div>
  );
};

export default BirthChart;
