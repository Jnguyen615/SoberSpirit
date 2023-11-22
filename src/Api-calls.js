export const getNonAlcoholicDrinks = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
    if (response.status === 404) {
      throw new Error('Page not found');
    } else if (!response.ok) {
      throw new Error('Oops! Something went wrong');
    }
    const data = await response.json();
    return data.drinks; 
  } catch (error) {
    if (error.name === 'TypeError') {
      console.error('Oops! Something went wrong');
    } else {
      console.error(error);
    }
    throw error; 
  }
}
