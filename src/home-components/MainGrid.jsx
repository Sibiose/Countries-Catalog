import React from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import { useState, useEffect } from "react";

const MainGrid = (props) => {
  // const [countryData, setCountryData] = useState([]);

  // useEffect(() => {
  //   getCountries();
  // }, []);

  // const getCountries = async () => {
  //   await axios
  //     .get(`https://restcountries.com/v3.1/all`)
  //     .then((res) => {
  //       setCountryData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="grid-container">
      {props.countryData
        .sort((a, b) =>
          a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase())
        )
        .map((country) => (
          <CountryCard
            key={country.id}
            name={country.name.common}
            thumbnail={country.flags.svg}
          />
        ))}
    </div>
  );
};

export default MainGrid;
