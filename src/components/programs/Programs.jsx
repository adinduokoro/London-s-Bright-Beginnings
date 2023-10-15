import React from "react";
import { programs } from "./data";

const Programs = () => {
  return (
    <div className="program section">
      {programs.map((program, index) => {
        return (
          <div className="programs__cardContainer" key={index}>
            <div className="programs__card">
              <div className="programs__cardHeader">
                <span>Programs for</span>
                <h1 style={{ color: program.color }}>{program.title}</h1>
                <div className="cardLine"></div>
              </div>
              <div className="programs__cardInfo">
                <p>{program.paragraph}</p>
                <a href={program.path} style={{ color: program.color }}>READ MORE</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Programs;
