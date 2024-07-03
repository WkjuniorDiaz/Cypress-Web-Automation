/// <reference types="cypress" />


describe('My First Test', () => {

    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword')
        .type('ca')

        cy.wait(2000)

        cy.get('.products')
        .find('.product')
        .should('have.length', 4)

        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.product-name').as('productNameElement')

        cy.get('@productNameElement')
        .contains('Carrot')
        .siblings('.product-action')
        .click()

        cy.get('.cart-icon').as('cartIcon')

        cy.get('@cartIcon')
        .click()

        cy.get('button').as('btnProceedCheckout')

        cy.get('@btnProceedCheckout')
        .contains('PROCEED TO CHECKOUT')
        .click()

        cy.contains('Place Order').click()

        cy.get('label').should('have.text','Choose Country')


    })

    it('My second test case', () => {


    })

})