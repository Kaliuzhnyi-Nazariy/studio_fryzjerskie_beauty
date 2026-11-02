import { MdClose } from "react-icons/md";
import Settings from "./Header/Settings";
import Navigation from "./Header/Navigation";
import MakeAnAppointment from "./Header/MakeAnAppointment";
import { useTranslation } from "react-i18next";

const Menu = ({
  theme,
  isOpen,
  closeModal,
  changeTheme,
}: {
  theme: "light" | "dark";
  isOpen: boolean;
  closeModal: () => void;
  changeTheme: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isOpen
          ? "bg-text/30 pointer-events-auto"
          : "bg-transparent pointer-events-none"
      }`}
      onClick={closeModal}
      aria-hidden={!isOpen}
    >
      <div
        id={t("main-mob_navigation")}
        role="dialog"
        aria-modal="true"
        aria-label={t("mob_navigation")}
        className={`w-4/5 min-[425px]:w-3/5 bg-bg text-text p-5 h-screen absolute right-0 transition-all duration-300 flex flex-col md:w-2/5 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Settings theme={theme} changeTheme={changeTheme} key={`${isOpen}`} />
        <button
          type="button"
          className="absolute -translate-y-1/2 top-9 right-4.5 size-5 flex items-center justify-center"
          onClick={closeModal}
          aria-label={t("close-menu")}
          tabIndex={isOpen ? 0 : -1}
        >
          <MdClose className="size-full" />
        </button>
        <div className="flex flex-col mt-5 flex-1">
          <Navigation closeModal={closeModal} isOpen={isOpen} />

          <div className="mt-auto md:hidden">
            <MakeAnAppointment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
