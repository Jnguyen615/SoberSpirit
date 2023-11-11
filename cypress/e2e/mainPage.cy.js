describe("display main page", () => {
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
      .get(".all-drink-cards > :nth-child(1)")
      .first()
      .contains("h3", "Afterglow")
      .get(".all-drink-cards > :nth-child(1)")
      .first()
      .find('img[alt="Afterglow"]')
      .get(".all-drink-cards > :nth-child(58)")
      .last()
      .contains("h3", "Yoghurt Cooler")
      .get(".all-drink-cards > :nth-child(58)")
      .last()
      .find('img[alt="Yoghurt Cooler"]')
      .get(".all-drink-cards")
      .children()
      .should("have.length", "58")
      .get(".all-drink-cards > :nth-child(1)")
      .first()
      .click();
  });
});
