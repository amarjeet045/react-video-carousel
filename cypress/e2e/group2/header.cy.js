describe("Header component test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });

  it("should display the header with correct text", () => {
    cy.get("[data-testid='header']").should('exist');
  });
});