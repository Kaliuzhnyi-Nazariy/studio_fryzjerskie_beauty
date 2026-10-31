import { useTranslation } from "react-i18next";
import type { Languages } from "../type";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const language = i18n.language as Languages;

  const changeLanguage = async (lang: "pl" | "en") => {
    localStorage.setItem("user-language", lang);
    await i18n.changeLanguage(lang);
  };

  return { language, changeLanguage };
};
