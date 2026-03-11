import React from 'react';
import { useTranslation } from 'react-i18next';

const LifeAreasChart = ({ lifeAreas }) => {
  const { t } = useTranslation();

  const areas = [
    { key: 'career', icon: '💼', color: 'from-blue-400 to-indigo-500', value: lifeAreas.career },
    { key: 'love', icon: '❤️', color: 'from-pink-400 to-rose-500', value: lifeAreas.love },
    { key: 'wellness', icon: '🌿', color: 'from-emerald-400 to-teal-500', value: lifeAreas.wellness },
    { key: 'finance', icon: '🪙', color: 'from-amber-400 to-orange-500', value: lifeAreas.finance }
  ];

  return (
    <div className="mystic-card h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-100 font-prompt tracking-wide drop-shadow-sm">
          {t('life_areas_today')}
        </h3>
        <span className="text-gray-400 tracking-widest text-xl">•••</span>
      </div>
      
      <div className="flex-1 flex justify-around items-end pt-8 gap-2 md:gap-4">
        {areas.map((area) => (
          <div key={area.key} className="flex flex-col items-center flex-1">
            <div className="w-full relative flex justify-center h-40">
              {/* Background Track */}
              <div className="absolute bottom-0 w-10 md:w-12 h-full bg-white/[0.03] rounded-t-xl rounded-b-md"></div>
              
              {/* Foreground Fill Bar */}
              <div 
                className={`absolute bottom-0 w-10 md:w-12 rounded-t-xl rounded-b-md overflow-hidden bg-gradient-to-t ${area.color} opacity-80`}
                style={{ height: `${area.value}%`, transition: 'height 1.5s ease-out' }}
              >
                <div className="absolute inset-0 bg-white/10"></div>
              </div>
              
              {/* Percentage Label */}
              <span className="absolute -top-6 text-sm font-bold text-gray-200 font-prompt drop-shadow-md">
                {area.value}%
              </span>
            </div>
            
            <div className="mt-4 flex flex-col items-center">
              <span className="text-lg mb-1 drop-shadow-sm">{area.icon}</span>
              <span className="text-xs text-gray-400 font-sarabun">{t(`life_area_${area.key}`)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifeAreasChart;
