/// <reference types="cypress" />


describe('Handling Child Windows', () => {

    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').as('btnOpenTab')

        cy.get('@btnOpenTab')
        .invoke('removeAttr','target')
            .click()

    
        cy.origin('https://www.qaclickacademy.com/', ()=>
        {
            cy.get('a').contains(/^About us$/).as('aboutUsElement')

            cy.get('@aboutUsElement')
            .click()

            cy.get('.section-title.mt-50 h2').should('contain','Welcome to QAClick Academy ')

        })

    })


})