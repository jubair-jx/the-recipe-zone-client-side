import React from "react";
import ChefDetails from "../ChefDetails/ChefDetails";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <ChefDetails></ChefDetails>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
};

export default Home;
