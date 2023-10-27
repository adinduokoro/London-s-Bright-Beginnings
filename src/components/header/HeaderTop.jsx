import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="section">
      <div className="header__Top">
        <div className="header__Logo">
          <Link to="/">
            <img src={Logo} alt="London's Bright Beginnings" />
          </Link>
        </div>
        <div className="header__Info">
          <span className="header__Quote title-text">
            “Our goal is to create an environment a child enjoys and parents
            love”
          </span>
          <span className="header__Contact head-text">
            CALL US:
            <a href="/"> +1 (443) 939-0012</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
