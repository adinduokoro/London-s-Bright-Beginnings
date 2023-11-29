import React from "react";
import Banner from "../components/banner/Banner";
import contactBanner from "../assets/ContactBanner.png";
import Location from "../components/location/Location";
import Form from "../components/form/Form";
import ContactInfo from "../components/contactInfo/ContactInfo";

const Contact = () => {
  return (
    <div className="contact">
      <Banner bannerImg={contactBanner} />
      <ContactInfo />
      <Location />
      <Form />
    </div>
  );
};

export default Contact;
