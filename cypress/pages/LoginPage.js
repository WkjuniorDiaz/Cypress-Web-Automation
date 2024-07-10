/// <reference types="cypress" />

class LoginPage{

    getLoginTitle(){ return cy.get('#logInModalLabel')}

    getUsernameTextField(){ return cy.get('#loginusername')}

    getPasswordTextField(){ return cy.get('#loginpassword')}

    getLoginBtn(){ return cy.get('.btn.btn-primary').contains('Log in')}

    getCloseBtn(){ return cy.get('.btn.btn-secondary').contains('Close')}


    login(username,password){
        this.getUsernameTextField().type(username)
        this.getPasswordTextField().type(password)
        this.getLoginBtn().click()
    }



}
export default LoginPage;