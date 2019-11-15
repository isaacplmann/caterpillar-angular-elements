describe('test-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&knob-text&knob-padding&knob-style=default'));

  it('should render the component', () => {
    cy.get('caterpillar-elements-demo-button').should('exist');
  });
});
