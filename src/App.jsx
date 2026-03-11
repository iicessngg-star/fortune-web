import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';

import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const CosmicBackground = lazy(() => import('./components/CosmicBackground'));
const MagicCursor = lazy(() => import('./components/MagicCursor'));

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Suspense fallback={null}>
        <MagicCursor />
      </Suspense>
      <div className="min-h-screen py-6 px-4 relative flex flex-col bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4c1d95]">
        <Suspense fallback={<div className="fixed inset-0 bg-[#0f0a1f] -z-20"></div>}>
          <CosmicBackground />
        </Suspense>
        
        {/* Premium Background ambient glows */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[5%] left-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse z-[-10]"></div>
          <div className="absolute top-[60%] right-[5%] w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen z-[-10]"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] mix-blend-screen z-[-10]"></div>
        </div>

        {/* Navigation Bar */}
        <nav className="max-w-6xl mx-auto w-full mb-8 z-20 mt-4 px-2 md:px-4">
          <div className="backdrop-blur-xl bg-purple-900/40 border border-purple-500/30 rounded-2xl flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-12 py-4 shadow-xl gap-4 md:gap-0">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:space-x-8 text-sm md:text-base">
              <Link to="/" className="text-gray-200 hover:text-white font-prompt hover:text-pink-400 transition-colors font-semibold tracking-wide">
                {t('home')}
              </Link>
              <a href="/#birth-form" className="text-gray-200 hover:text-white font-prompt hover:text-pink-400 transition-colors font-semibold tracking-wide">
                {t('fortune')}
              </a>
              <a href="/shop" className="text-gray-200 hover:text-white font-prompt hover:text-pink-400 transition-colors font-semibold tracking-wide">
                {t('crystal')}
              </a>
              <Link to="/shop" className="text-gold-400 hover:text-yellow-300 font-prompt transition-colors font-bold tracking-wide flex items-center gap-1">
                <span>💎</span> {t('shop')}
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Main Routing Area */}
        <div className="flex-1 w-full max-w-6xl mx-auto px-2 md:px-4">
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
    </>
  );
}

export default App;
