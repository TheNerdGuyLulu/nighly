import { initReactI18next } from 'react-i18next';
import i18next, { LanguageDetectorModule } from 'i18next';

import en from './resources/en.json';
import pt from './resources/pt.json';

export const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
} as const;

const fallbackLng = Object.keys(resources)[0];

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    return fallbackLng;
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: fallbackLng,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export { i18next };
