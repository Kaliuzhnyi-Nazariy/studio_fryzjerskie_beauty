import { useTranslation } from "react-i18next";
import Language from "./Language";
import { FiMoon, FiSun } from "react-icons/fi";

const Settings = ({
  theme,
  changeTheme,
}: {
  theme: "light" | "dark";
  changeTheme: () => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3 md:gap-1">
      <Language />

      <button
        type="button"
        onClick={changeTheme}
        className="p-2 rounded-full hover:bg-bg/5 dark:hover:bg-text/5 transition-colors flex items-center justify-center"
        aria-label={t("toggle-theme")}
      >
        {theme === "dark" ? (
          <FiSun className="size-4.5 text-amber-400 animate-spin-slow" />
        ) : (
          <FiMoon className="size-4.5 opacity-80" />
        )}
      </button>
    </div>
  );
};

export default Settings;
