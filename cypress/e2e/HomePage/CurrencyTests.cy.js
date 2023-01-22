/// <reference types="Cypress" />
import { HomePagePO } from "../../support/pages/HomePage";

describe("Changing currency tests in home page", () => {
  const homePage = new HomePagePO();

  beforeEach(() => {
    homePage.visitHomePage();
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
