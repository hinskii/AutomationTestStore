import { homePageLocators } from "../../locators/HomePageLocators";

class HomePageCurrency {
  
    currencyChangeGPB() {
      cy.get(homePageLocators.changeCurrency)
        .contains(data.poundText)
        .click({ force: true });
      cy.url().should("include", data.pound);
      cy.get(homePageLocators.currencyBtnSymbol)
        .invoke("text")
        .should("include", data.poundSymbol);
      cy.get(homePageLocators.price)
        .invoke("text")
        .should("include", data.poundSymbol);
    }
  
    currencyChangeEUR() {
      cy.get(homePageLocators.changeCurrency)
        .contains(data.euroText)
        .click({ force: true });
      cy.url().should("include", data.euro);
      cy.get(homePageLocators.currencyBtnSymbol)
        .invoke("text")
        .should("include", data.euroSymbol);
      cy.get(homePageLocators.price)
        .invoke("text")
        .should("include", data.euroSymbol);
    }
  
    currencyChangeUS() {
      cy.get(homePageLocators.changeCurrency)
        .contains(data.dolarText)
        .click({ force: true });
      cy.url().should("include", data.dolar);
      cy.get(homePageLocators.currencyBtnSymbol)
        .invoke("text")
        .should("include", data.dolarSymbol);
      cy.get(homePageLocators.price)
        .invoke("text")
        .should("include", data.dolarSymbol);
    }
}

export {HomePageCurrency}