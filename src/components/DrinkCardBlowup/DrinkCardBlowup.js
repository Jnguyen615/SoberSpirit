import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./DrinkCardBlowup.css";

const DrinkCardBlowup = ({ setError }) => {
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
  const navigate = useNavigate();
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
    const fetchDrinkDetails = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then(data => {
          if (data.drinks && data.drinks.length > 0) {
            setRecipe(formatData(data.drinks[0]));
            setLoaded(true);
          } else {
            setError("Drink not found");
          }
        })
        .catch(error => {
          setError("Failed to fetch drink details");
        });
    };

    fetchDrinkDetails();
  }, [id, setError]);

  const handleHomeButtonClick = () => {
    navigate("/main");
  };

  return (
    <div className="single-drink-page">
      {loaded ? (
        <div className="drink-blowup">
          <h1 className="blowup-recipe-title">{recipe.strDrink}</h1>
          <img
            className="drink-img"
            src={recipe.strDrinkThumb}
            alt={recipe.strDrink}
          />
          <ul>
            Ingredients:
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
              >{`${recipe.measurements[index]} ${ingredient}`}</li>
            ))}
          </ul>
          <p className="glass-type">Glass type: {recipe.strGlass}</p>
          <p>
            Instructions: <br></br>
            {recipe.strInstructions}
          </p>
          <button onClick={handleHomeButtonClick} className="home-btn">
            Back to Home
          </button>
        </div>
      ) : (
        <div className="loaing-message">Loading...</div>
      )}
    </div>
  );
};

//proptyopes
export default DrinkCardBlowup;
