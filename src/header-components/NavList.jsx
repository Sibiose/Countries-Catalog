import React from "react";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <ul className="nav-list">
      <NavItem title="Home" />
      <NavItem title="About the project" />
      <NavItem title="Contact" />
      <NavItem title="Support the API" />
    </ul>
  );
};

export default NavList;
