/// <reference types="Cypress" />
import { HomePageNavigation } from "../../support/pages/HomePagePO/HomePageNavigation";

describe("Main menu tests in home page", () => {
  const homePage = new HomePageNavigation();

  beforeEach(() => {
    cy.visitHomePage()
  });

  it("Moving through whole main menu and check its guiding us to good categories ", () => {
    homePage.mainNavigationIteration();
  });
});
