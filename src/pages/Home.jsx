import React from "react";
import Hero from "../components/hero/Hero";
import Welcome from "../components/welcome/Welcome";
import Programs from "../components/programs/Programs";
import Education from "../components/education/Education";
import Offers from "../components/offer/Offers";
import Testimonials from "../components/testimonials/Testimonials";
import Location from '../components/location/Location'

const Home = () => {
  return (
    <div className="home__page">
      <Hero />
      <Welcome />
      <Programs />
      <Education />
      <Offers />
      <Testimonials />
      <Location />
    </div>
  );
};

export default Home;
