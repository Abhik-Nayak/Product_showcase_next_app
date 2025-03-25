import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <About imageOrder="lg:order-1" textOrder="lg:order-2" title="Pure Sound, Active Noise Cancellation" linkText="Learn More" />
      <About imageOrder="lg:order-2" textOrder="lg:order-1" title="Capture pure sound with the 70mm HD Driver" linkText="Shop Now" />
    </div>
  );
};

export default Home;
