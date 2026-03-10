import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen py-6 px-4 relative overflow-hidden flex flex-col bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4c1d95]">
        {/* Premium Background decorations */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[5%] left-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse"></div>
          <div className="absolute top-[60%] right-[5%] w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
          
          {/* Animated Stars */}
          <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-white rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-[45%] left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-40" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-[75%] right-[35%] w-2 h-2 bg-white rounded-full animate-ping opacity-20" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
          <div className="absolute top-[30%] left-[60%] w-1 h-1 bg-white rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Navigation Bar */}
        <nav className="max-w-4xl mx-auto w-full mb-8 z-20 mt-4">
          <div className="backdrop-blur-xl bg-purple-900/40 border border-purple-500/30 rounded-2xl flex justify-center space-x-6 md:space-x-12 py-4 shadow-xl">
            <Link to="/" className="text-gray-200 hover:text-white font-prompt hover:text-pink-400 transition-colors font-semibold tracking-wide">
              Home
            </Link>
            <a href="/#birth-form" className="text-gray-200 hover:text-white font-prompt hover:text-pink-400 transition-colors font-semibold tracking-wide">
              ดูดวง
            </a>
            <a href="/shop" className="text-gray-200 hover:text-white font-prompt hover:text-pink-400 transition-colors font-semibold tracking-wide">
              หินมงคล
            </a>
            <Link to="/shop" className="text-gold-400 hover:text-yellow-300 font-prompt transition-colors font-bold tracking-wide flex items-center gap-2">
              <span>💎</span> Shop
            </Link>
          </div>
        </nav>

        {/* Main Routing Area */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
        
        {/* Footer */}
        <footer className="mt-20 text-center text-mystic-400 text-sm pb-6 z-10 relative">
          &copy; {new Date().getFullYear()} Mystic Crystal Fortune. วิเคราะห์ดวงและหินมงคล
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
