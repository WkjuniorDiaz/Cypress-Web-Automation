/// <reference types="cypress" />

import DashboardPage from "../../pages/DashboardPage"
import LoginPage from "../../pages/LoginPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Test Suite', () => {

    before(() => {
        // runs once before all tests in the block
        cy.fixture('exampleData').then( (Jdata) => {
            cy.wrap(Jdata).as('data')
        })
    })

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
    })

    afterEach(() => {
        // runs after each test in the block
    })

    after(() => {
        // runs once after all tests in the block
    })



    it('Should login with valid credentials', () => {
        
        cy.get('@data').then((data) => {
            loginPage.login(data.validUsername,data.password)
        })

        dashboardPage.getTitle().should('have.text','Products')
    })

    it('Should show locked out message with locked out user credentials', () => {
        
        cy.get('@data').then((data) => {
            loginPage.login(data.lockedOutUser,data.password)
        })

        loginPage.getErrorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.')

    })

    it('Should login with problem user credentials and show wrong images for products', () => {
        
        cy.get('@data').then((data) => {
            loginPage.login(data.problemUser,data.password)
        })

        dashboardPage.getImgProducts().each((el,index,$list) => {
            el.should('have.attr','src','/static/media/sl-404.168b1cce.jpg')
        })

    })

    it('Should show not match message with correct user and wrong password', () => {
        
        cy.get('@data').then((data) => {
            loginPage.login(data.validUsername,data.wrongPassword)
        })


        loginPage.getErrorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })


})