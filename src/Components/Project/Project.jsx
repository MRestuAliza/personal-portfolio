import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="pt-96">
      <span className="font-normal text-xl text-main dark:text-darktextsub tracking-[5px]">PORTFOLIO</span>
      <h1 className="font-bold text-4xl text-paragraph dark:text-white">Recent Work</h1>
      <motion.div
        className="flex md:flex-row justify-center mt-12 md:space-x-6"
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
        <div className="container mx-auto p-10 md:p-20 grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-y-10 transform duration-500">
          <motion.article className="shadow-md dark:shadow-white mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-lg cursor-pointer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <a href="https://github.com/MRestuAliza/Lyrify-v1.git" target="_blank">
              <div className="p-7 my-auto pb-12">
                <h2 className="text-2xl font-semibold text-paragraph dark:text-white">Lyrify</h2>
                <p className="text-xl font-light leading-relaxed text-gray-400 dark:text-white mt-5">
                  Lyrify inspired from Spotify Share Lyrics, Lyrify is a tool that you can share lyrics from your favorite song and you can put which part you like and share it to your friend, or your social media account you have.
                </p>
              </div>
            </a>
          </motion.article>
          <motion.article className="shadow-md dark:shadow-white mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-lg cursor-pointer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="p-7 my-auto pb-12">
              <h2 className="text-2xl font-semibold text-paragraph dark:text-white">Coming Soon</h2>
              <p className="text-xl font-light leading-relaxed text-gray-400 dark:text-white mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe autem nobis inventore repudiandae unde atque eum voluptas nemo. Exercitationem, nulla laborum! Unde odit iusto, aspernatur totam commodi voluptas inventore ea!
              </p>
            </div>
          </motion.article>
          <motion.article className="shadow-md dark:shadow-white mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-lg cursor-pointer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="p-7 my-auto pb-12">
              <h2 className="text-2xl font-semibold text-paragraph dark:text-white">Coming Soon</h2>
              <p className="text-xl font-light leading-relaxed text-gray-400 dark:text-white mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe autem nobis inventore repudiandae unde atque eum voluptas nemo. Exercitationem, nulla laborum! Unde odit iusto, aspernatur totam commodi voluptas inventore ea!
              </p>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
