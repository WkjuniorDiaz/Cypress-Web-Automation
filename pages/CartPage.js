/// <reference types="cypress" />

class CartPage{

    getBtnCheckout(){ return cy.get('.btn.btn-success')}

    getProducsPrice(){ return cy.get('tr td:nth-child(4) strong')}

    getTotalPrice(){ return cy.get('h3 strong')}




}
export default CartPage;