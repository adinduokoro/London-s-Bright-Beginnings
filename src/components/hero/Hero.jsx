import React from "react";
import Slide1 from "../../assets/Slide1.jpg";
import "./hero.css"
import Slider from "./Slider";
import { slides } from "./data"

const Hero = () => {
  return (
    <div className="section__Medium">
      <div className="hero__slideshow">



        <Slider slides={slides} />


        <div className="hero__bannerCta">
          <span className="hero__ctaQuote">
            AT THE HEART OF OUR COMMITMENT IS YOUR PEACE OF MIND. WATCH YOUR
            CHILD THRIVE IN A SAFE ENRICHING ENVIRONMENT
          </span>
          <div className="hero__ctaButton">
            <span className="hero__ctaButtonTitle">CONTACT US</span>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default Hero;
