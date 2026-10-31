// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
// import { useLanguage } from "../../src/helper/language";

// import en from "./en.json";
// import pl from "./pl.json";

// // const systemLanguage = window.navigator.language.split("-")[0] ?? "pl";

// const { language } = useLanguage();

// const storedLanguage = localStorage.getItem("user-language") ?? language;

// // const storedLanguage = localStorage.getItem("user-language") ?? systemLanguage;

// i18n.use(initReactI18next).init({
//   resources: {
//     pl: { translation: pl },
//     en: { translation: en },
//     // uk: { translation: ua },
//     // ru: { translation: ru },
//   },
//   lng: storedLanguage,
//   fallbackLng: "pl",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import pl from "./pl.json";

const getInitialLanguage = (): "pl" | "en" => {
  const savedLang = localStorage.getItem("user-language");
  if (savedLang === "pl" || savedLang === "en") return savedLang;

  const browserLang = window.navigator.language.split("-")[0];
  return browserLang === "en" ? "en" : "pl";
};

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
