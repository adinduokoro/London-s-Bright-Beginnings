import React from "react";
import '../styles/layout.css'
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* Footer */}
    </>
  );
};

export default Layout;
