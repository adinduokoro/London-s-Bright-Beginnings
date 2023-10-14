import React from "react";
import { NavLink } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <nav className="headerBottom__nav">
      <ul className="headerBottom__navList" id="navMenu">
        <NavLink to="/">
          <li className="headerBottom__navItem">HOME</li>
        </NavLink>

        <NavLink to="/about">
          <li className="headerBottom__navItem">ABOUT US</li>
        </NavLink>

        <NavLink to="/programs">
          <li className="headerBottom__navItem">OUR PROGRAMS</li>
        </NavLink>

        <NavLink to="/curriculum">
          <li className="headerBottom__navItem">CURRICULUM</li>
        </NavLink>

        <NavLink to="/contact">
          <li className="headerBottom__navItem">CONTACT</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default HeaderBottom;
