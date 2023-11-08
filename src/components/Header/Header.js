import './Header.css'
import Search from "../Search/Search"
import React from 'react' 
import soberSpiritsLogo from '../../SoberSpirits.png'

const Header = () => {
  return (
    <header>
      <img src={soberSpiritsLogo} className="logo" alt="logo" />
      <Search />
    </header>
  )
}

export default Header 