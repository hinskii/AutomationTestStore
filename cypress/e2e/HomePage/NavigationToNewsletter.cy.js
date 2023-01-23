/// <reference types="Cypress" />
import { HomeNewsletter } from "../../support/pages/HomePagePO/HomePageNewsletter";

describe('navigating to newsletter from home page', () => {
    const homePage = new HomeNewsletter()
    beforeEach(() => {
        cy.visitHomePage()
      });


    it('Newsletter subscribe button should guide me to newsletter form', () => {
        homePage.fromHomePageToNewsletter()
    })
});