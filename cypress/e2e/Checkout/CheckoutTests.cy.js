/// <reference types="Cypress" />
import { Checkout } from "../../support/pages/CheckoutPO/Checkout";

describe('Checkout tests', () => {
    const checkout = new Checkout();
    beforeEach(() => {
        cy.logInSession()
        cy.visitCategory()
        cy.productCardE2E()
    })

    it('Order product tests', () => {
        checkout.confirmOrder()
    });
});