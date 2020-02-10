describe("Mails page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(".btn-white").click();
  });

  it("displays received mails", () => {
    cy.get(".application-icon > .badge")
      .contains("1")
      .and("be.visible");
    cy.get(".category-title .badge")
      .contains("1")
      .and("be.visible");
    cy.get(".mail-line.unread").contains("Boss");
  });

  it("display a mail details", () => {
    cy.get(".mail-line.unread")
      .click()
      .should("not.have.class", "unread")
      .should("have.class", "active");
    cy.get(".p-3").contains("Nouvelle Mission");
  });

  it("goes to another box and properly close already open mail", () => {
    cy.get(".mail-line.unread").click();
    cy.get('[href="/os/emails/spam"]')
      .click()
      .should("have.class", "active");
    cy.get(".mail-line.active").should("not.exist");
    cy.get(".p-3").should("not.exist");
  });
});
