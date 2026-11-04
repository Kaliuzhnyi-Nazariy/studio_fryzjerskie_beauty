import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import "keen-slider/keen-slider.min.css";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

export type Theme = "dark" | "light";

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("app-theme") as Theme) || "light";
  });

  const changeTheme = () => {
    const chosenTheme = theme === "dark" ? "light" : "dark";
    setTheme(chosenTheme);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }

    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const salonSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: "Studio Fryzjerskie Beauty",
    image: "https://studio-fryzjerskie-beauty.vercel.app",
    url: "https://studio-fryzjerskie-beauty.vercel.app/",
    telephone: "+48508141412",
    description: t("description"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Grunwaldzka 16T",
      addressLocality: "Zabrze",
      postalCode: "41-800",
      addressCountry: "PL",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <div className="bg-bg transition-colors duration-200 w-full h-screen flex flex-col text-text">
      <title>Studio Fryzjerskie Beauty</title>
      <meta name="description" content={t("description")} />
      <link
        rel="canonical"
        href="https://studio-fryzjerskie-beauty.vercel.app"
      />

      <script type="application/ld+json">{JSON.stringify(salonSchema)}</script>

      <Header theme={theme} changeTheme={changeTheme} />
      <div className="flex flex-col flex-1 overflow-y-auto scroll-smooth  scrollbar-track-transparent">
        <main>
          <About />
          <Services />
          <OurTeam />
          <Appointment />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
