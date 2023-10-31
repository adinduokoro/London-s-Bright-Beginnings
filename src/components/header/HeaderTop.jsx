import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon.svg";
import { Icon } from "@iconify/react";

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
        <div className="header__mobileInfo">
          <div className="address">
            <p>
              <Icon id="head-icons" icon="mdi:map-marker" />
              <a href="">1234 Baltimore St, Baltimore, MD 21236</a>
            </p>
          </div>
          <div className="email">
            <p>
              <Icon id="head-icons" icon="mdi:email-outline" />
              <a href="">Email Us Now</a>
            </p>
          </div>
          <div className="phone">
            <p>
              <Icon id="head-icons" icon="mdi:phone" />
              Call:&nbsp;<a href="">(443) 939-0012</a>
            </p>
          </div>
          <div>
            <img id="head-social" src={InstagramIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
