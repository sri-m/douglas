/// <reference types="cypress" />

describe('Shopping Cart Search filter testing', () => {
  it('Search filter', () => {
    cy.request('get', 'https://www.douglas.de/de').then((res)=>{
      cy.log(res.status)
    })
    //cy.visit('https://www.douglas.de/de');
    cy.openWebsite()
    cy.url().should('eq', 'https://www.douglas.de/de');
    cy.wait(30000);
    cy.clickAllowAll();
  })
  it('Search filter1', () => {

    cy.visit('https://www.douglas.de/de/c/parfum/01?q=:relevance:flags:discountFlag:flags:computedNewFlag:flags:computedLimited', {
      headers: {
        "Accept-Encoding": "gzip, deflate, br"
      }
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.wait(20000);
    //Click Allow All Cookie Link
    cy.get("#usercentrics-root").shadow().find(".sc-dcJsrY.eIFzaz").click();
    cy.get('[data-testid="facets"]').click();
    cy.get('.facets-mobile-template__content > :nth-child(4)').click();
   // cy.contains("Abercrombie & Fitch").click();
    cy.get("a:nth-of-type(1) input").click();
    cy.get('.facets-step > :nth-child(2) > .button').click();
  })
 
})
