import { useTranslation } from "react-i18next";

const Navigation = ({ closeModal }: { closeModal?: () => void }) => {
  const { t } = useTranslation();
  const pages = ["about", "services", "our_team"];

  return (
    <nav className="flex flex-col lg:flex-row lg:gap-3">
      {pages.map((p) => (
        <a
          className="capitalize py-2"
          href={`#${p}`}
          onClick={closeModal}
          key={p}
        >
          {t(`${p}`)}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
