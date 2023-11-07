import React from "react";
import './Drinks.css'
import DrinkCards from '../DrinkCards/DrinkCards'

const AllDrinkCards = ({ drinks }) => {
  if (!drinks || drinks.length === 0) {
    return <div>No drinks available</div>;
  }

  const drinkCards = drinks.map(drink => {
    return (
        <DrinkCards 
        key={drink.id}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
        id={drink.idDrink}
        />
    );
  });

  return (
    <div>
      {drinkCards}
    </div>
  );
};

export default AllDrinkCards;
