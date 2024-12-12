/// <reference types="cypress" />

import ProductPage from "../../pages/ProductPage"
import LoginPage from "../../pages/LoginPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()

describe('Login Test Suite', () => {

    before(() => {
        // runs once before all tests in the block       
    })

    beforeEach(() => {
        cy.fixture('testCaseData').then( (Jdata) => {
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

        productPage.selectLoginOpt()
        cy.wait(2000)

        
        cy.get('@data').then((data) => {
            loginPage.login(data.correctUsername,data.password)

            productPage.getWelcomeOpt().should('have.text','Welcome '+  data.correctUsername)
        })
    })

    it('Should show wrong password message with wrong username and correct password', () => {

        productPage.selectLoginOpt()
        cy.wait(2000)
        
        cy.get('@data').then((data) => {
            loginPage.login(data.wrongUser,data.password)
        })

        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Wrong password.')
        })
    })

    it('Should show wrong password message with correct username and wrong password', () => {

        productPage.selectLoginOpt()
        cy.wait(2000)
        
        cy.get('@data').then((data) => {
            loginPage.login(data.correctUsername,data.wrongPassword)
        })

        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Wrong password.')
        })
    })

    it('Should show wrong password message with correct wrong and wrong password', () => {

        productPage.selectLoginOpt()
        cy.wait(2000)
        
        cy.get('@data').then((data) => {
            loginPage.login(data.wrongUser,data.wrongPassword)
        })

        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Wrong password.')
        })
    })


})