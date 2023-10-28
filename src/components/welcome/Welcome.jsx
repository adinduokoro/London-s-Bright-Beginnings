import React from "react";
import badge from "../../assets/Badge.png";
import "./welcome.css";
import star1 from "../../assets/stars/Star1.png";
import star2 from "../../assets/stars/Star2.png";
import star3 from "../../assets/stars/Star3.png";
import bookmark from "../../assets/Bookmark.svg"

const Welcome = () => {
  return (
    <div className="section">
      <div className="welcome">
        <div className="welcome__left">
          <div className="welcome__leftTop">
            <h1 className="welcome__businessName head-text">
              <span>London's</span>
              <span>Bright Beginnings</span>
            </h1>
            <div className="welcome__star1">
              <img src={star1} alt="" />
            </div>
            <div className="welcome__star2">
              <img src={star2} alt="" />
            </div>
            <div className="welcome__star3">
              <img src={star3} alt="" />
            </div>
          </div>
          <div className="welcome__leftBottom">
            <div className="welcome__leftBottomLeft">
              <img src={bookmark} alt="" />
              <span className="welcome__message title-text">
                Message from Our Director
              </span>
            </div>
            <div className="welcome__leftBottomRight">
              <img src={badge} alt="" />
              <span className="badgeVersion label-text">1</span>
            </div>
          </div>
        </div>
        <div className="welcome__right">
            <h1 className="welcome__title head-text">WELCOME</h1>
            <p className="welcome__text body-text">
              Discover London's Bright Beginnings, your trusted childcare choice
              in Baltimore, Maryland. We're dedicated to providing personalized
              educational experiences for children and families, fostering a
              lifelong love for learning. With experienced teachers and proven
              strategies, our specialized programs cater to ages 6 weeks to 12
              years. Join us for a journey where your child's growth is our top
              priority.
            </p>
        </div>
      </div>
      <hr className="welcome__line" />
    </div>
  );
};

export default Welcome;
