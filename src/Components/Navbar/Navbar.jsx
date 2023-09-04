import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import NavMode from "../NavButtonMode/NavMode";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.div className="sticky top-0 z-50 bg-white dark:bg-[#232946]">
      <div className="flex items-center justify-between py-5 relative">
        <motion.h1 className="font-logo font-bold md:text-4xl text-2xl dark:text-white" whileTap={{ y: -10 }}>
          MRAA 🚀
        </motion.h1>
        <div className="flex space-x-5 relative">
          <NavMode />
          <Icon path={mdiMenu} size={1.3} className="darkMenu cursor-pointer" onClick={toggleDropdown} />

          {isDropdownOpen && (
            <motion.div className="absolute px-1 py-2 top-full right-0 mt-2 w-48 bg-white dark:bg-[#232946]  shadow-lg rounded-md z-10 flex flex-col items-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 20 }}>
              <a className="block w-full px-4 py-2 font-bold text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" href="#home">
                Home
              </a>
              <a className="block w-full px-4 py-2 font-bold text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" href="#about">
                About
              </a>
              <a className="block w-full px-4 py-2 font-bold text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" href="#portfolio">
                Portfolio
              </a>
              <a className="block w-full px-4 py-2 font-bold text-gray-800 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700" href="#contact">
                Contact
              </a>
              <motion.a className="block w-full px-4 py-2 dark:text-white text-main text-sm font-bold text-sm dark:border-white" href="#" whileTap={{ y: -5 }}>
                Download resume
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
