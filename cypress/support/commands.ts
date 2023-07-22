/// <reference types="cypress" />

export {};

declare global {
    namespace Cypress {
        interface Chainable {
            acceptAllCookies(): Chainable<JQuery<HTMLElement>>
        }
    }
}

Cypress.Commands.add('acceptAllCookies', (): void => {
    cy.get('button')
        .contains('Accept All Cookies')
        .click();
});
