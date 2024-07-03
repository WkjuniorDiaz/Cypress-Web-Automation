/// <reference types="cypress" />

class LoginPage{

    getUsernameTextField(){ return cy.get('#user-name')}

    getPasswordTextField(){ return cy.get('#password')}

    getLoginBtn(){ return cy.get('#login-button')}

    getErrorMessage(){ return cy.get('h3[data-test="error"]')}


    login(username,password){
        this.getUsernameTextField().type(username)
        this.getPasswordTextField().type(password)
        this.getLoginBtn().click()
    }



}
export default LoginPage;