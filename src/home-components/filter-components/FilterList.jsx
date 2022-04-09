import React from "react";
import FilterListItem from "./FilterListItem";
import { useState } from "react";

const FilterList = (props) => {
  return (
    <ul className="filter-list">
      <FilterListItem
        countryData={props.countryData}
        setCountryData={props.setCountryData}
        title="All"
      />
      <FilterListItem
        countryData={props.countryData}
        setCountryData={props.setCountryData}
        title="Asia"
      />
      <FilterListItem
        countryData={props.countryData}
        setCountryData={props.setCountryData}
        title="North America"
      />
      <FilterListItem
        countryData={props.countryData}
        setCountryData={props.setCountryData}
        title="South America"
      />
      <FilterListItem
        countryData={props.countryData}
        setCountryData={props.setCountryData}
        title="Europe"
      />
      <FilterListItem
        countryData={props.countryData}
        setCountryData={props.setCountryData}
        title="Africa"
      />
      <FilterListItem
        countryData={props.countryData}
        setCountryData={props.setCountryData}
        title="Oceania"
      />
    </ul>
  );
};

export default FilterList;
