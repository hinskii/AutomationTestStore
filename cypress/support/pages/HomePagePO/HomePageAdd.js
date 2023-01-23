import { homePageLocators } from "../../locators/HomePageLocators";

class HomePageAddProduct {

  addProductToCardFromHomePage() {
    cy.get(homePageLocators.addProductToCard).then(($el) => {
      cy.get(homePageLocators.price)
        .invoke("text")
        .then((price) => {
          cy.get(homePageLocators.cartPrice).then((cartPrice) => {
            cy.wrap($el).eq(0).click();
            cy.get(homePageLocators.basketIcon).should("be.visible");

            cy.get(cartPrice)
              .invoke("text")
              .then((cartPrice2) => {
                const secondPrice = cartPrice2.split("$");
                const realPrice = price.split("$");
                cy.log(realPrice[1]);
                cy.log(secondPrice[1]);

                if ((realPrice[1] = secondPrice[1])) {
                  cy.get(homePageLocators.cartPrice)
                    .invoke("text")
                    .should("include", realPrice[1]);
                }
              });
          });
        });
    });
  }
}

export {HomePageAddProduct}
