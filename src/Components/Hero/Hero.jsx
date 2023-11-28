import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero pt-[15rem]">
      <div className="md:flex md:items-center md:space-x-60">
        <div className=" text-center md:text-left justify-center">
          <h3 className=" font-medium text-lg text-paragraph dark:text-[#b8c1ec] md:text-2xl">Hi there, my name is</h3>
          <h1 className="font-bold text-3xl text-main dark:text-[#fffffe] mb-1 md:text-5xl ">MUH. RESTU ALIZA AKBAR</h1>
          <h2 className="font-normal text-xl text-paragraph mb-5 dark:text-[#b8c1ec] max-w-3xl md:text-3xl">
            Im a <span className="text-main dark:text-[#ffffff] font-extrabold">student</span> and i just try to build something cool on the <span className="text-main dark:text-[#fffffe] font-extrabold">front-end & backend</span> for the
            website.
          </h2>
          <motion.button className="border p-3 dark:text-white rounded-lg text-main font-bold border-main dark:border-white border-2" whileTap={{ y: -5 }}>
            Download resume
          </motion.button>
          <div className="flex justify-center md:justify-normal pt-2 space-x-5">
            <div class="hs-tooltip  [--placement:bottom]">
              <a
                href="https://www.linkedin.com/in/muh-restu-aliza-akbar-751645243/"
                target="_blank"
                class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 "
              >
                <Icon path={mdiLinkedin} size={1.7} className="opacity-50" />
                <span
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                  role="tooltip"
                >
                  MRestuAliza
                </span>
              </a>
            </div>

            <div class="hs-tooltip inline-block [--placement:bottom]">
              <a href="https://github.com/MRestuAliza" target="_blank" class="hs-tooltip-toggle w-10 h-10 inline-flex justify-center items-center gap-2 rounded-full  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ">
                <Icon path={mdiGithub} size={1.7} className="opacity-50" />
                <span
                  class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                  role="tooltip"
                >
                  MRestuAliza
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-12 mx-20 space-y-10 md:space-y-0 md:space-x-36">
          <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 512 512" className="stars text-[#232946] fill-current rotate-svg dark:text-white">
            <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 512 512" className="stars2 text-main fill-current rotate-svg dark:text-[#FFE234]">
            <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
