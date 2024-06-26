import React from "react";
import "./banner.css";

const Banner = ({ bannerImg }) => {
  return (
    <div className="section-full">
      <div className="banner">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
