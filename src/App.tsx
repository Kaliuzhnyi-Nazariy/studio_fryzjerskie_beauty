import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About";
import Services from "./components/Services";
import OurTeam from "./components/OutTeam";
import "keen-slider/keen-slider.min.css";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

export type Theme = "dark" | "light";

function App() {
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

  return (
    <div className="bg-bg transition-colors duration-200 w-full h-screen flex flex-col text-text">
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
