import React from "react";

const CountryCard = (props) => {
  return (
    <div className="country-card">
      <h1 className="country-title">{props.name}</h1>
      <img src={props.thumbnail} alt="" className="country-flag" />
    </div>
  );
};

export default CountryCard;
