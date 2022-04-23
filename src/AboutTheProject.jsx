import React from "react";

const AboutTheProject = () => {
  return (
    <section id="about-section">
      <div className="about-body-container">
        <h1 className="about-title">
          About the <span className="cta">Country Catalogue</span> Project
        </h1>
        <p className="about-body">
          I developed this project along the journey of becoming a software
          developer. <br /> However, every information about the countries
          presented here is the work of the team that is developing the REST
          countries API. Make sure you support their hard-work. <br />
        </p>
        <p className="about-body project-details">
          The Country Catalogue project is a small web application I developed
          in order to practise different front-end developing tools such as{" "}
          <span className="cta">React and React hooks. </span>
          This actually is my first React project. <br />I also wanted to
          develop a project that consumes, and uses an{" "}
          <span className="cta">external API. </span>
          <br />
          All in all, I enjoyed very much working on the Country Catalogue.
        </p>
      </div>
    </section>
  );
};

export default AboutTheProject;
