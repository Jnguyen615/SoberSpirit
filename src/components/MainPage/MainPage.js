import "./MainPage.css";
import Header from "../Header/Header";
import React from "react";
import Drinks from '../Drinks/Drinks'

const MainPage = ( {drinks} ) => {
  return (
    <section className="main-page">
      <Header />
      <h3>Welcome to SoberSpirits</h3>
      <p className='intro-text'>A place for non drinkers to experiment with creating exciting mocktails!</p>
      <Drinks drinks={drinks}/>
    </section>
  );
};

export default MainPage;
