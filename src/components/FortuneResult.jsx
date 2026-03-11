import React from 'react';
import { useTranslation } from 'react-i18next';
import ElementAnalysis from './ElementAnalysis';
import BaziAnalysis from './BaziAnalysis';
import PlanetAnalysis from './PlanetAnalysis';
import AIReading from './AIReading';
import LuckySection from './LuckySection';
import CrystalRecommendation from './CrystalRecommendation';
import ElementChart from './ElementChart';
import BirthChart from './BirthChart';

const FortuneResult = ({ results, onReset }) => {
  const { t } = useTranslation();
  if (!results) return null;

  return (
    <div className="space-y-6 mt-12 animate-fade-in w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10 transition-all duration-500 opacity-100">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2 text-center mb-4">
          <h2 className="text-3xl font-bold text-gold-400 font-prompt tracking-wide">
            {t('your_fortune_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <ElementAnalysis element={results.element} />
        <BaziAnalysis zodiac={results.zodiac} />
        <PlanetAnalysis planet={results.planet} />
        
        <ElementChart distribution={results.elementBalance.distribution} />
        <BirthChart birthChart={results.birthChart} />
        
        <LuckySection color={results.luckyColor} number={results.luckyNumber} day={results.luckyDay} />
        <AIReading element={results.element} zodiac={results.zodiac} planet={results.planet} />
        
        <CrystalRecommendation crystals={results.recommendedCrystals} />
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
