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



    selectPlaceHolder(){
        this.getplaceHolderbtn().click()
    }

    fillInformation(name,country,city,card,month,year){
        this.getnameField().type(name)
        this.getcountryField().type(country)
        this.getcityField().type(city)
        this.getcreditCardField().type(card)
        this.getmonthField().type(month)
        this.getyearField().type(year)
    }

    selectPurchaseBtn(){
        this.getpurchaseBtn().click()
    }

}
export default CartPage;