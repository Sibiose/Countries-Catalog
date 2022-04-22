import React from "react";
import FilterList from "./filter-components/FilterList";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="search-container">
      <SearchInput />
      <div className="filter-container">
        <FilterList />
      </div>
    </div>
  );
};

export default SearchBar;
