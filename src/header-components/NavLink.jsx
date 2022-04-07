import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <Link className="nav-link" to={props.path}>
      {props.title}
    </Link>
  );
};

export default NavLink;
