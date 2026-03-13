'use client';

import React, { useState, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import BirthForm from '../components/BirthForm';
import FortuneResult from '../components/FortuneResult';
import { calculateFortune } from '../utils/fortuneEngine';
import TestimonialsSection from '../components/TestimonialsSection';
import Link from 'next/link';

const Home = () => {
  const { t } = useTranslation();
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = (formData) => {
    setIsCalculating(true);
    setResults(null);
    
    // Simulate loading for better UX
    setTimeout(() => {
      const calculated = calculateFortune(
        formData.day,
        formData.month,
        formData.year,
        formData.time
      );
      setResults(calculated);
      setIsCalculating(false);
      
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const handleReset = () => {
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-2 md:px-4">

      {/* Hero Portal */}
      <div className="text-center mb-10 z-10 w-full relative pt-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-cinzel tracking-wider flex flex-col md:flex-row justify-center items-center gap-3 drop-shadow-2xl">
          <span className="text-5xl md:text-6xl drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] md:mr-3">🔮</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#eaddcf] via-[#f7ebd4] to-[#cba365] pb-2">
            {t('hero_title')}
          </span>
        </h1>
        <p className="text-[#d8cdbd] max-w-xl mx-auto font-cinzel text-sm md:text-base font-medium tracking-widest px-4 mt-1">
          {t('hero_subtitle')}
        </p>
      </div>

      <BirthForm onSubmit={handleCalculate} />
      
      {isCalculating && (
        <div className="mt-16 flex flex-col items-center justify-center animate-pulse relative">
          <div className="w-24 h-24 rounded-full border-2 border-t-purple-400 border-r-purple-400/50 border-b-transparent border-l-transparent animate-spin relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-3xl drop-shadow-lg">🔮</div>
          
          <p className="mt-8 text-xl text-purple-200 font-prompt tracking-widest uppercase text-sm font-semibold">
            {t('fortune_loading')}
          </p>
        </div>
      )}
      
      {results && !isCalculating && (
        <>
          <FortuneResult results={results} onReset={handleReset} />
          
          {/* Conversion Optimization CTA */}
          <div className="mt-16 mb-8 text-center p-10 mystic-card w-full max-w-3xl mx-auto overflow-hidden group">
            <h3 className="text-2xl md:text-3xl font-bold font-prompt text-gray-100 mb-4 relative z-10">
              {t('enhance_fortune_cta')}
            </h3>
            <p className="text-gray-400 mb-8 font-sarabun relative z-10 max-w-lg mx-auto">
              {t('enhance_fortune_desc')}
            </p>
            <div className="flex justify-center flex-wrap gap-3 mb-8 relative z-10">
              <span className="px-4 py-1.5 bg-white/5 text-gray-300 font-prompt rounded-full text-xs font-medium border border-white/10 uppercase tracking-wider">🔥 {t('popular')}</span>
              <span className="px-4 py-1.5 bg-gold-500/10 text-gold-400 font-prompt rounded-full text-xs font-medium border border-gold-500/20 uppercase tracking-wider">✨ {t('recommended')}</span>
            </div>
            <Link to="/shop" className="inline-block relative z-10 px-8 py-3.5 bg-white text-black font-prompt font-semibold rounded-xl hover:scale-[1.02] transition-transform duration-300">
              {t('view_suitable_crystal')}
            </Link>
          </div>
        </>
      )}

      <TestimonialsSection />
    </div>
  );
};

export default Home;
