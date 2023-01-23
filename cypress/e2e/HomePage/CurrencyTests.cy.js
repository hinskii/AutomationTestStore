/// <reference types="Cypress" />
import { HomePageCurrency } from "../../support/pages/HomePagePO/HomePageCurrency";

describe("Changing currency tests in home page", () => {
  const homePage = new HomePageCurrency();

  beforeEach(() => {
    cy.visitHomePage()
  });

  it("Checking that currency is changing to GBP correctly", () => {
    homePage.currencyChangeGPB();
  });

  it("Checking that currency is changing to EUR correctly", () => {
    homePage.currencyChangeEUR();
  });

  it("Checking that currency is changing to USD correctly", () => {
    homePage.currencyChangeUS();
  });
});
