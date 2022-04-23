import React from "react";
import { useContext } from "react";
import axios from "axios";
import DataContext from "../../context/DataContext";

const FilterListItem = (props) => {
  const { setCountryData } = useContext(DataContext);

  /**
   * A function that returns api data based on country region, filtering the results
   */
  const handleFilter = async () => {
    await axios
      .get(
        `https://restcountries.com/v3.1/${
          props.title != "All" ? "region/" : ""
        }${props.title.toLowerCase()}`
      )
      .then((res) => {
        setCountryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li
      onClick={() => {
        handleFilter();
      }}
      className={
        props.title !== "All" ? "filter-item" : "filter-item focusedFilter"
      }
    >
      {props.title}
    </li>
  );
};

export default FilterListItem;
