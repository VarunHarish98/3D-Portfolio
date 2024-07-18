import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../HOC/SectionWrapper";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have been learning</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2> <br />
      </motion.div>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
        {technologies.map((tech, index) => (
          <div className={`w-28 h-28 items-center flex  flex-col items-center`} key={index}>
            <BallCanvas icon={tech.icon} />
            {`${tech.name.substring(0,1)?.toUpperCase()}${tech.name.substring(1)}`}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
