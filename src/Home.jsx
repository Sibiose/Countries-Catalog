import React from "react";
import HomeMain from "./home-components/HomeMain";
import IntroSection from "./home-components/IntroSection";

const Home = () => {
  return (
    <section id="home-page">
      <IntroSection />
      <HomeMain />
    </section>
  );
};

export default Home;
