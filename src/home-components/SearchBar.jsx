import React from "react";
import FilterList from "./filter-components/FilterList";

const SearchBar = (props) => {
  return (
    <div className="search-container">
      <input
        placeholder="Write the name of the country here..."
        type="text"
        className="search-bar"
      />
      <div className="filter-container">
        <FilterList
          countryData={props.countryData}
          setCountryData={props.setCountryData}
        />
      </div>
    </div>
  );
};

export default SearchBar;
