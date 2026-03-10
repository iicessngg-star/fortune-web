import React, { useState } from 'react';
import BirthForm from '../components/BirthForm';
import ResultCard from '../components/ResultCard';
import { calculateFortune } from '../utils/fortuneEngine';
import ElementChart from '../components/ElementChart';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
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
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      {/* Hero Portal */}
      <div className="text-center mb-16 z-10 w-full relative py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px] animate-pulse -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 mb-6 drop-shadow-2xl font-prompt">
          🔮 Mystic Crystal Oracle
        </h1>
        <p className="text-mystic-300 max-w-xl mx-auto font-sarabun text-xl leading-relaxed">
          ค้นพบดวงชะตา ธาตุประจำตัว และหินมงคลที่เหมาะกับพลังชีวิตของคุณ
        </p>
      </div>

      <BirthForm onSubmit={handleCalculate} />
      
      {isCalculating && (
        <div className="mt-10 text-center animate-pulse">
          <p className="text-2xl text-purple-300 font-prompt">🔮 กำลังวิเคราะห์ดวงของคุณ...</p>
        </div>
      )}
      
      {results && !isCalculating && <ResultCard results={results} onReset={handleReset} />}
      
      <TestimonialsSection />
    </div>
  );
};

export default Home;
