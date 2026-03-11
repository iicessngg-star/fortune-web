import React from 'react';
import { useTranslation } from 'react-i18next';

const LuckySection = ({ color, number, day }) => {
  const { t } = useTranslation();

  return (
    <div className="mystic-card col-span-1 md:col-span-2 mt-2">
      <h3 className="text-xl text-mystic-400 mb-4 text-center">✨ {t('lucky_energy_title')} ✨</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">{t('lucky_color')}</p>
          <p className="text-2xl font-bold text-gray-100 font-prompt">{t(color)}</p>
        </div>
        
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">{t('lucky_number')}</p>
          <p className="text-2xl font-bold text-gray-100 font-prompt">{t(number)}</p>
        </div>
        
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
          <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">{t('lucky_day')}</p>
          <p className="text-2xl font-bold text-gray-100 font-prompt">{t(day)}</p>
        </div>
      </div>
    </div>
  );
};

export default LuckySection;
