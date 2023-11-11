import React, { useState } from "react";
import "./Drinks.css";
import DrinkCards from "../DrinkCards/DrinkCards";
import DrinkCardBlowup from "../DrinkCardBlowup/DrinkCardBlowup";
import PropTypes from "prop-types";

const AllDrinkCards = ({ drinks }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const handleDrinkClick = drink => {
    setSelectedDrink(drink);
  };

  const drinkCards = drinks.map((drink, index) => {
    return (
      <DrinkCards
        className="single-drink-cards"
        key={index}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
        id={drink.idDrink}
        handleDrinkClick={() => handleDrinkClick(drink)}
      />
    );
  });

  return (
    <div className="all-drink-cards">
      {drinkCards}
      {selectedDrink && <DrinkCardBlowup selectedDrink={selectedDrink} />}
    </div>
  );
};

export default AllDrinkCards;

AllDrinkCards.propType = {
    drinks: PropTypes.arrayOf(PropTypes.object).isRequired,
    drink: PropTypes.shape({  
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired
};
