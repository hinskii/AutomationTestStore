import { homePageLocators } from "../locators/HomePageLocators"

class HomePagePO {
    visitHomePage() {
        cy.fixture("homePage").then((data) => {
            global.globalThis.data = data
        })
        cy.visit('/')
    }
    
    currencyChangeGPB() {
        cy.get(homePageLocators.changeCurrency).contains(data.poundText).click({force:true})
        cy.url().should('include', data.pound)
        cy.get(homePageLocators.currencyBtnSymbol).invoke('text').should('include', data.poundSymbol)
        cy.get(homePageLocators.price).invoke('text').should('include', data.poundSymbol)
    }

    currencyChangeEUR() {
        cy.get(homePageLocators.changeCurrency).contains(data.euroText).click({force:true})
        cy.url().should('include', data.euro)
        cy.get(homePageLocators.currencyBtnSymbol).invoke('text').should('include', data.euroSymbol)
        cy.get(homePageLocators.price).invoke('text').should('include', data.euroSymbol)
    }

    currencyChangeUS() {
        cy.get(homePageLocators.changeCurrency).contains(data.dolarText).click({force:true})
        cy.url().should('include', data.dolar)
        cy.get(homePageLocators.currencyBtnSymbol).invoke('text').should('include', data.dolarSymbol)
        cy.get(homePageLocators.price).invoke('text').should('include', data.dolarSymbol)
    }

    navLogInOrRegister() {
        cy.get(homePageLocators.logInRegister).click()
        cy.url().should('include', 'login')
        cy.get(homePageLocators.header).should('be.visible')
    }

    navSpecials() {
        cy.get(homePageLocators.specials).click()
        cy.url().should('include', 'special')
        cy.get(homePageLocators.header).should('have.text', ' Special Offers')
        cy.get(homePageLocators.saleJPG).should('be.visible')
    }
    navCart() {
        cy.get(homePageLocators.cart).click()
        cy.url().should('include', 'checkout/cart')
        cy.get(homePageLocators.header).should('have.text', ' Shopping Cart')
    }
    searchCategories() {
        // selecting categories and checking if it changing in blue field
        cy.get(homePageLocators.searchCategories).each($el => {
            cy.get(homePageLocators.selectedCategory).each($el2 => {
                cy.wrap($el2.text()).should('include', $el2.text())
                cy.wrap($el).click({force:true})
                
                
                
            })
            

        })

        
    }
    
    searchWithSelectedCategoryAndText() {
        cy.get(homePageLocators.selectedCategory).then($el => {
            cy.wrap($el.text()).should('include', $el.text())
        })
        cy.get(homePageLocators.searchBox)
        .type(data.searchData)
        .type('{enter}')
        cy.get(homePageLocators.searchKeyword).should('have.value', data.searchData)
        cy.get(homePageLocators.productName).each($el =>{
            cy.wrap($el.text()).should('include', data.searchData)
        })

    }

}

export {HomePagePO}