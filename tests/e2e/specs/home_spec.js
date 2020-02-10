describe("Home page", () => {
  it("should visit the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Murder Mystery");
  });

  it("should start the game", () => {
    cy.visit("/");
    cy.get(".btn-white").click();
    cy.url().should("include", "/os/emails/received");
  });

  it("should not duplicate mails if game started several times", () => {
    cy.clock();
    cy.visit("/");
    cy.get(".btn-white").click();
    cy.tick(200); //wait for mails to display
    cy.get(".mail-line.unread").click();
    cy.visit("/");
    cy.get(".btn-white").click();
    cy.tick(200); //wait for mails to display
    cy.get(".mail-line").should("have.length", "3");
  });
});
