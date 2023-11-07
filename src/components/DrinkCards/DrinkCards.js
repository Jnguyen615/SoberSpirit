import './DrinkCards.css'
import React from 'react'

const DrinkCards = ({ id, strDrink, strDrinkThumb} ) => {
  return (
    <div className='single-drink-card'>
      <img className='drink-thumbnail' src={strDrinkThumb}/>
      <h3 className='drink-name'>{strDrink}</h3>
      <button>Back to Home</button>
    </div>
  )
}

export default DrinkCards
