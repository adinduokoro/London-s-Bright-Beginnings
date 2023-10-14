import React from "react";
import Badge from "../../assets/Badge.png";

const Welcome = () => {
  return (
    <div className="section">
      <div className="welcome">
        <div className="welcome__left">
          <div className="welcome__leftTop">
            <h1 className="welcome__businessName">
              London's Bright Beginnings
            </h1>
            <div className="welcome__star1">
              
            </div>
            <div className="welcome__star2"></div>
            <div className="welcome__star3"></div>
          </div>
          <div className="welcome__leftBottom">
            <div className="welcome__leftBottomLeft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="38"
                viewBox="0 0 30 38"
                fill="none"
              >
                <path
                  d="M25 0H4.16667C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667V37.5L14.5833 31.25L29.1667 37.5V4.16667C29.1667 3.0616 28.7277 2.00179 27.9463 1.22039C27.1649 0.438987 26.1051 0 25 0Z"
                  fill="#DF1B7D"
                />
              </svg>
              <span className="welcome__message">
                Message from Our Director
              </span>
            </div>
            <div className="welcome__leftBottomRight">
              <img src={Badge} alt="" />
              <span className="badgeVersion">1</span>
            </div>
          </div>
        </div>
        <div className="welcome__right">
          <div className="welcome__info">
            <h1 className="welcome__title">WELCOME</h1>
            <p className="welcome__text">
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
      </div>
    </div>
  );
};

export default Welcome;
