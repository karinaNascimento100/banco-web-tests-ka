describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.screenshot('apos-visitar-a-pagina-de-login');
  });

  it('Login com dados válidos deve permitir acesso no sistema', () => {
    cy.fazerLoginComCredenciaisValidas();
    cy.screenshot('apos-clicar-no-botao-entrar');
    cy.contains('h4', 'Realizar Transferência').should('be.visible');
  });


  it('Login com dados inválidos deve exibir mensagem de erro', () => {
    cy.fazerLoginComCredenciaisInvalidas();
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.');
  });
});