describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000');
    cy.get('#username', { timeout: 10000 }).should('be.visible');
    cy.get('#senha', { timeout: 10000 }).should('be.visible');
  });

  it('Login com dados válidos deve permitir acesso no sistema', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').type(credenciais.valida.usuario);
      cy.get('#senha').type(credenciais.valida.senha);
      cy.screenshot('apos-preencher-dados-de-login');
      cy.contains('button', 'Entrar').click();
      cy.screenshot('apos-preencher-dados-validos');
      cy.contains('h4', 'Realizar Transferência').should('be.visible');
    });
  });

  it('Login com dados inválidos deve exibir mensagem de erro', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').type(credenciais.invalida.usuario);
      cy.get('#senha').type(credenciais.invalida.senha);
      cy.contains('button', 'Entrar').click();
      cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.');
    });
  });
})

