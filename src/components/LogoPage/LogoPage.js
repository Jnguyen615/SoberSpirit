import "./LogoPage.css";
import soberSpiritsLogo from "../../SoberSpirits.png";

const LogoPage = () => {
  return(
    <div className="App">
      <header className="App-header">
        <img src={soberSpiritsLogo} className="App-logo" alt="logo" />
        <button className="click-me">Click to Enter!</button>
      </header>
    </div>
  )
};

export default LogoPage;
