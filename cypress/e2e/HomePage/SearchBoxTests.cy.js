/// <reference types="Cypress" />
import { HomePagePO } from "../../support/pages/HomePage"

describe('Search box tests in home page', () => {
    const homePage = new HomePagePO();

    beforeEach(() => {
        homePage.visitHomePage()    
    })

    it('Checking if categories in search bar are changing', () => {
        homePage.searchCategories()
    });

    it('Searching product with search box', () => {
        homePage.searchWithSelectedCategoryAndText()
    });




})