import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Review from "./Review/Review";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <About imageOrder="lg:order-1" textOrder="lg:order-2" title="IPhone 16 Pro MAX" linkText="Learn More" />
      <About imageOrder="lg:order-2" textOrder="lg:order-1" title="Capture the moment" linkText="Shop Now" />
      <Review/>
      <Contact/>
    </div>
  );
};

export default Home;
