import React from "react";
import { courses } from "./data";
import "./education.css";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="section-full">
      <div className="education">
        {courses.map((course, index) => {
          return (
            <div className="education__card" key={index}>
              <div className="education__overlay"></div>
              <img src={course.image} alt="" />
              <div className="education__cardInfo">
                <h2 className="head-text">{course.title}</h2>
                <p className="body-text">{course.text}</p>
                <Link to={course.path} className="body-text">
                  MORE
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
