/// <reference types="cypress" />


class ProductPage{

    getProductPrice(){ return cy.get('.inventory_item_price')}

    getCart(){ return cy.get('.shopping_cart_link')}

    selectCart(){
        this.getCart().click()
    }

}
export default ProductPage;