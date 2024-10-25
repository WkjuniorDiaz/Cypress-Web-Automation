/// <reference types="cypress" />

import CartActions from "../../actions/CartActions"
import LoginActions from "../../actions/LoginActions"
import ProductActions from "../../actions/ProductActions"
import ProductDetailActions from "../../actions/ProductDetailActions"
import CartAssertions from "../../assertions/CartAssertions"
import ProductAssertions from "../../assertions/ProductAssertions"

const loginActions = new LoginActions()
const productActions = new ProductActions()
const cartActions = new CartActions()
const productDetailActions = new ProductDetailActions()
const cartAssertion = new CartAssertions()
const productAssertion = new ProductAssertions()

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

    productActions.selectLoginOpt()
    cy.wait(2000)
       
    cy.get('@data').then((data) => {
        loginActions.login(data.correctUsername,data.password)
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

        productActions.selectProduct(data.productName)

        productDetailActions.selectAddToCart()
    })

    productAssertion.verifyProductAdditionMessage()
})

it('should view the cart and proceed to checkout', () => {
    cy.get('@data').then((data) => {
        productActions.selectProduct(data.productName)

        productDetailActions.selectAddToCart()

        productActions.selectCart()

        cartAssertion.verifyProductExistInOrder(data.productName)

        cartActions.selectPlaceHolder()
    })
})

it('should complete the purchase', () => {
    cy.get('@data').then((data) => {
        productActions.selectProduct(data.productName)

        productDetailActions.selectAddToCart()

        productActions.selectCart()
        
        cartActions.selectPlaceHolder()

        cartActions.fillInformation(data.name,data.country,data.city,data.card,data.month,data.year)

        cartActions.selectPurchaseBtn()

        cartAssertion.verifyVoucherMessage()

    })
})


})