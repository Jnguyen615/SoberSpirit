import soberSpiritsLogo from "../../SoberSpirits.png";
import "./App.css";
import LogoPage from "../LogoPage/LogoPage";
import MainPage from '../MainPage/MainPage'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
