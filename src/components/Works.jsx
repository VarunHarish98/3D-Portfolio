import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, creator, links, links_blk } from "../assets";
import SectionWrapper from "../HOC/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { handleAnalyticsEvent } from "../analytics/google-analytics";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  hasLink,
  isBlack,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 12, scale: 1.02, speed: 450 }}
        className="group rounded-2xl bg-white/[0.04] backdrop-blur border border-white/10 sm:w-[350px] w-full overflow-hidden transition"
      >
        {/* Media */}
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* top controls */}
          <div className="absolute inset-0 m-3 flex flex-row justify-between gap-2">
            {hasLink && (
              <button
                type="button"
                aria-label={`${name} live demo`}
                title={`${name} live demo`}
                className="rounded-full w-8 h-8 flex items-center justify-center bg-black/50 ring-1 ring-white/20 backdrop-blur hover:bg-black/60 transition"
                onClick={() => {
                  window.open(
                    /^https?:\/\//.test(live_link) ? live_link : `https://${live_link}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                  handleAnalyticsEvent(name, `${name}_link_click`, "Project");
                }}
              >
                <img
                  src={isBlack ? links_blk : links}
                  alt=""
                  className="h-4 w-4 object-contain"
                />
              </button>
            )}

            <button
              type="button"
              aria-label={`${name} source code`}
              title={`${name} source code`}
              className="rounded-full w-8 h-8 flex items-center justify-center bg-black/70 ring-1 ring-white/20 hover:bg-black/80 transition"
              onClick={() => {
                window.open(
                  /^https?:\/\//.test(source_code_link) ? source_code_link : `https://${source_code_link}`,
                  "_blank",
                  "noopener,noreferrer"
                );
                handleAnalyticsEvent(name, `${name}_github_click`, "Project");
              }}
            >
              <img src={github} alt="" className="h-4 w-4 object-contain invert" />
            </button>
          </div>

          {/* subtle media overlay on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
        </div>

        {/* Body */}
        <div className="p-5">
          <h3 className="mt-1 text-white text-lg font-semibold leading-snug">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[15px] leading-6">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs ${tag.color} bg-white/[0.03] border border-white/10 px-2 py-1 rounded-full`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* bottom sheen accent */}
        <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />
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
          Selected projects that highlight how I design, build, and ship real features.
          Each card links to the code and a live demo where available.
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-16 flex flex-wrap gap-8 sm:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
