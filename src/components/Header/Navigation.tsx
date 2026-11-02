import { useTranslation } from "react-i18next";

const Navigation = ({
  closeModal,
  isOpen = true,
}: {
  closeModal?: () => void;
  isOpen?: boolean;
}) => {
  const { t } = useTranslation();
  const pages = ["about", "services", "our_team"];

  return (
    <nav
      className="flex flex-col lg:flex-row lg:gap-3"
      aria-label={
        closeModal ? t("main-mob_navigation") : t("desktop_navigation")
      }
    >
      {pages.map((p) => (
        <a
          className="capitalize py-2"
          href={`#${p}`}
          onClick={closeModal}
          key={p}
          tabIndex={isOpen ? 0 : -1}
        >
          {t(`${p}`)}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
