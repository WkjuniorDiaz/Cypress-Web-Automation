/// <reference types="cypress" />

import LoginActions from "../../actions/LoginActions"
import ProductActions from "../../actions/ProductActions"
import ProductAssertions from "../../assertions/ProductAssertions"
import LoginAssertions from "../../assertions/LoginAssertions"

const loginActions = new LoginActions()
const productActions = new ProductActions()
const productAssertion = new ProductAssertions()
const loginAssertion = new LoginAssertions()

describe('Login Test Suite', () => {

    before(() => {
        // runs once before all tests in the block       
    })

    beforeEach(() => {
        cy.fixture('exampleData').then( (Jdata) => {
            cy.wrap(Jdata).as('data')
        })

        cy.visit(Cypress.env('url'))
    })

    afterEach(() => {
        // runs after each test in the block
    })

    after(() => {
        // runs once after all tests in the block
    })



    it('Should login with valid credentials', () => {

        productActions.selectLoginOpt()
        cy.wait(2000)

        
        cy.get('@data').then((data) => {
            loginActions.login(data.correctUsername,data.password)

            productAssertion.verifyWelcomeMessage(data.correctUsername)
        })
    })

    it('Should show wrong password message with wrong username and correct password', () => {

        productActions.selectLoginOpt()
        cy.wait(2000)
        
        cy.get('@data').then((data) => {
            loginActions.login(data.wrongUser,data.password)
        })

        loginAssertion.verifyErrorMessage()
    })

    it('Should show wrong password message with correct username and wrong password', () => {

        productActions.selectLoginOpt()
        cy.wait(2000)
        
        cy.get('@data').then((data) => {
            loginActions.login(data.correctUsername,data.wrongPassword)
        })

        loginAssertion.verifyErrorMessage()
    })

    it('Should show wrong password message with correct wrong and wrong password', () => {

        productActions.selectLoginOpt()
        cy.wait(2000)
        
        cy.get('@data').then((data) => {
            loginActions.login(data.wrongUser,data.wrongPassword)
        })

        loginAssertion.verifyErrorMessage()
    })


})