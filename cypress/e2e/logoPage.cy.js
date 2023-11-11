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

describe("should show the error page when it cannot be loaded", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic/*",
      },
      {
        statusCode: 500,
        body: "Not Found",
      },
    );
  });
  it("should show the error page when the page cannot be reached", () => {
    cy.visit("http://localhost:3000/*");
    cy.get(".error-page").get("h1").should("contain", "Something Went Wrong");
  });
});
