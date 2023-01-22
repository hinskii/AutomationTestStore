/// <reference types="Cypress" />
import { HomePagePO } from "../../support/pages/HomePage";

describe("Main menu tests in home page", () => {
  const homePage = new HomePagePO();

  beforeEach(() => {
    homePage.visitHomePage();
  });

  it.only("Moving through whole main menu and check its guiding us to good categories ", () => {
    homePage.addProductToCardFromHomePage();
  });
});
