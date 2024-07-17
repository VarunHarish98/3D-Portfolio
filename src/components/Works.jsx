import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, creator, links } from "../assets";
import SectionWrapper from "../HOC/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { max } from "three/examples/jsm/nodes/Nodes.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
      >
        <div className="h-[230px] relative w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex flex-row justify-between m-3 gap-2">
            <div
              className="rounded-full w-8 h-8 flex cursor-pointer"
              onClick={() => window.open(live_link, "blank")}
            >
              <img src={links} alt="github_link" className="object-contain" />
            </div>
            <div
              className="rounded-full w-8 h-8 bg-black flex cursor-pointer"
              onClick={() => window.open(source_code_link, "blank")}
            >
              <img src={github} alt="github_link" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-2 font-bold">{name}</div>
          <div className="mt-2 text-secondary">{description}</div>
          <div className="flex mt-2">
            {tags.map((tag, index) => {
              return (
                <div key={index} className={`${tag.color}`}>
                  #{tag.name} &nbsp;
                </div>
              );
            })}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2> <br />
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve problems, work with differnet technologies and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-20 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project}></ProjectCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
