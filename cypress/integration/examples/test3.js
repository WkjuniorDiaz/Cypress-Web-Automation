/// <reference types="cypress" />


describe('My First Test', () => {

    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').as('btnAlert')
        cy.get('#confirmbtn').as('btnConfirm')

        cy.get('@btnAlert')
            .click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('@btnConfirm')
            .click()



        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })




    })


})