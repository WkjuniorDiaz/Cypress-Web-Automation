/// <reference types="cypress" />

import LoginPage from "../../pages/LoginPage"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ProductPage from "../../pages/ProductPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()
const productDetailPage = new ProductDetailPage()

describe('Swag Labs Product test suite', () => {

before(() => {
    // runs once before all tests in the block
})

beforeEach(() => {
    // runs before each test in the block
    cy.visit(Cypress.env('url'))

    cy.fixture('exampleData').then( (Jdata) => {
        cy.wrap(Jdata).as('data')
    })

    productPage.selectLoginOpt()
    cy.wait(2000)
       
    cy.get('@data').then((data) => {
        loginPage.login(data.correctUsername,data.password)

        productPage.getWelcomeOpt().should('have.text','Welcome '+  data.correctUsername)
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

        productPage.selectProduct(data.productName)

        productDetailPage.selectAddToCart()

        productPage.selectCart()

        cy.contains(data.productName).should('exist')
    })

    
    
})


})