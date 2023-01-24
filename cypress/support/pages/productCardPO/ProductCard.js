import { productCard } from "../../locators/ProductCardLocators";

class ProductCard {
    productNameOnCard() {
        cy.productNameCard()
    }

    
    priceIsChangingDependsFromQuantity() {
        cy.productNameCard()
        cy.get(productCard.totalPrice).should('be.visible')
        cy.get(productCard.totalPrice).invoke('text').then(price => {
            cy.get(productCard.productQuantity).clear().type(2)
            cy.wait(1000)
            cy.get(productCard.totalPrice).invoke('text').then(newPrice => {
                const priceValue = Number(price.split('$')[1])
                const newPriceValue = Number(newPrice.split('$')[1])
                if (newPriceValue / 2 == priceValue) {
                    cy.get(productCard.totalPrice).should('have.text', newPrice)
                }
                
            })
        })
    }



    addProductToCart() {
        cy.productCardE2E()
    }
}

export {ProductCard}