describe("Application", () => {
  it("should have a title", () => {
    cy.visit("/");

    cy.get("h1").should("exist");
  });

  it("should have a github link", () => {
    cy.visit("/");

    const githubLink = cy.get("a[title~='Github']");

    githubLink.should(
      "have.attr",
      "href",
      "https://github.com/thomasmaqua/maqua-home"
    );
  });
});
