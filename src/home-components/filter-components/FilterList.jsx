import React from "react";

import FilterListItem from "./FilterListItem";

const FilterList = () => {
  const filterFocusHandler = (e) => {
    const filter = e.target.closest(".filter-item");
    const filterItems = document.querySelectorAll(".filter-item");
    filterItems.forEach((el) => el.classList.remove("focusedFilter"));
    filter.classList.add("focusedFilter");
  };

  return (
    <ul className="filter-list" onClick={filterFocusHandler}>
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
