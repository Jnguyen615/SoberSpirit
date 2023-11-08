import './Header.css'
import Logo from '../Logo/Logo'
import Search from "../Search/Search"
import React from 'react' 
import soberSpiritsLogo from '../../SoberSpirits.png'

const Header = () => {
  return (
    <header>
      <img src={soberSpiritsLogo} className="logo" alt="logo" />
      <h1>SoberSpirits</h1>
      <img src={soberSpiritsLogo} className="logo" alt="logo" />
      <Search />
    </header>
  )
}

export default Header 