// Contact.jsx — replaces EarthCanvas with an interactive business card (flip/tap)
// Drop-in: keeps SectionWrapper + slideIn + styles + analytics

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../HOC/SectionWrapper";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { handleAnalyticsEvent } from "../analytics/google-analytics";

// ---------- Config ----------
const EMAIL = "varunharish98@gmail.com";
const RESUME_URL =
  "https://drive.google.com/file/d/1jFVtWq87NFqBbOvXX6fxcSCS4lPLZkuv/view?usp=sharing";
const LINKEDIN = "https://www.linkedin.com/in/varun-harish1998";
const GITHUB = "https://github.com/VarunHarish98";

// ---------- Helper ----------
const mailtoHref = (() => {
  const subject = encodeURIComponent(
    "Opportunity for Varun — Frontend Engineer"
  );
  const body = encodeURIComponent(
    "Hi Varun,\n\nI came across your portfolio and would love to connect about a role.\n\n—\nCompany:\nRole:\nWhy you:\n\nThanks!"
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
})();

// ---------- Interactive Business Card ----------
const BusinessCard = ({
  name = "Varun Harish",
  role = "Frontend Engineer",
  location = "NY/CA",
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="h-full w-full flex items-center justify-center p-3">
      <motion.div
        whileHover={{ rotateY: 180 }}
        whileTap={{ rotateY: 180 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[240px] w-[360px] sm:h-[260px] sm:w-[420px] lg:h-[300px] lg:w-[480px] rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
        aria-label="Interactive business card"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        // onTouchStart={() => setFlipped((f) => !f)}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/12 bg-white/[0.05] backdrop-blur p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* soft shine */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(800px_200px_at_-10%_-10%,rgba(255,255,255,0.08),transparent)]" />
          {/* top row */}
          <div className="flex items-center justify-between">
            {/* monogram */}
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-black/70 ring-1 ring-white/15">
              <span className="text-xl font-bold text-white">V</span>
            </div>
            {/* status pill */}
            <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] text-gray-300">
              Open to opportunities
            </span>
          </div>

          {/* name / role */}
          <div>
            <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
              {name}
            </h3>
            <p className="mt-1 text-gray-300">{role}</p>
            <p className="mt-1 text-gray-500 text-sm">{location}</p>
          </div>

          {/* footer hint */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Hover / tap to flip</span>
            <span className="opacity-80">↻</span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur p-6 flex flex-col"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          {/* shine */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(800px_200px_at_110%_0%,rgba(255,255,255,0.08),transparent)]" />

          <h4 className="text-white text-lg font-semibold">Let’s connect</h4>
          <p className="mt-1 text-gray-400 text-sm">Quick actions—no forms.</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="mailto:varunharish98@gmail.com"
              onClick={() =>
                handleAnalyticsEvent("Contact", "email_click", "Card")
              }
              className="rounded-xl border border-white/70 bg-white px-4 py-2.5 text-center font-semibold text-black hover:brightness-90 transition"
              aria-label="Email Varun"
              title="Email Varun"
            >
              ✉️ Email
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleAnalyticsEvent("Contact", "resume_click", "Card")
              }
              className="rounded-xl border border-white/25 px-4 py-2.5 text-center font-semibold text-white hover:bg-white/10 transition"
              aria-label="View resume"
              title="View resume"
            >
              📄 Resume
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleAnalyticsEvent("Contact", "linkedin_click", "Card")
              }
              className="rounded-xl border border-white/25 px-4 py-2.5 text-center font-semibold text-white hover:bg-white/10 transition"
              aria-label="Open LinkedIn"
              title="Open LinkedIn"
            >
              in LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleAnalyticsEvent("Contact", "github_click", "Card")
              }
              className="rounded-xl border border-white/25 px-4 py-2.5 text-center font-semibold text-white hover:bg-white/10 transition"
              aria-label="Open GitHub"
              title="Open GitHub"
            >
              GH GitHub
            </a>
          </div>

          <div className="mt-auto pt-4 text-xs text-gray-400 flex items-center justify-between">
            <span className="truncate">{EMAIL}</span>
            <span className="opacity-80">↩ Flip back</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ---------- Contact Section (with Business Card on the right) ----------
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 overflow-hidden">
      {/* Left: copy that converts + primary actions */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>

        <p className="mt-4 text-secondary text-[16px] leading-[28px] max-w-xl">
          I’m open to roles and collaborations. The fastest way to reach me is
          email. You can also skim my resume or connect on LinkedIn/GitHub.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:varunharish98@gmail.com"
            onClick={() =>
              handleAnalyticsEvent("Contact", "email_click", "CTA")
            }
            className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-white px-5 py-3 font-semibold text-black transition hover:brightness-90"
          >
            ✉️ Email me
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              handleAnalyticsEvent("Contact", "resume_click", "CTA")
            }
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            📄 View resume
          </a>
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(EMAIL);
                handleAnalyticsEvent("Contact", "copy_email", "CTA");
              } catch {}
            }}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Copy email
          </button>
        </div>

        <div className="mt-6 text-xs text-gray-400">
          I typically reply within a day.
        </div>
      </motion.div>

      {/* Right: Interactive Business Card */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="md:flex-1 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl flex items-center justify-center"
      >
        <BusinessCard />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
