import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationVI from "../i18n/vi.json";
import translationEN from "../i18n/en.json";

const resources = {
  en: {
    translation: translationEN
  },
  vi: {
    translation: translationVI
  }
};

const lang = localStorage.getItem("lang");

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: lang || 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
