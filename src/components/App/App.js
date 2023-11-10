import "./App.css";
import LogoPage from "../LogoPage/LogoPage";
import MainPage from "../MainPage/MainPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import DrinkCardBlowup from "../DrinkCardBlowup/DrinkCardBlowup";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState("");

  function getNonAlcoholicDrinks() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
    )
      .then(resp => {
        if (resp.status === 404) {
          throw new Error("Page not found");
        } else if (!resp.ok) {
          throw new Error("Oops! Something went wrong");
        }
        return resp.json();
      })
      .then(data => {
        setDrinks(data.drinks)
      })
      .catch(error => {
        if (error.name === "TypeError") {
          console.error("Oops! Something went wrong");
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
        <Route
          path="/main"
          element={<MainPage drinks={drinks} setDrinks={setDrinks}  />}
        />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/drink/:id"
          element={
            <DrinkCardBlowup
              drinks={drinks}
              setError={setError}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
