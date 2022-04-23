import React from "react";
import NavList from "./NavList";
import ModalNav from "./ModalNav/ModalNav";
import HamburgerMenu from "./ModalNav/HamburgerMenu";

const Nav = () => {
  return (
    <nav id="nav">
      <h1 className="logo">CC</h1>
      <NavList />
      <HamburgerMenu />
      <ModalNav />
    </nav>
  );
};

export default Nav;
