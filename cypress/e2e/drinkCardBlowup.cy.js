describe("When a user visits the homepage, they can click on a drink card and see and blowup card of that drink", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      {
        statusCode: 201,
        fixtures: "nonAlcoholicDrinkdata",
      },
    ).as("HomePage");
    cy.visit("http://localhost:3000/");
    cy.wait("@HomePage");
  });

    it("should show the drink card blowup", () => {
      cy.visit("http://localhost:3000/drink/12560")
        .get(".app-logo")
        .should("exist")
        .url()
        .should("eq", "http://localhost:3000/drink/12560")
        .get(".drink-blowup")
        .get("h1")
        .should("contain", "Afterglow")
        .get('img[alt="Afterglow"]')
        .should("exist")
        .get("ul")
        .should("contain", "Ingredients")
        .get("ul > :nth-child(1)")
        .contains("1 part Grenadine")
        .get("ul > :nth-child(2)")
        .contains("4 parts Orange juice");
      cy.get("ul > :nth-child(3)")
        .contains("4 parts Pineapple juice")
        .get(".glass-type")
        .contains("Glass type: Highball Glass")
        .get(".drink-blowup > :nth-child(5)")
        .contains("Instructions: Mix. Serve over ice.")
        .get(".home-btn")
        .contains("Back to Home")
        .click();
    });
  });

