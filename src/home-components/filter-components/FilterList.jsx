import React from "react";
import FilterListItem from "./FilterListItem";

const FilterList = () => {
  return (
    <ul className="filter-list">
      <FilterListItem title="All" />
      <FilterListItem title="Asia" />
      <FilterListItem title="North America" />
      <FilterListItem title="South America" />
      <FilterListItem title="Europe" />
      <FilterListItem title="Africa" />
      <FilterListItem title="Oceania" />
    </ul>
  );
};

export default FilterList;
