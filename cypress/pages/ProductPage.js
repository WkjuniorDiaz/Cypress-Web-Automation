/// <reference types="cypress" />


class ProductPage{

    getLoginOpt(){ return cy.get('#login2')}

    getWelcomeOpt(){ return cy.get('#nameofuser')}

    getProductPrice(){ return cy.get('.inventory_item_price')}

    getCart(){ return cy.get('#cartur')}

    selectLoginOpt(){
        this.getLoginOpt().click()
    }
    
    selectCart(){
        this.getCart().click()
    }

    selectProduct(productName){
        cy.contains(new RegExp('^' + productName + '$')).click()
    }

}
export default ProductPage;