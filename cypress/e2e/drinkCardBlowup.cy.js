describe("When the user clicks on a drink image", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      {
        statusCode: 200,
        fixture: "nonAlcoholicDrinkData",
      }
    ).as('NonAlcoholicDrinks');

    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12560",
      {
        statusCode: 200,
        fixture: "singleDrink",
      }
    ).as('DrinkDetails');
  });

  it('should navigate to the blowup card page', () => {
    cy.visit('http://localhost:3000/main'); // Visit the page where the element exists
    cy.wait('@NonAlcoholicDrinks'); // Ensure the API call is intercepted before clicking
    cy.get('.single-drink-card').first().click(); // Replace with the correct class or selector for the clickable element
    cy.url().should('include', '/blowup-page');
  });
});
