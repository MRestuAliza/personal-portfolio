import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="pt-[19rem]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <div className="space-y-5">
        <h1 className="text-center top-24 text-paragraph font-bold text-4xl font-extrabold dark:text-white">About Me</h1>
        <img src="profile1-2.jpg" alt="" className="rounde rounded-full w-32 h-32 border border-4 border-main dark:border-darktextsub mx-auto mt-12" />
        <p className="dark:text-white text-lg font-normal text-justify md:text-center md:text-2xl max-w-3xl mx-auto">
          Hi, i'm Muh Restu Aliza Akbar but you can call me Restu and i just try to build something cool on the front-end & backend for the website. This is my site, MRAA, where I can share whatever side projects I've been working on.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
