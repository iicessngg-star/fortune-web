import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationTH from './locales/th/translation.json';

// Get default language from local storage, or fallback to Thai ('th')
const savedLanguage = localStorage.getItem('appLanguage') || 'th';

const resources = {
  en: {
    translation: translationEN,
  },
  th: {
    translation: translationTH,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // use saved language
    fallbackLng: 'th',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// Save to local storage whenever language changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('appLanguage', lng);
});

export default i18n;
