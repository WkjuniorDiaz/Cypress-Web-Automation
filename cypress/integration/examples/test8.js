/// <reference types="cypress" />


describe('Handling Child Windows', () => {

    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#openwindow').as('btnOpenWindow')

        cy.get('@btnOpenWindow').then(function (el) {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                cy.get('div.sub-menu-bar a[href="about"]').click()
            })
            

        })


    })


})