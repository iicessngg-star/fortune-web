import React from 'react';
import { useTranslation } from 'react-i18next';

const BaziAnalysis = ({ zodiac }) => {
  const { t } = useTranslation();
  
  return (
    <div className="mystic-card flex flex-col items-center justify-center p-8">
      <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-6">{t('bazi_title')}</h3>
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-gray-100 font-prompt tracking-wide">{t('year_of')} {t(`zodiac_${zodiac}`)}</p>
      </div>
      
      <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5 w-full">
        <p className="text-sm text-gray-400 font-sarabun">
          {t('bazi_desc', { year: new Date().getFullYear() })}
        </p>
      </div>
    </div>
  );
};

export default BaziAnalysis;
