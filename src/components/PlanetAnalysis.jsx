import React from 'react';
import { useTranslation } from 'react-i18next';

const PlanetAnalysis = ({ planet }) => {
  const { t } = useTranslation();
  
  return (
    <div className="mystic-card flex flex-col items-center p-8">
      <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-6">{t('planet_title')}</h3>
      
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-mystic-800 to-mystic-600 shadow-lg flex items-center justify-center text-4xl border border-white/10">
          {planet.icon}
        </div>
        
        <h4 className={`text-2xl font-bold text-white font-prompt tracking-wide`}>
          {t('star_prefix')} {t(`planet_${planet.name}`)}
        </h4>
        <p className="text-center text-sm text-gray-400 leading-relaxed font-sarabun max-w-sm mt-2">
          {t(`planet_meaning_${planet.name}`)}
        </p>
      </div>
    </div>
  );
};

export default PlanetAnalysis;
