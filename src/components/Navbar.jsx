import React, { useState } from "react";
import {
  filePath,
  firstName,
  lastName,
  middleName,
  navLinks,
  socialLinks,
} from "../constants";
import { logo, close, menu } from "../assets";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { handleAnalyticsEvent } from "../analytics/google-analytics";
// import VLogo from "../assets/v-logo.svg";

// opener kept the same as your codebase uses filePath map
export const openLink = (path) =>
  window.open(filePath[path], "_blank", "noopener,noreferrer");

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false); // mobile menu default closed

  const onNavClick = (title, id) => {
    setActive(title);
    handleAnalyticsEvent(title, `${title}_click`, "Navbar");
    if (open) setOpen(false);
    // anchor links
    const el = document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className={`${styles.paddingX} left-0 right-0 top-0 z-40`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-3">
        {/* Brand */}
        <Link
          to="/"
          className="group flex -ml-4 items-center gap-2 sm:ml-0"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Varun logo"
            className="h-12 w-12 object-contain"
          />
          <p className="hidden cursor-pointer text-[16px] font-semibold text-white sm:block">
            {firstName}{" "}
            <span className="text-gray-300">
              {middleName} {lastName}
            </span>
          </p>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 sm:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = active === link.title;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.title, link.id)}
                    className={`relative text-[15px] transition focus:outline-none focus:ring-2 focus:ring-white/50 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.title}
                    {/* active underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-full transition-opacity ${
                        isActive
                          ? "bg-white opacity-100"
                          : "opacity-0 group-hover:opacity-60"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Social + Resume */}
          {/* <div className="flex items-center gap-3">
            <button
              onClick={() => {
                openLink("drive");
                handleAnalyticsEvent("Resume", "Resume_click", "Navbar");
              }}
              className="inline-flex items-center justify-center rounded-xl border border-white/80 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Resume
            </button>

            <div className="ml-1 flex items-center gap-2">
              {socialLinks.map((s) => (
                <button
                  key={s.id}
                  aria-label={s.id}
                  onClick={() => {
                    openLink(s.id);
                    handleAnalyticsEvent(s.id, `${s.id}_url_click`, "Navbar");
                  }}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <img
                    src={`${s.title}`}
                    alt=""
                    className="h-4 w-4 grayscale invert"
                  />
                </button>
              ))}
            </div>
          </div> */}
        </div>

        {/* Mobile controls */}
        <div className="flex flex-1 items-center justify-end gap-2 sm:hidden">
          <button
            onClick={() => {
              openLink("drive");
              handleAnalyticsEvent("Resume", "Resume_click", "Navbar");
            }}
            className="rounded-lg border border-white/25 px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Resume
          </button>

          {socialLinks.map((s) => (
            <button
              key={s.id}
              aria-label={s.id}
              onClick={() => {
                openLink(s.id);
                handleAnalyticsEvent(s.id, `${s.id}_url_click`, "Navbar");
              }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <img
                src={`${s.title}`}
                alt=""
                className="h-4 w-4 grayscale invert"
              />
            </button>
          ))}

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <img
              src={open ? close : menu}
              alt="menu icon"
              className="h-[18px] w-[18px] object-contain"
            />
          </button>
        </div>
      </div>

      <div
        className={`sm:hidden ${
          open ? "block" : "hidden"
        } fixed left-0 right-0 top-[64px] z-40`}
      >
        <div className="mx-4 rounded-2xl border border-white/10 bg-black/70 p-4 shadow-soft">
          <ul className="flex flex-col gap-3 text-[15px]">
            {navLinks.map((link) => {
              const isActive = active === link.title;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.title, link.id)}
                    className={`w-full text-left transition focus:outline-none focus:ring-2 focus:ring-white/40 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* backdrop & divider */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40" />
      <div className="pointer-events-none absolute inset-x-0 top-[64px] -z-10 h-px bg-white/10 sm:top-[68px]" />
    </nav>
  );
};

export default Navbar;
