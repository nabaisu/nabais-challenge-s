/* eslint-disable no-undef */
describe('exercise 5', () => {
  before(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should show gender people data', () => {
    cy.get('[data-cy=gender-groups]').contains('56%');
    cy.get('[data-cy=gender-groups]').contains('44%');
  });

  it('should display the table information', () => {
    cy.get('[data-cy=cell-1-1]').contains('28');
    cy.get('[data-cy=cell-1-2]').contains('Stephens Townsend');
    cy.get('[data-cy=cell-1-3]').contains('male');
    cy.get('[data-cy=cell-1-4]').contains('apple');
    cy.get('[data-cy=cell-1-5]').contains('bird');
  });
});
