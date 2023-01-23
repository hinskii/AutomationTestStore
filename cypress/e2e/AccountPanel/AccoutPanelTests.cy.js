/// <reference types="Cypress" />
import { AccountPanel } from "../../support/pages/AccountPanelPO/AccountPanel"
describe('Account panel tests', () => {

    const accountPanel = new AccountPanel()

    beforeEach(() => {
        cy.logInSession()
        cy.visitAccountPanel()
    })

    it('Account details changing test', () => {
        accountPanel.accountDetails()
    });

    it('Changing password from account panel test', () => {
        accountPanel.passwordChange()
    })
    it('Add new address in account panel test', () => {
        accountPanel.addNewAddress()
    })

})