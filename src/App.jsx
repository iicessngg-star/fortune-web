import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';

import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const CosmicBackground = lazy(() => import('./components/CosmicBackground'));
const MagicCursor = lazy(() => import('./components/MagicCursor'));

function App() {
  const { t } = useTranslation();
  const location = useLocation();

  const getNavClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? "bg-white/[0.1] px-5 py-1.5 rounded-full text-white font-sarabun font-medium tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      : "px-4 py-1.5 text-gray-400 hover:text-white font-sarabun font-medium tracking-wide transition-all";
  };

  return (
    <>
      <Suspense fallback={null}>
        <MagicCursor />
      </Suspense>
      <div className="min-h-screen py-6 relative flex flex-col bg-[#0b0a10]">
        <Suspense fallback={<div className="fixed inset-0 bg-[#0b0a10] -z-20"></div>}>
          <CosmicBackground />
        </Suspense>
        
        {/* Premium Background ambient glows (Toned down) */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[150px] z-[-10]"></div>
          <div className="absolute top-[40%] right-[-10%] w-[35rem] h-[35rem] bg-purple-500/5 rounded-full blur-[150px] z-[-10]"></div>
          <div className="absolute bottom-[-10%] left-[10%] w-96 h-96 bg-pink-500/5 rounded-full blur-[120px] mix-blend-screen z-[-10]"></div>
        </div>

        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 w-full mb-8 pt-4">
          <div className="max-w-4xl mx-auto w-full px-4">
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-full flex justify-between items-center px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <div className="flex items-center space-x-6 text-sm font-sarabun">
                <Link to="/" className={getNavClass('/')}>
                  {t('home')}
                </Link>
                <a href="/#birth-form" className="px-4 py-1.5 text-gray-400 hover:text-white font-sarabun font-medium tracking-wide transition-all">
                  {t('fortune')}
                </a>
                <Link to="/shop" className={`${getNavClass('/shop')} flex items-center gap-1.5`}>
                  <span className="text-sm">💎</span> {t('shop')}
                </Link>
              </div>
              <LanguageSwitcher />
            </div>
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
