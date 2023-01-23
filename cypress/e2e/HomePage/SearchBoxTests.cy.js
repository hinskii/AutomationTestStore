/// <reference types="Cypress" />
import { HomePageSearch } from "../../support/pages/HomePagePO/HomePageSearch";

describe("Search box tests in home page", () => {
  const homePage = new HomePageSearch();

  beforeEach(() => {
    cy.visitHomePage()
  });

  it("Checking if categories in search bar are changing", () => {
    homePage.searchCategories();
  });

  it("Searching product with search box", () => {
    homePage.searchWithSelectedCategoryAndText();
  });
});
