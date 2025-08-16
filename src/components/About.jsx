import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../HOC/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4 max-w-4xl">
        <p className="text-secondary text-[18px] leading-[32px]">
          I have completed my Master's in Computer Engineering at Stony Brook
          University with nearly 3 years of work experience as a Software
          Engineer at Accenture for AT&T and Research Assistant at Stont Brook
          University. I'm skilled in Web Development with experience in
          Javascript and TypeScript, and expertise in Node.js, React.js. Used
          various technologies including MongoDB, Cassandra, Redis, Elastic
          Logstash Kibana, Docker and Kubernetes.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="mb-3 text-white text-[18px] font-semibold">
            When I’m not coding
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-300" />
              Following every Arsenal match (yes, I’m one of those fans 😅).
            </li>
            <li className="flex gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-300" />
              Learning tennis — still more double faults than aces.
            </li>
            <li className="flex gap-3">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-300" />
              Long walks with a podcast and too many coffee stops.
            </li>
          </ul>
        </div>

        <p className="mt-6 text-secondary text-[16px] leading-[30px]">
          That’s me in short. Always happy to chat about football, design
          details, or the best tennis racquet for beginners.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
