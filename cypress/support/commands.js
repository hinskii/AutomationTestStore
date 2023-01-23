/// will work only for homePage
Cypress.Commands.add("visitHomePage", () => {
  cy.fixture("homePage").then((data) => {
    global.globalThis.data = data;
  });
  cy.visit("/");
});
