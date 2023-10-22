import React from "react";
import Hero from "../components/hero/Hero";
import Welcome from "../components/welcome/Welcome";
import Programs from "../components/programs/Programs";
import Education from "../components/education/Education";
import Offers from "../components/offer/Offers";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Programs />
      <Education />
      <Offers />
      <Testimonials />
      {/* Google Maps */}
    </div>
  );
};

export default Home;
