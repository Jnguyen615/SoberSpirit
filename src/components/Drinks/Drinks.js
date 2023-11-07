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
        className='single-drink-cards'
        key={drink.id}
        strDrink={drink.strDrink}
        strDrinkThumb={drink.strDrinkThumb}
        id={drink.idDrink}
        />
    );
  });

  return (
    <div className='single-drink-container'>
      {drinkCards}
    </div>
  );
};

export default AllDrinkCards;
