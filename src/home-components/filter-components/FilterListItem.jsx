import React from "react";
import { useEffect } from "react";
import axios from "axios";

const FilterListItem = (props) => {
  const handleFilter = async () => {
    await axios
      .get(
        `https://restcountries.com/v3.1/${
          props.title != "All" ? "region/" : ""
        }${props.title.toLowerCase()}`
      )
      .then((res) => {
        props.setCountryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li onClick={handleFilter} className="filter-item">
      {props.title}
    </li>
  );
};

export default FilterListItem;
