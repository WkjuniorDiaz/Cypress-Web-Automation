/// <reference types="cypress" />

class HomePage {

    getFieldName(){ return cy.get('.form-group input[name="name"]')}

    getFieldEmail(){ return cy.get('input[name="email"]')}

    getFieldPassword(){ return cy.get('#exampleInputPassword1')}

    getSelectGender(){ return cy.get('select')}

    getEmploymentOpt(){ return cy.get('#inlineRadio3')}

    getTxtShop(){ return cy.get('a').contains(/^Shop$/)}

}
export default HomePage;