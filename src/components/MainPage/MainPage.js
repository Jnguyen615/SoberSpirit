import "./MainPage.css";
import Header from "../Header/Header";
import React from "react";
import Drinks from '../Drinks/Drinks'

const MainPage = ( {drinks} ) => {
  return (
    <section className="main-page">
      <Header />
      <h1>Welcome to SoberSprit</h1>
      <p>A place for non drinkers to experiment with creating mocktails!</p>
      <Drinks drinks={drinks}/>
    </section>
  );
};

export default MainPage;
