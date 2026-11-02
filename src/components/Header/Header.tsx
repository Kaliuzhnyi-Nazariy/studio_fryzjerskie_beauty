import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../Menu";
import Settings from "./Settings";
import Logo from "../../svg/Logo";
import Navigation from "./Navigation";
import MakeAnAppointment from "./MakeAnAppointment";
import HeaderLayout from "../../layouts/HeaderLayout";
import { useTranslation } from "react-i18next";

const Header = ({
  changeTheme,
  theme,
}: {
  changeTheme: () => void;
  theme: "light" | "dark";
}) => {
  const { t } = useTranslation();

  const [modalOpen, setMenuOpen] = useState(false);

  const openModal = () => setMenuOpen(true);
  const closeModal = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="py-4 border-b border-text/10 bg-bg shadow-sm sticky top-0 z-40 transition-colors duration-200">
      <HeaderLayout>
        <div className="flex items-center justify-between w-full relative">
          <Logo
            fill={`var(--text-primary)`}
            styles="h-10 max-md:mx-auto lg:h-12 shrink-0 flex items-center"
          />

          <div className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8">
            <Navigation />

            <div className="h-5 w-px bg-text/10" />

            <Settings changeTheme={changeTheme} theme={theme} />
            <MakeAnAppointment />
          </div>

          <div className="flex items-center gap-3 absolute -translate-y-1/2 top-1/2 right-0 lg:hidden">
            <div className="hidden md:block">
              <MakeAnAppointment />
            </div>
            <button
              type="button"
              onClick={openModal}
              className=" p-2 rounded-full hover:bg-text/5 active:scale-95 transition-all flex items-center justify-center "
              aria-label={t("open_menu")}
              aria-expanded={modalOpen}
              aria-controls="mobile-navigation-menu"
            >
              <GiHamburgerMenu className="size-5 text-text" />
            </button>
          </div>
        </div>
      </HeaderLayout>

      <Menu
        theme={theme}
        closeModal={closeModal}
        isOpen={modalOpen}
        changeTheme={changeTheme}
      />
    </header>
  );
};

export default Header;
