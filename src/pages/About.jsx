import React from "react";
import Banner from "../components/banner/Banner";
import aboutBanner from "../assets/AboutBanner.png";
import ParagraphOne from "../components/paragraphs/paragraphOne/ParagraphOne";
import ParagraphTwo from "../components/paragraphs/paragraphTwo/ParagraphTwo";
import ParagraphImg from "../components/paragraphs/paragraphImg/ParagraphImg";
import ParagraphThree from "../components/paragraphs/paragraphThree/ParagraphThree";

const About = () => {
  return (
    <div className="about__page">
      <Banner pageTitle={"About Us"} bannerImg={aboutBanner} />
      <div className="content" style={{marginBottom: "3.12rem"}}>
        <div className="about__content section">
          <ParagraphImg />
          <ParagraphOne />
          <ParagraphTwo />
        </div>
        <div className="our__director section">
          <ParagraphImg />
          <ParagraphThree />
        </div>
      </div>
    </div>
  );
};

export default About;
