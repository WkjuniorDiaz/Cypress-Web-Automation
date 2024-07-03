/// <reference types="cypress" />


describe('Handling Child Windows', () => {

    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.mouse-hover-content').as('btnMouseOver')

        //cy.get('@btnMouseOver').invoke('show')
        cy.contains('Top').click({force:true})
        expect('str').equal('str')

        cy.url().should('include','top')


    })


})