/// <reference types="cypress" />

/**
 * function for test fields login/register of user
 */
describe("Auth", () => {
  /**
   *  examples value of fields
   */
  const FIRST_NAME = "Karl";
  const LAST_NAME = "Sven";
  const USER_EMAIL = "template11@gmail.tmp";
  const USER_NAME = "user111";
  const PASSWORD_USER = "admin111";
  /**
   * Login test login function
   */
  it("Login user ", () => {
    cy.visit("http://localhost:5173/");
    cy.get("a > .text-white").should("be.visible").click();

    cy.get(".mb-4 > .pl-2").type(USER_NAME).should("have.value", USER_NAME);

    cy.get(":nth-child(3) > .pl-2")
      .type(PASSWORD_USER)
      .should("have.value", PASSWORD_USER);

    cy.get(".text-black > :nth-child(5)").should("be.visible").click();
  });
  /**
   * Register test login function
   */
  it("Register user ", () => {
    cy.visit("http://localhost:5173/auth/register");

    cy.get(":nth-child(2) > .pl-2")
      .type(FIRST_NAME)
      .should("have.value", FIRST_NAME);

    cy.get(":nth-child(3) > .pl-2")
      .type(LAST_NAME)
      .should("have.value", LAST_NAME);

    cy.get(":nth-child(4) > .pl-2")
      .type(USER_NAME)
      .should("have.value", USER_NAME);

    cy.get(":nth-child(5) > .pl-2")
      .type(USER_EMAIL)
      .should("have.value", USER_EMAIL);

    cy.get(":nth-child(6) > .pl-2")
      .type(PASSWORD_USER)
      .should("have.value", PASSWORD_USER);

    cy.get(".text-black > :nth-child(7)").should("be.visible").click();
  });
});
