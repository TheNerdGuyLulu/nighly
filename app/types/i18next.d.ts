import { resources } from 'src/translations/translations.config';

declare module 'i18next' {
  interface CustomTypeOptions {
    jsonFormat: 'v3';
    resources: (typeof resources)['en'];
    returnNull: false;
  }
}
