import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import SectionWrapper from "../HOC/SectionWrapper";
import { experiences } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
// import { exp } from "maath/dist/declarations/src/easing";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
      icon={
        <div>
          <img
            src={experience.icon}
            className="flex justify-center items-center object-contain"
          />
        </div>
      }
      className="text-black"
    >
      <h1 className="text-2xl font-bold">{experience.title}</h1>
      <h3 className="text-xl font-semibold">{experience.company_name}</h3>
      <br />
      <ul className="list-disc">
        {experience.points?.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard index={index} key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
