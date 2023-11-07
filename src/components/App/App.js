import soberSpiritsLogo from "../../SoberSpirits.png";
import "./App.css";
import LogoPage from "../LogoPage/LogoPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LogoPage} />
      {/* <Route path="/about" component={About} /> */}
    </BrowserRouter>
  );
}

export default App;
