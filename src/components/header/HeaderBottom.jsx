import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./data";

const HeaderBottom = () => {
  return (
    <div className="section-full">
      <div className="header__bottom">
        <ul className="header__navItems" id="navMenu">
          {navLinks.map((link, index) => {
            return (
              <NavLink to={link.path} key={index}>
                <li className="label-text">{link.name}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderBottom;
