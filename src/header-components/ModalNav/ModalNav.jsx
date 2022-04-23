import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import ModalItem from "./ModalItem";

const ModalNav = () => {
  const { isClosed } = useContext(DataContext);

  return (
    !isClosed && (
      <ul id="modal-nav">
        <ModalItem path="/home" title="Home" />
        <ModalItem path="/AboutTheProject" title="About the project" />
        <li className="modal-item">
          <a
            target="_blank"
            className="nav-link"
            href="https://restcountries.com/"
          >
            Support the API
          </a>
        </li>
      </ul>
    )
  );
};

export default ModalNav;
