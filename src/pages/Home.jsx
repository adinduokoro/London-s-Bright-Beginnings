import React from "react";
import Hero from "../components/hero/Hero";
import "../styles/home.css";
import Welcome from "../components/welcome/Welcome";
import Programs from "../components/programs/Programs";
import Education from "../components/education/Education";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Programs />
      <Education />
      {/* Offer */}
      {/* Testimonials */}
      {/* Google Maps */}
    </div>
  );
};

export default Home;
