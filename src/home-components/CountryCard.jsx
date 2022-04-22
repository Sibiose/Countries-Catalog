import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const CountryCard = (props) => {
  const { isFlipped, setisFlipped } = useContext(DataContext);

  //Parsing API data in order to render it on the Country Card
  let borders = [];
  borders.push(props.borders);
  let borderStr = borders[0] != undefined ? borders[0].join(", ") : borders[0];
  let languagesStr =
    props.languages != undefined
      ? Object.values(props.languages).join(", ")
      : props.languages;

  return (
    <div
      onMouseEnter={() => {
        setisFlipped("full-card rotateCard");
      }}
      onMouseLeave={() => {
        setisFlipped("full-card");
      }}
      className="country-card"
    >
      <div className={isFlipped}>
        <div className="front-card">
          <h1 className="country-title">{props.name}</h1>
          <img src={props.thumbnail} alt="" className="country-flag" />
        </div>
        <div className="back-card">
          <h1 className="country-title">{props.name}</h1>
          <h3 className="country-info-subtitle">Capital: {props.capital}</h3>
          <h3 className="country-info-subtitle">
            Population: {props.population}
          </h3>
          <h3 className="country-info-subtitle">
            Bordering countries: <br></br>
            {borderStr !== "" ? borderStr : "No borders"}
          </h3>
          <h3 className="country-info-subtitle">
            Languages: <br></br>
            {languagesStr !== "" ? languagesStr : "Unresearched"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
