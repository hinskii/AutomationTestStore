import { homePageLocators } from "../../locators/HomePageLocators";

class HomePageSearch {

  searchCategories() {
    // selecting categories and checking if it changing in blue field
    cy.get(homePageLocators.searchCategories).each(($el) => {
      cy.get(homePageLocators.selectedCategory).each(($el2) => {
        cy.wrap($el2.text()).should("include", $el2.text());
        cy.wrap($el).click({ force: true });
      });
    });
  }

  searchWithSelectedCategoryAndText() {
    cy.get(homePageLocators.selectedCategory).then(($el) => {
      cy.wrap($el.text()).should("include", $el.text());
    });
    cy.get(homePageLocators.searchBox).type(data.searchData).type("{enter}");
    cy.get(homePageLocators.searchKeyword).should(
      "have.value",
      data.searchData
    );
    cy.get(homePageLocators.productName).each(($el) => {
      cy.wrap($el.text()).should("include", data.searchData);
    });
  }
}

export {HomePageSearch}
