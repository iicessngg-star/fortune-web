import React, { useState } from 'react';
import BirthForm from './components/BirthForm';
import ResultCard from './components/ResultCard';
import { calculateFortune } from './utils/fortuneCalculations';

function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (formData) => {
    const calculated = calculateFortune(
      formData.day,
      formData.month,
      formData.year,
      formData.time
    );
    setResults(calculated);
    // Smooth scroll to results
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-10 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-mystic-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-mystic-500/10 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-gold-500/10 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10 z-10 w-full">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 mb-4 drop-shadow-lg font-prompt">
            วิเคราะห์ดวงจากวันเกิด
          </h1>
          <p className="text-mystic-300 max-w-lg mx-auto font-sarabun text-lg">
            ค้นพบความลับแห่งดวงดาว ธาตุประจำตัว และนักษัตรของคุณ
          </p>
        </div>

        <BirthForm onSubmit={handleCalculate} />
        
        {results && <ResultCard results={results} onReset={handleReset} />}
      </div>
      
      {/* Footer */}
      <footer className="mt-20 text-center text-mystic-400 text-sm pb-6 z-10 relative">
        &copy; {new Date().getFullYear()} Mystic Fortune. วิเคราะห์ดวงจากวันเกิด
      </footer>
    </div>
  );
}

export default App;
