import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchInput = () => {
  const { setinputValue } = useContext(DataContext);

  return (
    <input
      placeholder="Write the name of the country here..."
      type="text"
      className="search-bar"
      onInput={
        /**
         * An annonymous function that takes in the input value and changes its state.
         */
        (e) => {
          setinputValue(e.target.value.toLowerCase());
        }
      }
    />
  );
};

export default SearchInput;
