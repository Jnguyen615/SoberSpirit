describe("template spec", () => {
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
    cy.get(".page-name").contains("SoberSpirits");
    cy.get("header").should("be.visible");
    cy.get('img[alt="logo"]').should("be.visible");
    cy.get(".click-me").should("be.visible");
  });
});
