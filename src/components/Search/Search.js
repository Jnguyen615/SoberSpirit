import React, { useState, useEffect } from "react";
import './Search.css'
import PropTypes from 'prop-types'

const Search = ({ setDrinks, drinks }) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const filteredDrinks = drinks.filter(drink =>
      drink.strDrink.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setDrinks(filteredDrinks);

    if (filteredDrinks.length === 0 && searchInput !== "") {
      setError("No drinks found.");
    } else {
      setError("");
    }

    if (searchInput === "") {
      setDrinks(drinks);
    }
  }, [searchInput, setSearchInput]);

  const handleInputChange = event => {
    setSearchInput(event.target.value);
  };

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

  const setAllDrinks = () => {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    )
      .then(resp => {
        if (resp.status === 404) {
          throw new Error("Page not found");
        } else if (!resp.ok) {
          throw new Error("Oops! Something went wrong");
        }
        return resp.json();
      })
      .then(data => {
        setDrinks(data.drinks);
      })
      .catch(error => {
        if (error.name === "TypeError") {
          console.error("Oops! Something went wrong");
        } else {
          console.error(error);
        }
      });
  };

  useEffect(() => {
    setAllDrinks();
  }, []);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a drink"
          name="search"
          value={searchInput}
          onChange={handleInputChange}
        />
      </form>
      <button className="all-drinks" onClick={setAllDrinks}>
        All Drinks
      </button>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setDrinks: PropTypes.func.isRequired,
  drinks: PropTypes.arrayOf(PropTypes.object).isRequired
}