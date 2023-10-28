import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="section">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="London's Bright Beginnings" />
          </Link>
        </div>
        <div className="header__info">
          <span className="header__quote title-text">
            “Our goal is to create an environment a child enjoys and parents
            love”
          </span>
          <span className="header__contact head-text">
            CALL US:
            <a href="/"> +1 (443) 939-0012</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
