/// <reference types="Cypress" />
import { ProductCard } from "../../support/pages/productCardPO/ProductCard";



describe("Product Card tests", () => {
  const productCard = new ProductCard()
  beforeEach(() => {
    cy.visitCategory()
  });

  it("Check products name in product card is same as product name which I choose from category", () => {
    productCard.productNameOnCard()
  });

  it('Testing if the price changes value with the number of products', () => {
    productCard.priceIsChangingDependsFromQuantity()
  });

  it('Add product to cart from product card test', () => {
    productCard.addProductToCart()
  });
});