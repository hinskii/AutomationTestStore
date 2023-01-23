import { homePageLocators } from "../../locators/HomePageLocators"

class HomeNewsletter {
    fromHomePageToNewsletter() {
        cy.get(homePageLocators.newsletterBtn).click()
        cy.get(homePageLocators.header).invoke('text').should('include', 'newsletter')
    }
}

export {HomeNewsletter}