describe("visit logo page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      {
        statusCode: 201,
        fixtures: "nonAlcoholicDrinkdata",
      },
    ).as("LogoPage");
    cy.visit("http://localhost:3000/");
    cy.wait("@LogoPage");
  });
  it("should display the logo page", () => {
    cy.wait("@LogoPage").then(interception => {
      cy.get(".page-name")
        .contains("SoberSpirits")
        .get("header")
        .should("be.visible")
        .get('img[alt="logo"]')
        .should("be.visible")
        .get(".click-me")
        .should("be.visible")
        .click()
        .url()
        .should("contain", "http://localhost:3000/main");
    });
  });
});


