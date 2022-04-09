import React from "react";
import MainGrid from "./MainGrid";
import SearchBar from "./SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeMain = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    await axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setCountryData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main id="home-main">
      <SearchBar countryData={countryData} setCountryData={setCountryData} />
      <MainGrid countryData={countryData} setCountryData={setCountryData} />
    </main>
  );
};

export default HomeMain;
