/* eslint-disable no-undef */
describe('exercise 4', () => {
  before(() => {
    cy.visit('http://localhost:8080/');
  });

  it('show age and name on each row', () => {
    cy.get('[data-cy=list-1]').contains('25');
    cy.get('[data-cy=list-1]').contains('Padilla Blair');
  });

  it('show not show below 25 years old', () => {
    cy.contains('Michael Ramirez').should('not.exist');
  });
});
