import React from "react";
import NavLink from "../NavLink";

const ModalItem = (props) => {
  return (
    <li className="modal-item">
      <NavLink path={props.path} title={props.title} />
    </li>
  );
};

export default ModalItem;
