import React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const HamburgerMenu = () => {
  const { isClosed, setisClosed } = useContext(DataContext);

  const handleMenu = () => {
    setisClosed(!isClosed);
  };

  window.addEventListener("click", (event) => {
    if (
      !isClosed &&
      !event.target.closest(".modal-nav") &&
      !event.target.closest(".hamburger-menu")
    ) {
      handleMenu();
    }
  });

  return (
    <div className="hamburger-menu" onClick={handleMenu}>
      <div className="line1 line"></div>
      <div className="line2 line"></div>
      <div className="line3 line"></div>
    </div>
  );
};

export default HamburgerMenu;
