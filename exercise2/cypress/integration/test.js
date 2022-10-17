/* eslint-disable no-undef */
describe('exercise 2', () => {
  before(() => {
    cy.visit('http://localhost:8080/');
  });

  it('display the sorted users', () => {
    cy.get('[data-cy=list-1]').contains('Adrian Burch');
  });

  it('should display the number of people the pagination allows', () => {
    cy.get('[data-cy=list-10]').should('be.visible');
    cy.get('[data-cy=list-11]').should('not.exist');
  });

  it('should validate if the left is disabled but right not', () => {
    cy.get('[data-cy=pag-left]').should('have.class', 'disabled');
    cy.get('[data-cy=pag-right]').should('not.have.class', 'disabled');
  });

  it('click second page should display different data', () => {
    cy.get('[data-cy=pag-right]').click();
    cy.get('[data-cy=list-1]').contains('Carolina Chaney');
    cy.get('[data-cy=pag-right]').should('not.have.class', 'disabled');
  });

  it('click last page should check if left is not disabled but right is', () => {
    cy.get('[data-cy=page-5]').click();
    cy.get('[data-cy=pag-left]').should('not.have.class', 'disabled');
    cy.get('[data-cy=pag-right]').should('have.class', 'disabled');
  });
});
