import { defaultNS, resources } from 'app/translations/translations.config';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['en'];
    defaultNS: typeof defaultNS;
  }
}
