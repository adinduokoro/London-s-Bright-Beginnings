import React from "react";
import "./footer.css";
import WhiteLogo from "../../assets/WhiteLogo.svg";
import { footerData, footerContact } from "./data";
import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon.svg";

const Footer = () => {
  return (
    <div className="footer__bgColor">
      <div className="section">
        <div className="footer">
          <div className="footer__logo">
            <img src={WhiteLogo} alt="" />
            <p>
              © 2023 London’s Bright Beginnings. Created by Byte Back Digital.
              All rights reserved.
            </p>
          </div>
          <div className="footer__siteMap">
            <h6>SITEMAP</h6>
            <ul>
              {footerData.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path} className="links">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__contact">
            <h6>CONTACT</h6>
            <ul>
              {footerContact.map((info, index) => {
                return (
                  <div key={index}>
                    <p>{info.street}</p>
                    <p>{info.state}</p>
                    <p>{info.tel}</p>
                    <p>{info.email}</p>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="footer__social">
            <h6>FOLLOW US!</h6>
            <img src={InstagramIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
