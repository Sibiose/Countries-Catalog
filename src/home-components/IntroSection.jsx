import React from "react";

const IntroSection = () => {
  return (
    <div className="home-intro-section">
      <h1 className="intro-title">
        Welcome to <span className="cta">Countries Catalogue</span>, the place
        where you can learn more about your favourite Country!
      </h1>
      <p className="intro-body">
        Click on one of the countries listed below, or use the search-bar to
        find one of your choosing. <br />
        If you can't find a specific country, remember the project is still in
        construction and we are implementing more everyday.
        <br />
        <span className="cta">Enjoy learning!</span>
      </p>
    </div>
  );
};

export default IntroSection;
