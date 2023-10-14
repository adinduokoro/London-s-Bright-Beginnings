import React from "react";
import Hero from "../components/hero/Hero";
import "../styles/home.css";
import Welcome from "../components/welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
    </div>
  );
};

export default Home;
