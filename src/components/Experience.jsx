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

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      contentStyle={{ background: "transparent", color: "#fff", boxShadow: "none", padding: 0 }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.12)" }}
      iconStyle={{ background: "transparent", boxShadow: "none" }}
      icon={
        <div className="relative flex h-full w-full items-center justify-center">
          {/* pulsing halo */}
          <span className="absolute inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 opacity-70 animate-ping" />
          <span className="absolute inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/20" />
          <div className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/70 ring-1 ring-white/15">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain grayscale invert"
            />
          </div>
        </div>
      }
      contentClassName="!p-0"
      className="text-black"
    >
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.05 * (index || 0) }}
        viewport={{ once: true, margin: "-40px" }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
      >
        {/* soft vignette / shine */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(255,255,255,0.06),transparent)]" />

        {/* date badge */}
        <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] text-gray-300">
          {experience.date}
        </div>

        {/* body */}
        <div className="relative px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
              {experience.title}
            </h1>
            <h3 className="text-gray-300 text-sm sm:text-base">
              {experience.company_name}
              {experience.location ? (
                <span className="text-gray-500"> • {experience.location}</span>
              ) : null}
            </h3>
          </div>

          {/* quick facts row — optional fields */}
          {(experience.employmentType || experience.skills) && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-300">
              {experience.employmentType && (
                <span className="rounded-full border border-white/15 px-2 py-1">
                  {experience.employmentType}
                </span>
              )}
              {Array.isArray(experience.skills) &&
                experience.skills.slice(0, 4).map((s, i) => (
                  <span
                    key={`skill-${i}`}
                    className="rounded-full border border-white/15 px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
            </div>
          )}

          {/* bullet points */}
          {Array.isArray(experience.points) && experience.points.length > 0 && (
            <ul className="mt-4 space-y-2">
              {experience.points.map((point, i) => (
                <li
                  key={`${index}-pt-${i}`}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gray-300" />
                  <span className="leading-6">{point}</span>
                </li>
              ))}
            </ul>
          )}

          {/* optional external link (case study, site) */}
          {experience.link && (
            <a
              href={/^https?:\/\//.test(experience.link) ? experience.link : `https://${experience.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-1.5 text-xs text-gray-200 transition hover:bg-white/10"
              onClick={() => {
                /* optional: analytics hook */
              }}
            >
              View case study ↗
            </a>
          )}
        </div>

        {/* hover line accent */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70 transition group-hover:opacity-95" />
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-6">
        <VerticalTimeline lineColor="rgba(255,255,255,0.12)">
          {experiences.map((experience, index) => (
            <ExperienceCard index={index} key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
