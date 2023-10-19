import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en.json';
import esTranslation from './translations/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      },
    },
    lng: 'en', // Idioma predeterminado
    interpolation: {
      escapeValue: false, // No es necesario escapar valores
    },
  });

export default i18n;