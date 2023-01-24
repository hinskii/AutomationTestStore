/// will work only for homePage tests
import { newsletterLocators } from "./locators/NewsletterLocators";
import { logInLocators } from "./locators/LoginLocators";
import { productCard } from "./locators/ProductCardLocators";


Cypress.Commands.add("visitHomePage", () => {
  cy.fixture("homePage").then((data) => {
    global.globalThis.data = data;
  });
  cy.visit("/");
});

//visit account panel
Cypress.Commands.add("visitAccountPanel", () => {
  cy.visit("/index.php?rt=account/account");
});

// will work only for newsletter tests
Cypress.Commands.add("visitNewsletter", () => {
  cy.visit(
    "/index.php?csrftoken=FS83cTMch6InjYQOHKHDUWc2YdptIFsM&csrfinstance=27&rt=account%2Fsubscriber&email="
  );
});

// session
Cypress.Commands.add("logInSession", () => {
  cy.session("logIn", () => {
    cy.visit("/index.php?rt=account/login");
    cy.get(logInLocators.loginName).type("Jadyn_Konopelski");
    cy.get(logInLocators.password).type("test12345!");
    cy.get(logInLocators.logInBtn).click();
  });
});

//visit register section
Cypress.Commands.add("visitRegister", () => {
  cy.visit("index.php?rt=account/create");
});

//visit log in section
Cypress.Commands.add("visitLogIn", () => {
  cy.fixture("login").then((data) => {
    global.globalThis.data = data;
  });
});

//login
Cypress.Commands.add("logIn", (username, password) => {
  cy.fixture("login").then((data) => {
    global.globalThis.data = data;
  });
  cy.visit("/index.php?rt=account/login");
  cy.get(logInLocators.loginName).type(username);
  cy.get(logInLocators.password).type(password);
  cy.get(logInLocators.logInBtn).click();
});

// newsletter validation command
Cypress.Commands.add(
  "newsletterFormValidation",
  (firstName, lastName, email) => {
    cy.get(newsletterLocators.firstName).type(firstName);
    cy.get(newsletterLocators.lastName).type(lastName);
    cy.get(newsletterLocators.email).type(email);
    cy.get(newsletterLocators.newsletterBtn).click();
    cy.get(newsletterLocators.errorMsg)
      .invoke("text")
      .then((text) => {
        cy.get(newsletterLocators.errorMsg).should("have.text", text);
      });
  }
);

//visit category
Cypress.Commands.add("visitCategory", () => {
  cy.visit("/");
  cy.get("a[href*='product/category&path=']")
    .contains("Apparel & accessories")
    .click();
});

//checking product name

Cypress.Commands.add("productNameCard", () => {
  cy.get(productCard.productName)
    .eq(0)
    .invoke("text")
    .then((productName) => {
      cy.get(productCard.getProduct).eq(0).click();
      cy.get(productCard.productNameOnCard)
        .invoke("text")
        .then((productCardName) => {
          if (productName === productCardName) {
            cy.get(productCard.productNameOnCard).should(
              "have.text",
              productName
            );
          }
        });
    });
});

// ADD Product to card E2E

Cypress.Commands.add("productCardE2E", () => {
  cy.get(productCard.productName)
    .eq(0)
    .invoke("text")
    .then((productName) => {
      cy.get(productCard.getProduct).eq(0).click();
      cy.get(productCard.productNameOnCard)
        .invoke("text")
        .then((productCardName) => {
          if (productName === productCardName) {
            cy.get(productCard.productNameOnCard).should(
              "have.text",
              productName
            );
          }
        });
    });
  cy.get(productCard.totalPrice).should("be.visible");
  cy.get(productCard.totalPrice)
    .invoke("text")
    .then((price) => {
      cy.get(productCard.productQuantity).clear().type(2);
      cy.wait(1000);
      cy.get(productCard.totalPrice)
        .invoke("text")
        .then((newPrice) => {
          const priceValue = Number(price.split("$")[1]);
          const newPriceValue = Number(newPrice.split("$")[1]);
          if (newPriceValue / 2 == priceValue) {
            cy.get(productCard.totalPrice).should("have.text", newPrice);
          }
        });
    });
    cy.get(productCard.radioSize).eq(0).check()
    cy.get(productCard.cardBtn).click()
    cy.get(productCard.cardHeader).should('be.visible')
});
