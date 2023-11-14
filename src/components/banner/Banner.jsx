import React from "react";
import "./banner.css";

const Banner = ({ pageTitle, bannerImg }) => {
  return (
    <div className="section-full">
      <div className="banner">
        <img src={bannerImg} alt="" />
      </div>
      <div className="section">
        <h1 className="page__header head-text">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Banner;
