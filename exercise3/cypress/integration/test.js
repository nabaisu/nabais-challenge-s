/* eslint-disable no-undef */
describe('exercise 3', () => {
  before(() => {
    cy.visit('http://localhost:8080/');
  });

  it('display number of cards', () => {
    const size = 10;
    cy.get('[data-cy=data-size]').clear().type(size);
    cy.get(`[data-cy=card-${size}]`).should('be.visible');
    cy.get(`[data-cy=card-${size + 1}]`).should('not.exist');
  });

  it('if added number, then should display new number of cards', () => {
    const size = 10;
    cy.get('[data-cy=data-size]')
      .clear()
      .type(size + 1);
    cy.get('[data-cy=data-size]')
      .clear()
      .type(parseInt(size + 1));
    cy.get(`[data-cy=card-${size + 1}]`).should('be.visible');
    cy.get(`[data-cy=card-${parseInt(size) + 2}]`).should('not.exist');
  });

  it('the background color of some items should be different', () => {
    const getColor = (index) =>
      cy
        .get(`[data-cy=card-${index}]`)
        .invoke('css', 'background-color')
        .then((val) => val);

    // odd
    const color1 = getColor(7);
    // divided by 4
    const color2 = getColor(8);
    // default
    const color3 = getColor(6);
    expect(color1).not.to.equal(color2);
    expect(color1).not.to.equal(color3);
    expect(color2).not.to.equal(color3);
  });

  it('eyes should have a different colour', () => {
    const getColor = (index) =>
      cy
        .get(`[data-cy=card-${index}]`)
        .invoke('css', 'filter')
        .then((val) => val);
    // brown
    const color1 = getColor(1);
    // blue
    const color2 = getColor(2);
    // green
    const color3 = getColor(3);
    expect(color1).not.to.equal(color2);
    expect(color1).not.to.equal(color3);
    expect(color2).not.to.equal(color3);
  });
});
