import React, { useState } from "react";
import './Drinks.css';
import DrinkCards from '../DrinkCards/DrinkCards';
import DrinkCardBlowup from '../DrinkCardBlowup/DrinkCardBlowup';

const AllDrinkCards = ({ drinks }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  const handleDrinkClick = (drink) => {
    setSelectedDrink(drink);
  };

  if (!drinks || drinks.length === 0) {
    return <div>No drinks available</div>;
  }

  const drinkCards = drinks.map((drink, index) => {
    return (
      <DrinkCards
        className='single-drink-cards'
        key={index}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
        id={drink.idDrink}
        handleDrinkClick={() => handleDrinkClick(drink)}
      />
    );
  });

  return (
    <div className='all-drink-cards'>
      {drinkCards}
      {selectedDrink && <DrinkCardBlowup selectedDrink={selectedDrink} />}
    </div>
  );
};

export default AllDrinkCards;
