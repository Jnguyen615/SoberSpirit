
describe("display main page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      {
        statusCode: 201,
        fixtures: "nonAlcoholicDrinkdata",
      }
    ).as("HomePage");

    cy.visit("http://localhost:3000/main");
    cy.wait("@HomePage");
  });   

  it("should show main page", () => {
    
    cy.visit("http://localhost:3000/main")
      .get('img[alt="logo"]')
      .should("be.visible")
      .get("h3")
      .should("contain", "Welcome to SoberSpirits")
      .get("p")
      .should(
        "contain",
        "A place for non drinkers to experiment with creating exciting mocktails!",
      )
      .get("form")
      .get('input[name="search"]')
      .get('input[name="search"]')
      .get('input[placeholder="Search for a drink"]')
      .get('.no-drinks-found-message')
      .should('contain', 'No drinks found! Try another search!')
  })
})