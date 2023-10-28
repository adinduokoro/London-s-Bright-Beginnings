import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./data";

const HeaderBottom = () => {
  return (
    <div className="section-full">
      <div className="headerBottom__nav">
        <ul className="headerBottom__navList" id="navMenu">
          {navLinks.map((link, index) => {
            return (
              <NavLink to={link.path} key={index}>
                <li className="headerBottom__navItem label-text">
                  {link.name}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
