import { newsletterLocators } from "../../locators/NewsletterLocators";
import { defaultData } from "../../FakeData/FakeData";

class Newsletter {
  newsletterPass() {
    cy.newsletterFormValidation(
      defaultData.firstName,
      defaultData.lastName,
      defaultData.email
    );
  }

  newsletterFailedEmail() {
    cy.newsletterFormValidation(
      defaultData.firstName,
      defaultData.lastName,
      "test"
    );
  }
  newsletterFailedFirstName() {
    cy.get(newsletterLocators.firstName);
    cy.get(newsletterLocators.lastName).type(defaultData.lastName);
    cy.get(newsletterLocators.email).type(defaultData.email);
    cy.get(newsletterLocators.newsletterBtn).click();
    cy.get(newsletterLocators.errorMsg)
      .invoke("text")
      .then((text) => {
        cy.get(newsletterLocators.errorMsg).should("have.text", text);
      });
  }

  newsletterFailedLastName() {
    cy.get(newsletterLocators.firstName).type(defaultData.firstName)
    cy.get(newsletterLocators.lastName)
    cy.get(newsletterLocators.email).type(defaultData.email);
    cy.get(newsletterLocators.newsletterBtn).click();
    cy.get(newsletterLocators.errorMsg)
      .invoke("text")
      .then((text) => {
        cy.get(newsletterLocators.errorMsg).should("have.text", text);
      });
  }
  newsletterNothingFilled() {
    cy.get(newsletterLocators.newsletterBtn).click();
    cy.get(newsletterLocators.errorMsg)
      .invoke("text")
      .then((text) => {
        cy.get(newsletterLocators.errorMsg).should("have.text", text);
      });
  }
}

export { Newsletter };
