import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../HOC/SectionWrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { education } from "../constants";

const EducationCard = ({ edu, index }) => {
  return (
    <VerticalTimelineElement
      date={edu.date}
      contentStyle={{
        background: "transparent",
        color: "#fff",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.12)" }}
      iconStyle={{
        background: "transparent",
        boxShadow: "none",
      }}
      icon={
        <div className="relative flex h-full w-full items-center justify-center">
          {/* pulsing halo */}
          <span className="absolute inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 opacity-70 animate-ping" />
          <span className="absolute inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/20" />

          {/* clickable logo */}
          <a
            href={edu.collegeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/70 ring-1 ring-white/15 hover:ring-2 hover:ring-white/40 transition"
          >
            {/* College Icon */}
            <img
              src={edu.icon}
              alt={edu.school}
              className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
            />

            {/* External link indicator */}
            <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
              ↗
            </span>
          </a>
        </div>
      }
      contentClassName="!p-0"
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
          {edu.date}
        </div>

        {/* card body */}
        <div className="relative px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
              {edu.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              {edu.school}
              {edu.location ? (
                <span className="text-gray-500"> • {edu.location}</span>
              ) : null}
            </p>
          </div>

          {/* optional quick facts row (shows only if present in your data) */}
          {(edu.degree || edu.gpa || edu.focus) && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-300">
              {edu.degree && (
                <span className="rounded-full border border-white/15 px-2 py-1">
                  {edu.degree}
                </span>
              )}
              {edu.focus && (
                <span className="rounded-full border border-white/15 px-2 py-1">
                  {edu.focus}
                </span>
              )}
              {edu.gpa && (
                <span className="rounded-full border border-white/15 px-2 py-1">
                  GPA {edu.gpa}
                </span>
              )}
            </div>
          )}

          {/* courses / highlights list */}
          {Array.isArray(edu.courses) && edu.courses.length > 0 && (
            <ul className="mt-4 space-y-2">
              {edu.courses.map((course, i) => (
                <li
                  key={`${index}-c-${i}`}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gray-300" />
                  <span className="leading-6">{course}</span>
                </li>
              ))}
            </ul>
          )}

          {/* optional link (e.g., thesis / site) */}
          {edu.link && (
            <a
              href={edu.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-1.5 text-xs text-gray-200 transition hover:bg-white/10"
            >
              View details →
            </a>
          )}
        </div>

        {/* hover line accent */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70 transition group-hover:opacity-95" />
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-6">
        <VerticalTimeline lineColor="rgba(255,255,255,0.12)">
          {education.map((edu, index) => (
            <EducationCard index={index} key={index} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
