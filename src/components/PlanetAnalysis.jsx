import React from 'react';
import { useTranslation } from 'react-i18next';

const PlanetAnalysis = ({ planet }) => {
  const { t } = useTranslation();
  
  return (
    <div className="mystic-card h-full flex flex-col justify-between overflow-hidden relative">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
      
      <h3 className="text-xl font-bold text-gray-100 font-prompt mb-6 tracking-wide drop-shadow-sm border-b border-white/10 pb-2">
        {t('todays_transit_aspect')}
      </h3>
      
      <div className="flex-1 flex flex-col items-center justify-center relative my-4">
         {/* Simple SVG Transit Rings */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="4" fill="#fbbf24" className="animate-pulse" />
              
              <circle cx="20" cy="50" r="2" fill="#9ca3af" className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: '50px 50px' }} />
              <circle cx="50" cy="80" r="3" fill="#60a5fa" className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '50px 50px' }} />
              <circle cx="85" cy="20" r="2" fill="#a78bfa" className="animate-[spin_12s_linear_infinite]" style={{ transformOrigin: '50px 50px' }} />
            </svg>
         </div>

         <div className="z-10 flex flex-col items-center mt-20 bg-black/40 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-md">
           <h4 className="text-xl font-bold text-white font-prompt tracking-wide flex items-center gap-2">
             <span className="text-blue-400 opacity-80">{planet.icon}</span> 
             {t('star_prefix')} {t(`planet_${planet.name}`)}
           </h4>
           <p className="text-center text-xs text-gray-400 font-sarabun mt-1">
             {t(`planet_meaning_${planet.name}`)}
           </p>
         </div>
      </div>
    </div>
  );
};

export default PlanetAnalysis;
