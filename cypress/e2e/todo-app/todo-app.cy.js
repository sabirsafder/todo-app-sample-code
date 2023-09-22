/* eslint-disable no-undef */
describe('Todo App', () => {
    it('should add a new task', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid=task-input]').type('Buy milk');
      cy.get('[data-testid=add-button]').click();
      cy.contains('Buy milk');
    });
  });
  