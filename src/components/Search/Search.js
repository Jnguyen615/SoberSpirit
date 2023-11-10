import React, { useState, useEffect } from "react";

const Search = ({ setDrinks, drinks }) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Filter drinks whenever searchInput changes
    const filteredDrinks = drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchInput.toLowerCase())
    );
    setDrinks(filteredDrinks);

    if (filteredDrinks.length === 0 && searchInput !== "") {
      setError("No drinks found.");
    } else {
      setError("");
    }

    if(searchInput === ""){
      setDrinks(drinks)
    }
  }, [searchInput, setSearchInput]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = e => {
        e.preventDefault();
        {
          const filtered = drinks.filter(drink =>
            drink.strDrink.toLowerCase().includes(searchInput.toLowerCase()),
          );
          setDrinks(filtered);
    
          if (filtered.length === 0) {
            setError("No drinks found.");
          } else {
            setError("");
          }
        }
      };

  const setAllDrinks = () => {
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
      setDrinks(data.drinks)
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
  setAllDrinks()
}, [])
  

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a drink"
          name="search"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button
          className="search-btn"
          type="submit"
        >
          🔎
        </button>
        {error && <p>{error}</p>}
      </form>
      <button className='back-to-all-drinks' onClick={setAllDrinks} >All Drinks</button>
    </div>
  );
};

export default Search;


// const Search = ({ setDrinks, drinks }) => {
//   const [searchInput, setSearchInput] = useState("");
//   const [error, setError] = useState("");

//   const handleSearch = e => {
//     e.preventDefault();
//     {
//       const filtered = drinks.filter(drink =>
//         drink.strDrink.toLowerCase().includes(searchInput.toLowerCase()),
//       );
//       setDrinks(filtered);

//       if (filtered.length === 0) {
//         setError("No drinks found.");
//       } else {
//         setError("");
//       }
//     }
//   };

//   const handleInputChange = event => {
//     const value = event.target.value.toLowerCase();
//     setSearchInput(value);
//     console.log('SearchInput', searchInput)
//     const filteredDrinks = drinks.filter(drink =>
//       drink.strDrink.toLowerCase().includes(value),
//     );

//     if (value === '') {
//       setDrinks(drinks);
//     }
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder="Search for a drink"
//         name="search"
//         value={searchInput}
//         onChange={handleInputChange}
//       />
//       <button className="search-btn" type="submit">
//         🔎
//       </button>
//     </form>
//   );
// };

// export default Search;
