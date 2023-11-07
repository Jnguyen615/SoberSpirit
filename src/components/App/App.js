import soberSpiritsLogo from "../../SoberSpirits.png";
import "./App.css";
import LogoPage from "../LogoPage/LogoPage";
import MainPage from '../MainPage/MainPage'
import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [drinks, setDrinks] = useState([]);

  function getNonAlcoholicDrinks() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then((resp) => {
        if (resp.status === 404) {
          throw new Error('Page not found');
        } else if (!resp.ok) {
          throw new Error('Oops! Something went wrong');
        }
        return resp.json();
      })
      .then((data) => {
        console.log(data.drinks);
        setDrinks(data.drinks);
      })
      .catch((error) => {
        if (error.name === 'TypeError') {
          console.error('Oops! Something went wrong');
        } else {
          console.error(error);
        }
      });
  }

  useEffect(() => {
    getNonAlcoholicDrinks();
  }, []);




  

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
