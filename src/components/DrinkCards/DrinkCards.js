import "./DrinkCards.css";
import React from "react";
import { useNavigate } from 'react-router-dom'

const DrinkCards = ({ id,  strDrink, strDrinkThumb }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/drink/${id}`)
  }
  return (
      <div className="single-drink-card" onClick={handleClick}>
        <img className="drink-thumbnail" src={strDrinkThumb} alt={strDrink} onClick={handleClick}/>
        <h3 className="drink-name">{strDrink}</h3>
        
    </div>
  );
};

export default DrinkCards;
