'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const getNavClass = (path) => {
    const isActive = pathname === path;
    return isActive
      ? "bg-white/[0.1] px-5 py-1.5 rounded-full text-white font-sarabun font-medium tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      : "px-4 py-1.5 text-gray-400 hover:text-white font-sarabun font-medium tracking-wide transition-all";
  };

  return (
    <nav className="sticky top-0 z-50 w-full mb-8 pt-4">
      <div className="max-w-4xl mx-auto w-full px-4">
        <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-full flex justify-between items-center px-6 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="flex items-center space-x-6 text-sm font-sarabun">
            <Link href="/" className={getNavClass('/')}>
              {t('home')}
            </Link>
            <a href="/#birth-form" className="px-4 py-1.5 text-gray-400 hover:text-white font-sarabun font-medium tracking-wide transition-all">
              {t('fortune')}
            </a>
            <Link href="/shop" className={`${getNavClass('/shop')} flex items-center gap-1.5 border-l border-white/10 pl-6`}>
              <span className="text-lg">💎</span> {t('shop')}
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
