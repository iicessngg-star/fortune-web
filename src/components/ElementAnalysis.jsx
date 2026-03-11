import React from 'react';
import { useTranslation } from 'react-i18next';

const ElementAnalysis = ({ element }) => {
  const { t } = useTranslation();

  return (
    <div className="mystic-card flex flex-col items-center justify-center p-8">
      <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-6">{t('element_title')}</h3>
      <div className={`text-6xl my-4 drop-shadow-md`}>
        {element.icon}
      </div>
      <div className="text-3xl font-bold text-gray-100 my-2 font-prompt tracking-wide">
        {t(`element_${element.name}`)}
      </div>
    </div>
  );
};

export default ElementAnalysis;
