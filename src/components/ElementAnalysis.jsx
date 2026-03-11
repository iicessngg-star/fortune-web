import React from 'react';
import { useTranslation } from 'react-i18next';

const ElementAnalysis = ({ element }) => {
  const { t } = useTranslation();

  return (
    <div className="mystic-card text-center">
      <h3 className="text-xl text-mystic-400 mb-2">{t('element_title')}</h3>
      <div className={`text-5xl my-4 ${element.color || 'text-gold-400'}`}>
        {element.icon}
      </div>
      <div className="text-2xl font-bold text-gray-100 my-2">
        {t(`element_${element.name}`)}
      </div>
    </div>
  );
};

export default ElementAnalysis;
