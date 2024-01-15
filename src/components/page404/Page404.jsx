import React from "react";
import "./page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="section">
      <div className="page404">
        <div className="page404__info">
          <h2>Oops!</h2>
          <h3 className="title-text">404 - PAGE NOT FOUND</h3>
          <p className="body-text">
            The page you are looking for might have been removed <br /> had its
            name changed or is temporarily unavailable.
          </p>
          <Link to="/" style={{textDecoration: "underline"}}>GO TO HOME PAGE</Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
