/// <reference types="cypress" />

import CartPage from "../../pages/CartPage"
import LoginPage from "../../pages/LoginPage"
import ProductDetailPage from "../../pages/ProductDetailPage"
import ProductPage from "../../pages/ProductPage"

const loginPage = new LoginPage()
const productPage = new ProductPage()
const productDetailPage = new ProductDetailPage()
const cartPage = new CartPage()

describe('Pedidosya Search test suite', () => {

before(() => {
    // runs once before all tests in the block
})

beforeEach(() => {
    // runs before each test in the block
    cy.visit(Cypress.env('url'))

    cy.fixture('exampleData').then( (Jdata) => {
        cy.wrap(Jdata).as('data')
    })
    
})

afterEach(() => {
    // runs after each test in the block
})

after(() => {
    // runs once after all tests in the block
})



it('should display search results when a valid restaurant name is entered', () => {
    cy.get('@data').then((data) => {

        productPage.selectProduct(data.productName)

        productDetailPage.selectAddToCart()
    })

    cy.on('window:alert',(str) => {
        expect(str).to.equal('Product added.')
    })
})

it('should view the cart and proceed to checkout', () => {
    cy.get('@data').then((data) => {
        productPage.selectProduct(data.productName)

        productDetailPage.selectAddToCart()

        productPage.selectCart()

        cy.contains(data.productName).should('exist')

        cartPage.selectPlaceHolder()
    })
})

it('should complete the purchase', () => {
    cy.get('@data').then((data) => {
        productPage.selectProduct(data.productName)

        productDetailPage.selectAddToCart()

        productPage.selectCart()
        
        cartPage.selectPlaceHolder()

        cartPage.fillInformation(data.name,data.country,data.city,data.card,data.month,data.year)

        cartPage.selectPurchaseBtn()

        cartPage.getalertInfo().should('be.visible')

        cartPage.getalertInfo().should('contain.text','Thank you for your purchase!')
    })
})


})