import React from "react";

const Header = ({ title }) => {
  return (
    <div className="section">
      <h1 className="page__header head-text">{title}</h1>
    </div>
  );
};

export default Header;
