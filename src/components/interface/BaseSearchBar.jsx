import React from "react";

export const BaseSearchBar = ({ handleSearch, query }) => {
  return (
    <div className="home-search-bar-container">
      <input
        type="text"
        className="home-search-bar"
        value={query}
        onChange={handleSearch}
        placeholder="Pokémon"
      />
    </div>
  );
};
