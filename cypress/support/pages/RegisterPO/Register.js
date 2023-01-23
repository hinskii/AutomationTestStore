import { registerLocators } from "../../locators/RegisterLocators";
import { defaultData, register } from "../../FakeData/FakeData";

class Register {
    registerPass() {
        cy.get(registerLocators.firstName).type(defaultData.firstName)
        cy.get(registerLocators.lastName).type(defaultData.lastName)
        cy.get(registerLocators.email).type(defaultData.email)
        cy.get(registerLocators.phone).type(register.phone)
        cy.get(registerLocators.fax).type(register.fax)
        cy.get(registerLocators.company).type(register.company)
        cy.get(registerLocators.firstAddress).type(register.address)
        cy.get(registerLocators.secondAddress).type(register.address)
        cy.get(registerLocators.city).type(register.city)
        cy.get(registerLocators.country).select(2)
        cy.get(registerLocators.zipCode).type(register.zipCode)
        cy.get(registerLocators.nick).type(register.nick)
        cy.get(registerLocators.password).type(register.password)
        cy.get(registerLocators.passwordConfirm).type(register.password)
        cy.get(registerLocators.newsletterSub).check()
        cy.get(registerLocators.policy).check()
        cy.get(registerLocators.state).select(2)
        cy.get(registerLocators.subBtn).click()
        cy.get(registerLocators.header).invoke('text').then(text => {
            cy.get(registerLocators.header).should('have.text', text)
        })
        
    }
    registerFailed() {
        cy.get(registerLocators.lastName).type(defaultData.lastName)
        cy.get(registerLocators.email).type(defaultData.email)
        cy.get(registerLocators.phone).type(register.phone)
        cy.get(registerLocators.fax).type(register.fax)
        cy.get(registerLocators.company).type(register.company)
        cy.get(registerLocators.firstAddress).type(register.address)
        cy.get(registerLocators.secondAddress).type(register.address)
        cy.get(registerLocators.city).type(register.city)
        cy.get(registerLocators.country).select(2)
        cy.get(registerLocators.zipCode).type(register.zipCode)
        cy.get(registerLocators.nick).type(register.nick)
        cy.get(registerLocators.password).type(register.password)
        cy.get(registerLocators.passwordConfirm).type(register.password)
        cy.get(registerLocators.newsletterSub).check()
        cy.get(registerLocators.policy).check()
        cy.get(registerLocators.state).select(2)
        cy.get(registerLocators.subBtn).click()
        cy.get(registerLocators.errorMsg).invoke('text').then(error => {
            cy.get(registerLocators.errorMsg).should('have.text', error)
        })
    }

    
}

export {Register}