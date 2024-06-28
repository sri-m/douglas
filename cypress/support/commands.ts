/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 
Cypress.Commands.add('openWebsite', ()=> {
  cy.fixture('values').then((data) => {
    cy.visit(data.url, {
      headers: {
        "Accept-Encoding": "gzip, deflate, br"
      }
    })
  
  })  
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
})

Cypress.Commands.add('clickAllowAll', () => {
  //Click Allow All Cookie Link
  cy.get("#usercentrics-root").shadow().find(".sc-dcJsrY.eIFzaz").click();
  //Checking Parfum link is visible then click after that url validation
  cy.get('[href="/de/c/parfum/01"] > div').should('be.visible');
  cy.get('[href="/de/c/parfum/01"] > div').click();
  cy.url().should('eq', 'https://www.douglas.de/de/c/parfum/01');
  //cy.get("div[data-testid='brand']").click({force: true})
  //cy.contains("div[data-testid='brand']").click();
  //cy.contains("Abercrombie & Fitch").click();
  //cy.get("div:nth-of-type(3) [data-testid='arrow-icon']").click();
  //cy.get("a:nth-of-type(1) input").click();
  //cy.get("[data-testid='gender']").click();
  //cy.get("a:nth-of-type(1) input").click();
  //cy.get("[data-testid='Produktauszeichnung']").click();
  //cy.get("a:nth-of-type(1) input").click();
})