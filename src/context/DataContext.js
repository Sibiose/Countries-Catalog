import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //Declaring Context useState Variables
  const [inputValue, setinputValue] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [isClosed, setisClosed] = useState(true);

  //Declaring Context functions

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    await axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => {
        setCountryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <DataContext.Provider
      value={{
        inputValue,
        setinputValue,
        countryData,
        setCountryData,
        isClosed,
        setisClosed,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
