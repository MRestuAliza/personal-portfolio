import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiWeatherSunny, mdiWeatherNight } from "@mdi/js";
import { motion } from "framer-motion";

const NavMode = () => {
  const storedTheme = localStorage.getItem("mode") || "light";
  const [colorTheme, setColorTheme] = useState(storedTheme);

  useEffect(() => {
    if (colorTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("mode", colorTheme);
  }, [colorTheme]);

  const toggleTheme = () => {
    const newTheme = colorTheme === "dark" ? "light" : "dark";
    setColorTheme(newTheme);
  };

  return (
    <div>
      <motion.button className="items-center" onClick={toggleTheme} whileTap={{ y: -10 }}>
        <motion.div initial={{ rotate: colorTheme === "dark" ? 180 : 0 }} animate={{ rotate: colorTheme === "dark" ? 0 : 360 }} transition={{ duration: 0.5 }}>
          <Icon path={colorTheme === "dark" ? mdiWeatherSunny : mdiWeatherNight} size={1.3} className="darkMenu" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default NavMode;
