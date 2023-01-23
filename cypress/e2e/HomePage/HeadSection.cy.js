/// <reference types="Cypress" />
import { HomePageHead } from "../../support/pages/HomePagePO/HomePageHead";



describe('Head section categories tests in home page', () => {
const homePage = new HomePageHead();


beforeEach(() => {
    cy.visitHomePage() 
})

it ('Navigating to log in or register form from home page', () => {
    homePage.navLogInOrRegister()
})
it('Navigating to specials from home page', () => {
    homePage.navSpecials()
});
it('Navigation to cart from home page', () => {
    homePage.navCart()

})
})