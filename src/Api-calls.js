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
    })
    .catch((error) => {
      if (error.name === 'TypeError') {
        console.error('Oops! Something went wrong');
      } else {
        console.error(error);
      }
    });
}

getNonAlcoholicDrinks();
