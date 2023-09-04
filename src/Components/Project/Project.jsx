import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="mt-96">
      <span className="font-normal text-xl text-main dark:text-darktextsub tracking-[5px]">PORTFOLIO</span>
      <h1 className="font-bold text-4xl text-paragraph dark:text-white">Recent Work</h1>
      <div className="flex flex-col md:flex-row justify-center mt-12 md:space-x-6">
        <motion.div
          className="flex flex-col gap-10 lg:flex-row lg:flex-wrap"
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
          <div className="basis-1/3 flex-1 ">
            {/* <img className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" src="/src/assets/test.png" /> */}
            <h1 className="text-paragraph dark:text-white font-bold md:text-2xl text-xl text-center">I'm sorry, but I haven't started any projects at the moment</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
