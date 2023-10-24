import React from "react";
import "./testimonials.css";
import FamilyPhoto from "../../assets/family-photo.png";
import GraduationCap from "../../assets/graduation-cap.png";
import Chalk from "../../assets/chalk.png";
import { testimonials } from "./data";

const Testimonials = () => {
  return (
    <div className="section__full">
      <div className="section">
        <img className="testimonials__family" src={FamilyPhoto} alt="" />
        <img className="testimonials__cap" src={GraduationCap} alt="" />
        <div className="testimonials__cards">
          <div className="testimonials__cardsh3">
            <img src={Chalk} alt="" />
            <h3>parent testimonials</h3>
          </div>

          <div className="testimonials__cardInfo">
            <p>
              "Highly recommended! Wonderful teachers and experienced staff make
              this preschool one of the best around."
            </p>
            <h6>-Jane D.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
