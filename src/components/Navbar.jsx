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

const openLink = (path) => window.open(filePath[path]);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} w-full flex absolute items-center bg-primary top-0 z-20`}
    >
      <div className="flex z-10 justify-between items-center max-w-7xl w-full mx-auto">
        <Link
          to={"/"}
          className="flex gap-0 sm:gap-2 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
          <p className="text-white font-bold text-[18px] flex cursor-pointer ">
            {firstName} &nbsp;
            <span className="sm:block hidden">
              {middleName} {lastName}
            </span>
          </p>
        </Link>
        <ul className="hidden sm:flex gap-10 flex-row">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px]`}
              onClick={() => {
                setActive(link.title);
                handleAnalyticsEvent(
                  link.title,
                  `${link.title}_click`,
                  "Navbar"
                );
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <div className="flex gap-4">
            <button
              className="bg-[#915eff] py-2 px-4 rounded-xl -mt-2"
              onClick={() => {
                openLink("drive");
                handleAnalyticsEvent("Resume", `Resume_click`, "Navbar");
              }}
            >
              Resume
            </button>
            <div className="flex gap-2 -mt-1 cursor-pointer ">
              {socialLinks.map((socialLink) => (
                <div key={socialLink.id} className="w-8 h-8">
                  <img
                    src={`${socialLink.title}`}
                    onClick={() => {
                      openLink(socialLink.id);
                      handleAnalyticsEvent(
                        socialLink.id,
                        `${socialLink.id}_url_click`,
                        socialLink.id
                      );
                    }}
                    alt="socialLink"
                  />
                </div>
              ))}
            </div>
          </div>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[18px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } absolute sm:hidden right-0 text-white mx-4 my-2 z-10 top-20 black-gradient px-8 rounded-xl p-4 text-[14px]`}
        >
          <ul className="gap-4 flex flex-col  justify-end items-start">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[14px]`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
