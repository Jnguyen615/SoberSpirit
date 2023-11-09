import "./Header.css";
import Search from "../Search/Search";
import React from "react";
import soberSpiritsLogo from "../../SoberSpirits.png";

const Header = ({ setDrinks, drinks, setFilteredDrinks }) => {
  return (
    <header>
      <img src={soberSpiritsLogo} className="logo" alt="logo" />
      <Search
        setDrinks={setDrinks}
        drinks={drinks}
        setFilteredDrinks={setFilteredDrinks}
      />
    </header>
  );
};

export default Header;
