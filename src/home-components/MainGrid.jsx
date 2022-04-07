import React from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import { useState, useEffect } from "react";

const MainGrid = () => {
  const [countryData, setCountryData] = usestate({});
  let countries = [];

  useEffect(() => {
    searchCountries();
  }, []);

  const searchCountries = async () => {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    setCountryData(response.data);
  };

  return <div className="grid-container"></div>;
};

export default MainGrid;
