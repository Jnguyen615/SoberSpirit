import "./Header.css";
import Search from "../Search/Search";
import React from "react";
import PropTypes from 'prop-types'

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

Header.propTypes = {
  setDrinks: PropTypes.func.isRequired,
  drinks: PropTypes.arrayOf(PropTypes.object).isRequired
}