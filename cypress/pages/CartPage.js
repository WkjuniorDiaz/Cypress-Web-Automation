/// <reference types="cypress" />


class CartPage{

    getplaceHolderbtn(){ return cy.get('.btn-success')}

    getnameField(){ return cy.get('#name')}

    getcountryField(){ return cy.get('#country')}

    getcityField(){ return cy.get('#city')}

    getcreditCardField(){ return cy.get('#card')}

    getmonthField(){ return cy.get('#month')}

    getyearField(){ return cy.get('#year')}

    getcloseBtn(){ return cy.contains('Close')}

    getpurchaseBtn(){ return cy.get('#orderModal .btn-primary')}

    getalertInfo(){ return cy.get('.sweet-alert')}



}
export default CartPage;