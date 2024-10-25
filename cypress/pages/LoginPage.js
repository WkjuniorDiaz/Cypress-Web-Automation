/// <reference types="cypress" />

class LoginPage{

    getLoginTitle(){ return cy.get('#logInModalLabel')}

    getUsernameTextField(){ return cy.get('#loginusername')}

    getPasswordTextField(){ return cy.get('#loginpassword')}

    getLoginBtn(){ return cy.get('#logInModal .btn-primary')}

    getCloseBtn(){ return cy.get('#logInModal .btn-secondary')}


}
export default LoginPage;