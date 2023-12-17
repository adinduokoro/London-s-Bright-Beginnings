import React from "react";
import { programs } from "./data";
import "./programs.css";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <div className="section">
      <div className="program">
        {programs.map((program, index) => {
          return (
            <div data-aos="zoom-in-up" data-aos-duration="1750" className="programs__cardContainer" key={index}>
              <div className="programs__card">
                <div className="programs__cardHeader">
                  <span className="title-text">Programs for</span>
                  <h1 className="head-text" style={{ color: program.color }}>
                    {program.title}
                  </h1>
                  <div className="cardLine"></div>
                </div>
                <div className="programs__cardInfo">
                  <p className="body-text">{program.paragraph}</p>
                  <Link to={program.path}
                    
                    className="body-text"
                    style={{ color: program.color }}
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
