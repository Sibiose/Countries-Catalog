import React from "react";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <ul className="nav-list">
      <NavItem path="/Home" title="Home" />
      <NavItem path="/AboutTheProject" title="About the project" />
      <NavItem path="/Contact" title="Contact" />
      <NavItem path="/Third-party" title="Support the API" />
    </ul>
  );
};

export default NavList;
