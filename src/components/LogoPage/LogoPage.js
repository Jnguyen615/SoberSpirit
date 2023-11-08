import "./LogoPage.css";
import soberSpiritsLogo from "../../SoberSpirits.png";
import { useNavigate } from 'react-router-dom'
import React from 'react'

const LogoPage = () => {
  
  const navigate = useNavigate()

  const handleClickToMain = () => {
    navigate('/main')
  }

  return(
    <div className="logo-page">
      <header className="logo-page-header">
      <h1 className="page-name">SoberSpirits</h1>
        <img src={soberSpiritsLogo} className="App-logo" alt="logo" />
        <button onClick={handleClickToMain}className="click-me">Click to Enter!</button>
      </header>
    </div>
  )
};

export default LogoPage;
