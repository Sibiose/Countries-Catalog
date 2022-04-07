import React from "react";
import MainGrid from "./MainGrid";
import SearchBar from "./SearchBar";

const HomeMain = () => {
  return (
    <main id="home-main">
      <SearchBar />
      <MainGrid />
    </main>
  );
};

export default HomeMain;
