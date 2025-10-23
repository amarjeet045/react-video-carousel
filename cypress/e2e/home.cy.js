describe("Home page test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });

  it("should display the correct title", () => {
    cy.get("[data-testid='title']").should('have.text', 'Content Videos');
  });
});
