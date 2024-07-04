/// <reference types="cypress" />

import LoginPage from "../../pages/LoginPage"
import ProductPage from "../../pages/ProductPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()

describe('Swag Labs Product test suite', () => {

before(() => {
    // runs once before all tests in the block
    cy.fixture('exampleData').then( (Jdata) => {
        cy.wrap(Jdata).as('data')
    })
})

beforeEach(() => {
    // runs before each test in the block
    cy.visit(Cypress.env('url'))
    cy.get('@data').then((data) => {
        loginPage.login(data.validUsername,data.password)
    })
})

afterEach(() => {
    // runs after each test in the block
})

after(() => {
    // runs once after all tests in the block
})



it('should add a product to the cart', () => {
    cy.get('@data').then((data) => {
        var productSelected = data.productName

        productSelected.forEach(productName => {
            cy.selectProduct(productName)
        })

        productPage.selectCart()

        productSelected.forEach(productName => {
            cy.contains(new RegExp('^' + productName + '$')).should('exist')
        })
    })
    
})


})