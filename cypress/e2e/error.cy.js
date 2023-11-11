describe("should show the error page when it cannot be loaded or an incorrect url is entered", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic/*",
      },
      {
        statusCode: 404,
        body: "Not Found",
      },
    );
  });
  it("should show the error page when the page cannot be reached", () => {
    cy.visit("http://localhost:3000/12560")
    cy.get(".error-page")
    .get("h1")
    .should("contain", "Something Went Wrong");
  });
  it("should show the error page when the server encounters an internal error (500)", () => {
    cy.visit("http://localhost:3000/some-page");
    cy.get(".error-page")
    .get("h1")
    .should("contain", "Something Went Wrong");
  });
});
