import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./data";
import { Icon } from '@iconify/react';

const HeaderBottom = () => {
  const [toggle, setToggle] = useState(false)

  const toggleMenu = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  const closeMenu = () => {
    setToggle(false)
  }

  return (
    <div className="section-full">
      <div className="header__bottom">
        <ul className={toggle ? "header__navItems active" : "header__navItems"} id="navMenu">
          {navLinks.map((link, index) => {
            return (
              <NavLink to={link.path} onClick={closeMenu} key={index}>
                <li className="label-text">{link.name}</li>
              </NavLink>
            );
          })}
        </ul>
        <Icon onClick={toggleMenu} className="header__menu" icon={toggle ? "mingcute:close-fill" : "mingcute:menu-fill"}/>
      </div>
    </div>
  );
};

export default HeaderBottom;
