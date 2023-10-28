import React from "react";
import TopHeader from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import "./header.css";

const Header = () => {
  return (
    <nav className="header">
      <TopHeader />
      <HeaderBottom />
    </nav>
  );
};

export default Header;
