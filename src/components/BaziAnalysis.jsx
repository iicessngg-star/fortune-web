import React from 'react';
import { useTranslation } from 'react-i18next';

const BaziAnalysis = ({ zodiac }) => {
  const { t } = useTranslation();
  
  return (
    <div className="mystic-card">
      <h3 className="text-xl text-mystic-400 mb-4 text-center">{t('bazi_title')}</h3>
      <div className="text-center mb-6">
        <p className="text-2xl font-bold text-gray-100">{t('year_of')} {t(`zodiac_${zodiac}`)}</p>
      </div>
      
      <div className="bg-mystic-900/50 rounded-xl p-4 text-center">
        <p className="text-sm text-gray-300">
          {t('bazi_desc', { year: new Date().getFullYear() })}
        </p>
      </div>
    </div>
  );
};

export default BaziAnalysis;
