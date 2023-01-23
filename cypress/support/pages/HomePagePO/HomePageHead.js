import { homePageLocators } from "../../locators/HomePageLocators";

class HomePageHead {

  
    navLogInOrRegister() {
      cy.get(homePageLocators.logInRegister).click();
      cy.url().should("include", "login");
      cy.get(homePageLocators.header).should("be.visible");
    }
  
    navSpecials() {
      cy.get(homePageLocators.specials).click();
      cy.url().should("include", "special");
      cy.get(homePageLocators.header).should("have.text", " Special Offers");
      cy.get(homePageLocators.saleJPG).should("be.visible");
    }
    navCart() {
      cy.get(homePageLocators.cart).click();
      cy.url().should("include", "checkout/cart");
      cy.get(homePageLocators.header).should("have.text", " Shopping Cart");
    }
}

export {HomePageHead}