/// <reference types="cypress" />


class ProductPage{

    getLoginOpt(){ return cy.get('#login2')}

    getWelcomeOpt(){ return cy.get('#nameofuser')}

    getProductPrice(){ return cy.get('.inventory_item_price')}

    getCart(){ return cy.get('#cartur')}

}
export default ProductPage;