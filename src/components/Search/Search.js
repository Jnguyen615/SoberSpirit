import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = ({ setDrinks, drinks }) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    {
      const filtered = drinks.filter(drink =>
        drink.strDrink.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setDrinks(filtered);

      if (filtered.length === 0) {
        setError("No drinks found.");
      } else {
        setError("");
      }
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a drink"
        name="search"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <button className="search-btn" type="submit">
        🔎
      </button>
    </form>
  );
};

export default Search;
