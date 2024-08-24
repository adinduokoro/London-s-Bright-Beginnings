import React from "react";
import Header from "../paragraphs/header/Header";
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="content" style={{ marginBottom: "3rem" }}>
      <div className="contact__container" style={{ margin: "0 1.5rem" }}>
        <Header title={"Contact"} />
        <div className="contact__content section">
          <div className="contact__info">
            <p className="contact__name title-text">London's Bright Beginnings</p>
            <p className="contact__name title-text">Child Learning Center</p>
            <p className="contact__street title-text">1234 Baltimore St</p>
            <p className="contact__postal title-text">Baltimore, MD 21236</p>
            <h2 className="contact__phone head-text">T: +1 (443) 939-0012</h2>
            <p className="contact__hours body-text">
              Hours of operation. Monday-Friday (6:30am-6:30pm)
            </p>
            <h2 className="contact__email title-text">Email: 
            <span> londonslearningcenterllc@yahoo.com</span>
            
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
