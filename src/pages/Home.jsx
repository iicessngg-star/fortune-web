import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import BirthForm from '../components/BirthForm';
import FortuneResult from '../components/FortuneResult';
import { calculateFortune } from '../utils/fortuneEngine';
import TestimonialsSection from '../components/TestimonialsSection';
import { Link } from 'react-router-dom';

const TarotDraw = lazy(() => import('../components/TarotDraw'));

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
      <Helmet>
        <title>🔮 Mystic Crystal Oracle | ดูดวงจากวันเกิด</title>
        <meta name="description" content="ดูดวงจากวันเกิด วิเคราะห์ธาตุประจำตัว พร้อมแนะนำหินมงคลเสริมพลังชีวิตเพื่อคุณโดยเฉพาะ" />
        <meta property="og:title" content="Mystic Crystal Oracle | เครื่องมือวิเคราะห์ดวงและหินมงคลประจำตัว" />
        <meta property="og:description" content="ทำนายดวงชะตา เจาะลึกธาตุประจำตัว พร้อมรับคำแนะนำหินมงคลเสริมพลังบวก" />
      </Helmet>

      {/* Hero Portal */}
      <div className="text-center mb-16 z-10 w-full relative py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-[80px] animate-pulse -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 mb-6 drop-shadow-2xl font-prompt">
          🔮 Mystic Crystal Oracle
        </h1>
        <p className="text-mystic-300 max-w-xl mx-auto font-sarabun text-xl leading-relaxed">
          ค้นพบพลังแห่งดวงชะตา ธาตุประจำตัว และหินมงคลของคุณ
        </p>
      </div>

      <BirthForm onSubmit={handleCalculate} />
      
      {isCalculating && (
        <div className="mt-16 flex flex-col items-center justify-center animate-pulse relative">
          <div className="w-32 h-32 rounded-full border-4 border-t-purple-400 border-r-pink-400 border-b-indigo-400 border-l-transparent animate-spin relative z-10 shadow-[0_0_30px_rgba(192,132,252,0.6)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/40 rounded-full blur-xl animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-4xl">🔮</div>
          
          {/* Floating particle simulations for ritual */}
          <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-bounce top-0 left-10"></div>
          <div className="absolute w-3 h-3 bg-gold-400 rounded-full animate-bounce top-10 right-10" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-bounce bottom-10 left-5" style={{animationDelay: '0.4s'}}></div>
          
          <p className="mt-8 text-2xl text-purple-300 font-prompt font-semibold tracking-wide drop-shadow-lg">
            กำลังเปิดพลังแห่งดวงชะตา...
          </p>
        </div>
      )}
      
      {results && !isCalculating && (
        <>
          <FortuneResult results={results} onReset={handleReset} />
          
          {/* Conversion Optimization CTA */}
          <div className="mt-16 mb-8 text-center p-8 mystic-card w-full max-w-2xl mx-auto border-pink-500/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <h3 className="text-3xl font-bold font-prompt text-gold-400 mb-4 drop-shadow-md relative z-10">
              💎 เสริมพลังดวงของคุณด้วยหินมงคล
            </h3>
            <p className="text-gray-200 mb-8 font-sarabun relative z-10">
              ค้นพบเกรดหินมงคลแท้ที่คัดสรรมาเพื่อดึงดูดพลังงานบวก ปกป้องคุ้มครอง และเสริมสิริมงคลตามธาตุประจำตัวของคุณ
            </p>
            <div className="flex justify-center flex-wrap gap-4 mb-8 relative z-10">
              <span className="px-3 py-1 bg-red-500/20 text-red-300 font-prompt rounded-full text-sm border border-red-500/30">🔥 Popular</span>
              <span className="px-3 py-1 bg-gold-500/20 text-yellow-300 font-prompt rounded-full text-sm border border-yellow-500/30">✨ Recommended</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 font-prompt rounded-full text-sm border border-indigo-500/30">🧿 Best Energy</span>
            </div>
            <Link to="/shop" className="inline-block relative z-10 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-prompt font-semibold rounded-2xl shadow-xl hover:shadow-pink-500/50 hover:-translate-y-1 transition-all duration-300">
              ดูหินที่เหมาะกับฉัน
            </Link>
          </div>
        </>
      )}
      
      <Suspense fallback={<div className="h-64 animate-pulse bg-purple-900/20 rounded-2xl w-full max-w-4xl mt-12"></div>}>
        <TarotDraw />
      </Suspense>

      <TestimonialsSection />
    </div>
  );
};

export default Home;
