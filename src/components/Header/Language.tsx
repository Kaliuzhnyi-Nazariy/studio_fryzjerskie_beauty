import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

const Language = () => {
  const { i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: "pl", label: "Polski" },
    { code: "en", label: "English" },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsLangOpen(!isLangOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-bg/5 dark:hover:bg-text/5 transition-colors text-sm font-medium"
      >
        <FiGlobe className="size-4 opacity-80" />
        <span className="uppercase text-xs tracking-wider">
          {i18n.language}
        </span>
      </button>

      {isLangOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsLangOpen(false)}
          />

          <ul className="absolute right-0 mt-2 w-32 bg-bg border border-text rounded-xl shadow-lg py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-bg/5 dark:hover:bg-text/5 ${
                    i18n.language === lang.code ? "font-semibold" : "opacity-80"
                  }`}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Language;
