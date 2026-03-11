import React from 'react';
import { useTranslation } from 'react-i18next';
import ZodiacInsights from './ZodiacInsights';
import PlanetAnalysis from './PlanetAnalysis';
import LifeAreasChart from './LifeAreasChart';
import RadarElementalChart from './RadarElementalChart';
import DailyTarotWidget from './DailyTarotWidget';
import BirthChart from './BirthChart';
import CrystalRecommendation from './CrystalRecommendation';

const FortuneResult = ({ results, onReset }) => {
  const { t } = useTranslation();
  if (!results) return null;

  return (
    <div className="space-y-6 mt-12 animate-fade-in w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10 transition-all duration-500 opacity-100">
      
      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-white font-prompt tracking-tight drop-shadow-md">
            {t('your_fortune_title')}
          </h2>
          <p className="text-gray-400 font-sarabun mt-2 tracking-wide uppercase text-sm">Cosmic Guide • Daily Result Dashboard</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        
        {/* Top Left spanning 2 columns: Natal Chart */}
        <div className="md:col-span-2 md:row-span-2">
           <BirthChart birthChart={results.birthChart} />
        </div>
        
        {/* Right Column Stack: Zodiac & Transit */}
        <div className="col-span-1">
           <ZodiacInsights sunSign={results.sunSign} />
        </div>
        <div className="col-span-1">
           <PlanetAnalysis planet={results.planet} />
        </div>
        
        {/* Bottom Row: 3 distinct widgets */}
        <div className="col-span-1">
           <LifeAreasChart lifeAreas={results.lifeAreas} />
        </div>
        <div className="col-span-1">
           <RadarElementalChart distribution={results.elementBalance.distribution} />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
           <DailyTarotWidget />
        </div>
        
        {/* Full width footer modules */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
          <CrystalRecommendation crystals={results.recommendedCrystals} />
        </div>
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={onReset}
          className="px-8 py-3 bg-mystic-900/80 border border-purple-500 text-purple-300 hover:text-white hover:bg-purple-800 rounded-2xl transition-all shadow-lg font-prompt font-semibold tracking-wide"
        >
          {t('review_fortune_again')}
        </button>
      </div>
    </div>
  );
};

export default FortuneResult;
