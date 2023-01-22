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

    

})