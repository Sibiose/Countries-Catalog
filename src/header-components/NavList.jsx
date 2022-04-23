import React from "react";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <ul className="nav-list">
      <NavItem path="/Home" title="Home" />
      <NavItem path="/AboutTheProject" title="About the project" />
      <li className="nav-list-item">
        <a
          target="_blank"
          className="nav-link"
          href="https://restcountries.com/"
        >
          Support the API
        </a>
      </li>
      {/* <NavItem path="/" title="Support the API" /> */}
    </ul>
  );
};

export default NavList;
