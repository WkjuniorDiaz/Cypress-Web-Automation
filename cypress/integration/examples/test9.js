/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frame Test', () => {

    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class="princing-title"]').should('have.length',2)

    })


})