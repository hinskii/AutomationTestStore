import { checkout } from "../../locators/CheckoutLocators";

class Checkout {
    confirmOrder() {
        cy.get(checkout.totalPrice).eq(1).invoke('text').then(price => {
            cy.log(price)
            cy.get(checkout.confirmBtn).click()
            cy.get(checkout.toPay).eq(1).invoke('text').then(finalPrice => {
                if(Number(price.split('$')[1]) === Number(finalPrice.split('$')[1] - 2)) {
                    cy.get(checkout.checkoutBtn).click()
                    
                }
            })
        })
        cy.wait(1000)
        cy.get(checkout.successMsg).should('be.visible')
    }
}

export {Checkout}