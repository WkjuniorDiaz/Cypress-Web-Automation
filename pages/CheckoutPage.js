/// <reference types="cypress" />

class CheckoutPage{

    getCountryTextField(){ return cy.get('#country')}

    getLoadingImg(){ return cy.get('.lds-ellipsis')}

    getCountryOpts(countryOpt){ return cy.get('.suggestions').contains(new RegExp('^' + countryOpt + '$'))}

    getCheckBox(){ return cy.get('#checkbox2')}

    getBtnPurchase(){ return cy.get('input[value="Purchase"]')}

    getAlert(){ return cy.get('.alert')}





}
export default CheckoutPage;