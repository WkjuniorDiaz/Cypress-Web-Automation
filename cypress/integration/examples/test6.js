/// <reference types="cypress" />


describe('Handling Child Windows', () => {

    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.table-display td').as('tableElement')

        cy.get('@tableElement')
        .contains(/^Master Selenium Automation in simple Python Language$/)
        .siblings('td')
        .last()
        .should('have.value','25')

    })


})