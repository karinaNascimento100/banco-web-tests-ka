describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000')
  });

  it('Login com dados válidos deve permitir acesso no sistema', () => {

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  });

  it('Login com dados inválidos deve exibir mensagem de erro', () => {

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123466')
    cy.contains('button', 'Entrar').click()

    cy.get(".toast").should("be.visible")

    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.")

  });
});
