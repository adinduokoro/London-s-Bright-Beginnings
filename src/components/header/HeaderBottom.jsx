import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./data";

const HeaderBottom = () => {
  return (
    <nav className="headerBottom__nav">
      <ul className="headerBottom__navList" id="navMenu">
        {navLinks.map((link, index) => {
          return (
            <NavLink to={link.path} key={index}>
              <li className="headerBottom__navItem label-text">{link.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderBottom;
