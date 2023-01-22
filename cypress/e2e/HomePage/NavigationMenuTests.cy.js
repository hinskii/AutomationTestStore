/// <reference types="Cypress" />
import { HomePagePO } from "../../support/pages/HomePage"

describe('Main menu tests in home page', () => {
    const homePage = new HomePagePO();

    beforeEach(() => {
        homePage.visitHomePage()    
    })

    it.only('"Home" option tests', () => {
        homePage.mainNavigationIteration()
    })


})