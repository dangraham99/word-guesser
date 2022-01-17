import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './locales/translations.json';


i18n
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: (localStorage.getItem('lang') || 'en'),
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: translations.en
            },

            de: {
                translation: translations.de
            }
        }
    });

export default i18n;