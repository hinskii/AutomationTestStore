/// <reference types="Cypress" />
import { HomePagePO } from "../../support/pages/HomePage"

describe('Testing all home page possible actions working properly', () => {
    const homePage = new HomePagePO();

    beforeEach(() => {
        homePage.visitHomePage()    
    })

    it('Checking that currency is changing to GBP correctly', () => {
        homePage.currencyChangeGPB()
    })

    it('Checking that currency is changing to EUR correctly', () => {
        homePage.currencyChangeEUR()
    })
        

    it('Checking that currency is changing to USD correctly', () => {
        homePage.currencyChangeUS()
    })

    it ('Navigating to log in or register form from home page', () => {
        homePage.navLogInOrRegister()
    })
    it('Navigating to specials from home page', () => {
        homePage.navSpecials()
    });
    it('Navigation to cart from home page', () => {
        homePage.navCart()
    });
    it('Checking if categories in search bar are changing', () => {
        homePage.searchCategories()
    });

    it.only('Searching product with search box', () => {
        homePage.searchWithSelectedCategoryAndText()
    });



})