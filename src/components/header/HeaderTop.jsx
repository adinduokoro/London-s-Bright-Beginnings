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
            <a href="tel:+14439390012">
            CALL US: +1 (443) 939-0012</a>
          </span>
        </div>
        <div className="header__mobileInfo">
          <div className="address">
            <p>
              <Icon id="head-icons" icon="mdi:map-marker" />
              <a href="">Baltimore, MD 21215</a>
            </p>
          </div>
          <div className="email">
            <p>
              <Icon id="head-icons" icon="mdi:email-outline" />
              <a href="mailto:londonslearningcenterllc@yahoo.com">
                Email Us Now
              </a>
            </p>
          </div>
          <div className="phone">
            <p>
              <Icon id="head-icons" icon="mdi:phone" />
              Call:&nbsp;<a href="tel:+14439390012">(443) 939-0012</a>
            </p>
          </div>
          <div>
            <a href="https://instagram.com/londons_bright_beginnings_llc?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"> 
              <img id="head-social" src={InstagramIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
