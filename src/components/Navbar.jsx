import React, { useState } from "react";
import { firstName, lastName, middleName, navLinks } from "../constants";
import { logo, close, menu } from "../assets";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center bg-primary top-0 z-20 py-5`}
    >
      <div className="flex justify-between items-center max-w-8xl w-full mx-auto">
        <Link
          to={"/"}
          className="flex gap-0 sm:gap-2 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
          <p className="text-white font-bold text-[18px] cursor-pointer ">
            {firstName}{" "}
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
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <img
              src={close}
              alt="menu"
              className="w-[18px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[18px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
