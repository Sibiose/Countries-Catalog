import React from "react";
import githubIcon from "./images/github-icon.svg";
import apiIcon from "./images/api-icon.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <h1 className="logo footer-logo">CC</h1>
      <div className="footer-media-container">
        <a
          href="https://restcountries.com/"
          className="footer-link"
          target="_blank"
        >
          <img src={apiIcon} alt="" className="footer-icon" />
          Support the external API
        </a>

        <a
          href="https://sibiose.github.io/Portofolio-page/"
          className="footer-link"
          target="_blank"
        >
          <img src={githubIcon} alt="" className="footer-icon" />
          Check out my other work
        </a>
      </div>
    </footer>
  );
};

export default Footer;
