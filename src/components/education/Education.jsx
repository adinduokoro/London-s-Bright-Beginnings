import React from "react";
import { courses } from "./data";

const Education = () => {
  return (
    <div className="education">
      <div className="education__cardContainer">
        {courses.map((course, index) => {
          return (
            <div className="education__card" key={index}>
              <div className="education__overlay"></div>
              <img src={course.image} />
              <div className="education__cardInfo">
                <h2>{course.title}</h2>
                <p>{course.text}</p>
                <a href={course.path}>MORE</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
