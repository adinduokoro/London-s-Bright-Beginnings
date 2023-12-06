import React from "react";
import "./footer.css";
import WhiteLogo from "../../assets/WhiteLogo.svg";
import { footerData, footerContact } from "./data";
import { Link } from "react-router-dom";
import InstagramIcon from "../../assets/InstagramIcon.svg";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div
      className="section-full"
      style={{ backgroundColor: "var(--colorPink)" }}
    >
      <div className="section">
        <div className="footer">
          <div className="footer__logo">
            <Link to="/">
              <img src={WhiteLogo} alt="" />
            </Link>
            <p className="label-text">
              © {year} London’s Bright Beginnings. Created by Byte Back Digital.
              All rights reserved.
            </p>
          </div>
          <div className="footer__siteMap">
            <h6 className="title-text">SITEMAP</h6>
            <ul>
              {footerData.map((link, index) => {
                return (
                  <li key={index}>
                    <Link to={link.path} className="label-text links">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__contact">
            <h6 className="title-text">CONTACT</h6>
            <ul>
              {footerContact.map((info, index) => {
                return (
                  <div key={index} className="label-text">
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
            <h6 className="title-text">FOLLOW US!</h6>
            <a
              href="https://instagram.com/londons_bright_beginnings_llc?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <img src={InstagramIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
