import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center space-x-1.5 px-4 py-1 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-full transition-all text-xs font-sarabun tracking-wide text-gray-300"
      title="Switch Language"
    >
      <span className={i18n.language === 'th' ? 'text-white' : 'opacity-60'}>TH</span>
      <span className="opacity-40 font-light">|</span>
      <span className={i18n.language === 'en' ? 'text-white' : 'opacity-60'}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
