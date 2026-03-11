import React from 'react';
import { useTranslation } from 'react-i18next';

const ZodiacInsights = ({ sunSign }) => {
  const { t } = useTranslation();

  if (!sunSign) return null;

  return (
    <div className="mystic-card h-full flex flex-col justify-between">
      <h3 className="text-xl font-bold text-gray-100 font-prompt mb-6 tracking-wide drop-shadow-sm">
        {t('sun_sign_insights', { sign: t(`sun_sign_${sunSign.key}`) })}
      </h3>
      
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-4xl shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          {sunSign.icon}
        </div>
        
        <div className="flex-1">
          <p className="text-gray-300 font-sarabun text-sm leading-relaxed mb-4">
            {t(`sun_sign_traits_${sunSign.key}`)}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {t(`sun_sign_traits_${sunSign.key}`).split(',').map((trait, index) => (
              <span key={index} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-prompt text-purple-200 uppercase tracking-wider">
                {trait.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacInsights;
