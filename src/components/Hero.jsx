import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    // Background
    <section className="relative h-screen w-full mx-auto">
      <div
        className={`${styles.paddingX} flex flex-row inset-0 gap-5 mx-auto items-start absolute top-[30px]`}
      >
        <div className="flex flex-col mt-5 justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Varun</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop 3D visuals user <br className="sm:block hidden" />{" "}
            interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute flex justify-center bottom-32 xs:bottom-10 items-center w-full">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary rounded-full mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
