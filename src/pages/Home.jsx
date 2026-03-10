import React, { useState } from 'react';
import BirthForm from '../components/BirthForm';
import ResultCard from '../components/ResultCard';
import { calculateFortune } from '../utils/fortuneCalculations';

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
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <div className="text-center mb-10 z-10 w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 mb-4 drop-shadow-lg font-prompt">
          🔮 Mystic Crystal Fortune
        </h1>
        <p className="text-mystic-300 max-w-lg mx-auto font-sarabun text-lg">
          ค้นหาดวงชะตาของคุณ จากวันเดือนปีเกิด และค้นพบหินมงคลที่เหมาะกับคุณ
        </p>
      </div>

      <BirthForm onSubmit={handleCalculate} />
      
      {isCalculating && (
        <div className="mt-10 text-center animate-pulse">
          <p className="text-2xl text-purple-300 font-prompt">🔮 กำลังวิเคราะห์ดวงของคุณ...</p>
        </div>
      )}
      
      {results && !isCalculating && <ResultCard results={results} onReset={handleReset} />}
    </div>
  );
};

export default Home;
