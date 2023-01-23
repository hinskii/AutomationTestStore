/// will work only for homePage tests
import { newsletterLocators } from "./locators/NewsletterLocators";


Cypress.Commands.add("visitHomePage", () => {
  cy.fixture("homePage").then((data) => {
    global.globalThis.data = data;
  });
  cy.visit("/");
});

// will work only for newsletter tests
Cypress.Commands.add("visitNewsletter", () => {
  cy.visit(
    "/index.php?csrftoken=FS83cTMch6InjYQOHKHDUWc2YdptIFsM&csrfinstance=27&rt=account%2Fsubscriber&email="
  );
});

//visit register section
Cypress.Commands.add('visitRegister', () =>{
  cy.visit('index.php?rt=account/create')
})

// newsletter validation command
Cypress.Commands.add("newsletterFormValidation", (firstName, lastName, email) => {
  cy.get(newsletterLocators.firstName).type(firstName);
  cy.get(newsletterLocators.lastName).type(lastName);
  cy.get(newsletterLocators.email).type(email);
  cy.get(newsletterLocators.newsletterBtn).click();
  cy.get(newsletterLocators.errorMsg)
    .invoke("text")
    .then((text) => {
      cy.get(newsletterLocators.errorMsg).should("have.text", text);
    });
});

