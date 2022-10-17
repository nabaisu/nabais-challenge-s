/* eslint-disable no-undef */
describe('exercise 1', () => {
  before(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should show the properties of the cards', () => {
    const getCard = () => cy.get('[data-cy=card-1]');
    console.log('card');
    getCard().contains('Stephens Townsend');
    getCard().contains('28');
    getCard().contains('brown');
    getCard().contains('male');
  });
});
