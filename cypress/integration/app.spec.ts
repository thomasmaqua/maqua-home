describe("Application", () => {
  it("should have a title", () => {
    cy.visit("/");

    cy.get("h1").should("exist");
  });
});
