import "./App.css";
import LogoPage from "../LogoPage/LogoPage";
import MainPage from "../MainPage/MainPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import DrinkCardBlowup from "../DrinkCardBlowup/DrinkCardBlowup";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getNonAlcoholicDrinks } from '../../Api-calls'

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const drinksData = await getNonAlcoholicDrinks();
        setDrinks(drinksData);
      } catch (error) {
        setError("Oops! Something went wrong");
        console.error(error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route
          path="/main"
          element={<MainPage drinks={drinks} setDrinks={setDrinks} />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/drink/:id"
          element={
            <DrinkCardBlowup drinks={drinks} setError={setError} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
