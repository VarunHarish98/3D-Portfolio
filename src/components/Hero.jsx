import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { handleAnalyticsEvent } from "../analytics/google-analytics";
import { useFeatureFlagEnabled } from "posthog-js/react";

// Optional: put these in a constants file if you prefer
const RESUME_URL =
  "https://drive.google.com/file/d/1jFVtWq87NFqBbOvXX6fxcSCS4lPLZkuv/view?usp=sharing";
const SOCIAL = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/VarunHarish98",
    icon: "/src/assets/github.png",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/varun-harish1998",
    icon: "/src/assets/linkedin.png",
  },
];

// Simple in-file data for the new strips
const IMPACT = [
  ["150K+", "DAU on chatbot UI"],
  ["35%", "faster builds"],
  ["WCAG", "accessibility shipped"],
  ["1.2M+", "API calls / month"],
];

const TRUST_LOGOS = [
  { alt: "Accenture", src: "/src/assets/company/accenture.png" },
  { alt: "Stony Brook University", src: "/src/assets/sbu.png" },
];

const Hero = () => {
  const render = useFeatureFlagEnabled("render-hero");

  // Rotating sub-taglines for instant breadth
  const taglines = useMemo(
    () => [
      "I build performant frontends.",
      "I craft AI-integrated UIs.",
      "I scale apps to 150K+ DAUs.",
      "I care about accessibility & UX.",
    ],
    []
  );
  const [tagIndex, setTagIndex] = useState(0);

  // modal state
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const [caseStudyTitle, setCaseStudyTitle] = useState("");
  const [caseStudyRepo, setCaseStudyRepo] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setTagIndex((i) => (i + 1) % taglines.length);
    }, 2000);
    return () => clearInterval(id);
  }, [taglines.length]);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen w-full mx-auto overflow-hidden">
      {/* Content rail */}
      <div
        className={`${styles.paddingX} inset-x-0 top-16 sm:top-20 md:top-28 mx-auto max-w-7xl md:absolute`}
      >
        <div className="flex flex-col-reverse gap-6 sm:gap-8 md:flex-row md:gap-10 lg:gap-14">
          <div className="flex flex-row gap-3 sm:gap-4 md:min-w-[520px] lg:min-w-[600px]">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-300" />
              <div className="w-[2px] h-24 sm:h-28 md:h-64 bg-gradient-to-b from-gray-400/70 to-transparent" />
            </div>

            {/* Headings + CTAs - Not component - ToDo */}
            <div>
              <h1
                className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight`}
              >
                Hi, I&apos;m <span className="text-white">Varun</span>
              </h1>

              {/* Rotating tagline */}
              <div className="mt-2.5 sm:mt-3 min-h-[32px] sm:min-h-[38px] md:min-h-[44px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={tagIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className={`${styles.heroSubText} text-gray-300 text-[15px] sm:text-base md:text-lg`}
                  >
                    {taglines[tagIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* CTAs */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
                <a
                  href="#work"
                  onClick={() =>
                    handleAnalyticsEvent("CTA", "primary_view_work", "Hero")
                  }
                  className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-white px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-[15px] font-semibold text-black transition hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  See my work
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    handleAnalyticsEvent("CTA", "resume_click", "Hero")
                  }
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-[15px] font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  View resume
                </a>

                {/* Social (monochrome) */}
                <div className="ml-1 flex items-center gap-2 sm:gap-2.5">
                  {SOCIAL.map((s) => (
                    <button
                      key={s.id}
                      aria-label={s.label}
                      onClick={() => {
                        window.open(s.href, "_blank");
                        handleAnalyticsEvent("Social", `${s.id}_click`, "Hero");
                      }}
                      className="group inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                    >
                      <img
                        src={s.icon}
                        alt=""
                        className="h-4 w-4 sm:h-4.5 sm:w-4.5"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Impact stats strip */}
              <ul className="mt-4 sm:mt-5 flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 text-[12px] sm:text-[13px] md:text-sm text-gray-300">
                {IMPACT.map(([k, v]) => (
                  <li key={k} className="flex items-baseline gap-2">
                    <span className="text-white font-semibold">{k}</span>
                    <span className="text-gray-400">{v}</span>
                  </li>
                ))}
              </ul>

              {/* Trust bar (grayscale logos) */}
              <div className="mt-4 flex items-center gap-4 sm:gap-5 md:gap-6 opacity-80">
                {TRUST_LOGOS.map((l) => (
                  <img
                    key={l.alt}
                    src={l.src}
                    alt={l.alt}
                    className="h-4 sm:h-5 md:h-6 grayscale invert opacity-70"
                    onClick={() =>
                      handleAnalyticsEvent(
                        "Trust",
                        `${l.alt}_logo_view`,
                        "Hero"
                      )
                    }
                  />
                ))}
              </div>

              {/* Featured project cards (inline) */}
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  setCaseStudyTitle("GenAI Chatbot Platform");
                  setCaseStudyRepo("https://github.com/VarunHarish98");
                  setShowCaseStudy(true);
                  handleAnalyticsEvent(
                    "Card",
                    "featured_project_click",
                    "Hero"
                  );
                }}
                className="group mt-4 sm:mt-5 inline-block align-top"
              >
                <div className="w-full max-w-full sm:max-w-[21rem] md:max-w-md lg:max-w-lg rounded-2xl border border-white/10 p-4 sm:p-5 transition hover:bg-white/5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-[15px] sm:text-base">
                      GenAI Chatbot Platform
                    </h3>
                    <span className="text-[11px] sm:text-xs text-gray-400 group-hover:text-gray-300">
                      Case study →
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-300">
                    Scaled from MVP to 150K+ DAU; cut backend load by 80% via
                    WebSockets.
                  </p>
                  <div className="mt-2.5 text-[11px] sm:text-xs text-gray-400">
                    React · Node · WebSockets · Accessibility
                  </div>
                </div>
              </a>

              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  setCaseStudyTitle("Research Assistant — SBU");
                  setCaseStudyRepo("");
                  setShowCaseStudy(true);
                  handleAnalyticsEvent(
                    "Card",
                    "featured_project_click_research",
                    "Hero"
                  );
                }}
                className="group mt-4 sm:mt-5 inline-block md:ml-3 align-top"
              >
                <div className="w-full max-w-full sm:max-w-[21rem] md:max-w-md lg:max-w-lg rounded-2xl border border-white/10 p-4 sm:p-5 transition hover:bg-white/5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-[15px] sm:text-base">
                      Research Assistant — SBU
                    </h3>
                    <span className="text-[11px] sm:text-xs text-gray-400 group-hover:text-gray-300">
                      Case study →
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-300">
                    LLM-based clinical assistant using React microfrontends &
                    Node; secure JWT auth; responsive UI.
                  </p>
                  <div className="mt-2.5 text-[11px] sm:text-xs text-gray-400">
                    React · Node · Microfrontends · JWT
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right column: 3D canvas (optional via feature flag) */}
          <div className="relative -mx-2 sm:-mx-4 mb-4 h-[200px] sm:h-[240px] md:h-[380px] lg:h-[520px] flex-1 md:mx-0 md:mb-0">
            {render}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 sm:bottom-9 left-0 right-0 flex w-full items-center justify-center">
        <a
          href="#about"
          aria-label="Scroll to about section"
          onClick={() =>
            handleAnalyticsEvent("Floating Icon", "floating_icon_click", "Hero")
          }
        >
          <div className="flex h-12 w-8 sm:h-14 sm:w-9 items-start justify-center rounded-3xl border-2 border-gray-400/70 p-2">
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-[2px] h-2.5 w-2.5 rounded-full bg-gray-300"
            />
          </div>
        </a>
      </div>

      {/* Subtle radial fade at edges (keeps focus on content) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_75%_28%,rgba(255,255,255,0.05),transparent)]" />

      {/* Case Study Modal (you pasted this component already) */}
      <CaseStudyModal
        open={showCaseStudy}
        onClose={() => setShowCaseStudy(false)}
        title={caseStudyTitle}
        repoUrl={caseStudyRepo}
      />
    </section>
  );
};

export default Hero;

// export default Hero;

const CaseStudyModal = ({ open, onClose, title, repoUrl }) => {
  // close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const EMAIL = "varunharish98@gmail.com";
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Case study request — ${title}`
  )}&body=${encodeURIComponent(
    `Hi Varun,\n\nI’d love to read the ${title} case study or get a quick walkthrough.\n\n—\nName:\nCompany:\nRole:\n`
  )}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 6 }}
            transition={{ duration: 0.18 }}
            className="relative z-[61] w-[92vw] max-w-md rounded-2xl border border-white/12 bg-white/[0.06] p-5 sm:p-6 text-white shadow-xl"
          >
            {/* top row */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/70 ring-1 ring-white/15">
                  <span className="text-sm font-bold">WIP</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold leading-6">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Case study is in progress
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-gray-400 hover:text-gray-200 hover:bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* body */}
            <div className="mt-4 text-sm text-gray-200">
              I’m polishing a proper write-up with metrics, decisions, and
              learnings. Want a quick walkthrough or early access?
            </div>

            {/* actions */}
            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <a
                href={mailto}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/70 bg-white px-4 py-2.5 font-semibold text-black hover:brightness-90 transition"
              >
                ✉️ Email me for a walkthrough
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
