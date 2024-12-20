import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    /* resources: {
      en: {
        translation: {
          LoginSlogan: "Part of the GWOCU suite of products.",
        },
      },
      es: {
        translation: {
          LoginSlogan: "Parte de la suite de productos de GWOCU.",
        },
      },
    }, */
    lng: "es",
    /* debug: true, */
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });
