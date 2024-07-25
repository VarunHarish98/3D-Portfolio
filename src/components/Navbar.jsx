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
import PDFViewer from "./PDFViewer";
import Modal from "./Modal";
// import Modals from "./Modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const openLink = (path) => window.open(filePath[path]);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  const [pdfView, setPdfView] = useState(true);

  const handleResumeClick = () => {
    openModal()
    handleAnalyticsEvent("Resume", `Resume_click`, "Navbar");
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <nav
      className={`${styles.paddingX} w-full flex absolute items-center bg-primary top-0 z-20`}
    >
      <div className="flex z-10 justify-between items-center max-w-7xl w-full mx-auto">
        <Link
          to={"/"}
          className="flex -ml-4 sm:ml-0 sm:gap-2 items-center"
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
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
            </Modal>
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
        <div className="sm:hidden flex flex-1 gap-2 justify-end items-center">
          <button
            className="bg-[#915eff] text-[10px] py-2 px-3 mt-1 rounded-xl"
            onClick={() => {
              openLink("drive");
              handleAnalyticsEvent("Resume", `Resume_click`, "Navbar");
            }}
          >
            Resume
          </button>
          {socialLinks.map((socialLink) => (
            <div key={socialLink.id} className="w-8 h-8 mt-1">
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
                className="w-5 mt-1"
              />
            </div>
          ))}
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
          <ul className="gap-4 flex flex-col justify-end items-start">
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
