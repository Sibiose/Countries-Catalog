import React from "react";
import NavLink from "./NavLink";

const NavItem = (props) => {
  return (
    <li className="nav-list-item">
      <NavLink path={props.path} title={props.title} />
    </li>
  );
};

export default NavItem;
