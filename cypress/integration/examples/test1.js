/// <reference types="cypress" />


describe('My First Test', () => {

  it('My first test case', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      cy.get('#checkBoxOption1').as('checkbox1')

      cy.get('@checkbox1')
      .check()
      .should('be.checked')
      .and('have.value','option1')

      cy.get('@checkbox1')
      .uncheck()
      .should('not.be.checked')

      cy.get('input[type=checkbox]').as('checkboxList')

      cy.get('@checkboxList')
      .check(['option2','option3'])

      cy.get('select').as('selectListElement')

      cy.get('@selectListElement')
      .select('option2')
      .should('have.value','option2')

      cy.get('#autocomplete').as('autocompleteElement')

      cy.get('@autocompleteElement')
      .type('india')

      cy.get('.ui-menu-item div').as('autocompleteOptions')
      
      cy.get('@autocompleteOptions')
      .contains(/^India$/)
      .click()

      cy.get('@autocompleteElement')
      .should('have.value','India')

      cy.get('#displayed-text').as('hideTextField')
      cy.get('#hide-textbox').as('btnHide')
      cy.get('#show-textbox').as('btnShow')

      cy.get('@hideTextField')
      .should('be.visible')

      cy.get('@btnHide')
      .click()

      cy.get('@hideTextField')
      .should('not.be.visible')

      cy.get('@btnShow')
      .click()

      cy.get('@hideTextField')
      .should('be.visible')


  })

  it('My second test case', () => {


  })

})