import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

const DrinkCardBlowup = ({ selectedDrink, setError }) => {
  const [recipe, setRecipe] = useState({
    ingredients: [],
    measurements: [],
    idDrink: "",
    strDrink: "",
    strDrinkThumb: "",
    strGlass: "",
    strInstructions: "",
  });
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();

  const formatData = data => {
    const recipe = {
      measurements: [],
      ingredients: [],
      idDrink: data.idDrink,
      strDrink: data.strDrink,
      strDrinkThumb: data.strDrinkThumb,
      strGlass: data.strGlass,
      strInstructions: data.strInstructions,
    };

    Object.keys(data).forEach(key => {
      if (key.includes("strIngredient") && data[key]) {
        recipe.ingredients.push(data[key]);
      }

      if (key.includes("strMeasure") && data[key]) {
        recipe.measurements.push(data[key]);
      }
    });

    return recipe;
  };

  useEffect(() => {
    async function fetchDrinkDetails() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        if (data.drinks && data.drinks.length > 0) {
          setRecipe(formatData(data.drinks[0]));
          setLoaded(true);
        } else {
          setError("Drink not found");
        }
      } catch (error) {
        setError("Failed to fetch drink details");
      }
    }

    fetchDrinkDetails();
  }, [id, setError]);

  return (
    <div className="single-drink-page">
      {loaded ? (
        <div>
          <h1>{recipe.strDrink}</h1>
          <img
            className="drink-img"
            src={recipe.strDrinkThumb}
            alt={recipe.strDrink}
          />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
              >{`${recipe.measurements[index]} ${ingredient}`}</li>
            ))}
          </ul>
          <p className="glass-type">{recipe.strGlass}</p>
          <p>{recipe.strInstructions}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

//proptyopes
export default DrinkCardBlowup;
