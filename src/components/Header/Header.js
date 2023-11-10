import "./Header.css";
import Search from "../Search/Search";
import React from "react";
import soberSpiritsLogo from "../../SoberSpirits.png";

const Header = ({ setDrinks, drinks }) => {
  
  return (
    <header>
      <img src={soberSpiritsLogo} className="logo" alt="logo" />
      <Search
        setDrinks={setDrinks}
        drinks={drinks}
      />
    </header>
  );
};

export default Header;
