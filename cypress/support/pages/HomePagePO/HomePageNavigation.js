import { homePageLocators } from "../../locators/HomePageLocators";

class HomePageNavigation {

  mainNavigationIteration() {
    cy.get(homePageLocators.mainMenu).each(($el, index) => {
      cy.get(homePageLocators.header).each(($el2) => {
        cy.wrap($el2.text()).should("include", $el2.text());
        cy.get(homePageLocators.mainMenu).eq(index).click({ force: true });
      });
    });
  }
}
export {HomePageNavigation}