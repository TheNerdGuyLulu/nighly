import { initReactI18next } from 'react-i18next';
import i18next, { LanguageDetectorModule } from 'i18next';

import de from './resources/de.json';
import en from './resources/en.json';
import es from './resources/es.json';
import fr from './resources/fr.json';
import it from './resources/it.json';
import pl from './resources/pl.json';
import pt from './resources/pt.json';

export const defaultNS = 'translation';

export const resources = {
  en: {
    [defaultNS]: en,
  },
  pt: {
    [defaultNS]: pt,
  },
  es: {
    [defaultNS]: es,
  },
  de: {
    [defaultNS]: de,
  },
  fr: {
    [defaultNS]: fr,
  },
  it: {
    [defaultNS]: it,
  },
  pl: {
    [defaultNS]: pl,
  },
} as const;

const fallbackLng = Object.keys(resources)[0];

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    // Here we could use react-native-localize to automatically load the device's language
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
