import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../HOC/SectionWrapper";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { education } from "../constants";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ edu, index }) => {
  return (
    <VerticalTimelineElement
      date={edu.date}
      contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
      iconStyle={{ background: `${edu.iconBg}`, color: "#000000" }}
      icon={
        <div className="flex justify-center items-center md:mt-1">
          <img
            src={edu.icon}
            className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain  `}
          />
        </div>
      }
    >
      <h1 className="text-2xl font-bold">{edu.title}</h1>
      <h3 className="text-xl font-semibold">{edu.school}</h3>
      <br />
      <ul className="list-disc">
        {edu.courses?.map((course) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <div>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard index={index} key={index} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
