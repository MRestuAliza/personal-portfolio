import React from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import NavMode from "../NavButtonMode/NavMode";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div className="sticky top-0 z-50 bg-white dark:bg-[#232946]">
      <div className="flex items-center justify-between py-5 relative">
        <motion.h1 className="font-logo font-bold md:text-4xl text-2xl dark:text-white" whileTap={{ y: -10 }}>
          MRAA 🚀
        </motion.h1>
        <div className="flex space-x-5">
          <NavMode />
          <Icon path={mdiMenu} size={1.3} className="darkMenu" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
