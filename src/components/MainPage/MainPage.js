import "./MainPage.css";
import Header from "../Header/Header";
import React from "react";
import Drinks from "../Drinks/Drinks";

const MainPage = ({ setDrinks, drinks }) => {
  return (
    <section className="main-page">
      <Header drinks={drinks} setDrinks={setDrinks} />
      <h3>Welcome to SoberSpirits</h3>
      <p className="intro-text">
        A place for non drinkers to experiment with creating exciting mocktails!
      </p>
      <Drinks drinks={drinks}  />
      {drinks.length === 0 && (
        <h2 className="no-drinks-found-message">
          No drinks found! Try another search!
        </h2>
      )}
    </section>
  );
};

export default MainPage;
