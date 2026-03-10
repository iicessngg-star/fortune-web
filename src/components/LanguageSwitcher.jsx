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
      className="flex items-center justify-center space-x-2 px-3 py-1 bg-mystic-900/50 hover:bg-mystic-800/80 border border-purple-500/30 rounded-full transition-all text-sm font-prompt text-gray-200"
      title="Switch Language"
    >
      <span className={i18n.language === 'th' ? 'font-bold text-white' : 'opacity-50'}>TH</span>
      <span className="opacity-50">|</span>
      <span className={i18n.language === 'en' ? 'font-bold text-white' : 'opacity-50'}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
