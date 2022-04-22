import React from "react";
import CountryCard from "./CountryCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const MainGrid = () => {
  const { inputValue } = useContext(DataContext);
  const { countryData } = useContext(DataContext);
  return (
    <div className="grid-container">
      {/*Mapping through the API data and rendering a Country-Card for each "Country object" */}
      {countryData
        .sort((a, b) =>
          a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase())
        )
        .filter((country) =>
          inputValue !== ""
            ? country.name.common.toLowerCase().includes(inputValue)
            : country
        )
        .map((country) => (
          <CountryCard
            key={country.id}
            name={country.name.common}
            thumbnail={country.flags.svg}
            capital={country.capital}
            population={country.population}
            borders={country.borders}
            languages={country.languages}
          />
        ))}
    </div>
  );
};

export default MainGrid;
