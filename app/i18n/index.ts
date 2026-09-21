import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUi from './locales/en/ui.json';
import enAnatomy from './locales/en/anatomy.json';
import hiUi from './locales/hi/ui.json';
import hiAnatomy from './locales/hi/anatomy.json';

/** Languages with real, populated content. See ./locales/README.md for the other 15 —
 * BIO-20260921-0900's decision: structure ready, content not populated until each has a
 * native-speaker-reviewed glossary (Rules.md §5). */
export const SUPPORTED_LANGUAGES = [
 {code: 'en', name: 'English', dir: 'ltr'},
 {code: 'hi', name: 'हिन्दी', dir: 'ltr'},
] as const;
export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]['code'];

i18next
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
  resources: {
   en: {ui: enUi, anatomy: enAnatomy},
   hi: {ui: hiUi, anatomy: hiAnatomy},
  },
  ns: ['ui', 'anatomy'],
  defaultNS: 'ui',
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LANGUAGES.map(l => l.code),
  interpolation: {escapeValue: false},
  detection: {order: ['localStorage', 'navigator'], caches: ['localStorage']},
 });

export default i18next;
