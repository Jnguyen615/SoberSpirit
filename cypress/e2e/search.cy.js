describe("display main page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      {
        statusCode: 201,
        fixtures: "nonAlcoholicDrinkdata",
      },
    ).as("MainPage");
    cy.visit("http://localhost:3000/");
    cy.wait("@MainPage");
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
      
  });

  it('should search for a drink and find none', () => {
    cy.visit("http://localhost:3000/main")
    .get("form")
      .get('input[name="search"]')
      .should("have.attr", "placeholder", "Search for a drink")
      .get('input[name="search"]')
      .type("beer")
      .get("h2")
      .should('contain', 'No drinks found! Try another search')
      .get(".all-drinks").type('button').click()

  })
});
