import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../HOC/SectionWrapper";
const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary border-2 flex rounded-[20px] min-h-[280px] justify-evenly items-center flex-col py-5 px-24"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="font-bold text-white text-[20px] text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl leading-[30px] text-[17px]"
      >
        I'm a Master's student in Computer Engineering at Stony Brook University
        with over 2 years of work experience as a Software Engineer at Accenture
        for AT&T. I'm skilled in Web Development with experience in Javascript
        and TypeScript, and expertise in Node.js, React.js. Used various
        technologies including MongoDB, Cassandra, Redis, Elastic Logstash
        Kibana, Docker and Kubernetes.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
