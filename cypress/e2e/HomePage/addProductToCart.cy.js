/// <reference types="Cypress" />
import { HomePageAddProduct } from "../../support/pages/HomePagePO/HomePageAdd";



describe("Main menu tests in home page", () => {
  const homePage = new HomePageAddProduct()

  beforeEach(() => {
    cy.visitHomePage()
  });

  it.only("Moving through whole main menu and check its guiding us to good categories ", () => {
    homePage.addProductToCardFromHomePage();
  });
});
