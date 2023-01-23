import { logInLocators } from "../../locators/LoginLocators";

class LogIn {
    logInPass() {
        cy.logIn(data.nickname, data.password)
        cy.get(logInLocators.welcomeMsg).should('be.visible')
    }
    logInFailedBadPassword() {
        cy.logIn(data.nickname, data.wrongPass)
        cy.get(logInLocators.errorMsg).invoke('text').then(text => {
            cy.get(logInLocators.errorMsg).should('have.text', text)
        })
    }
}

export {LogIn}