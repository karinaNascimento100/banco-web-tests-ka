describe('Transferência', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fazerLoginComCredenciaisValidas();
        
    });

    it('Transferência com dados e valores válidos deve ser realizada com sucesso', () => {
        cy.realizarTransferencia('Carlos Dantas', 'Marina Dantas', '100');
        cy.verificarMensagemNoToast('Transferência realizada!');
    });
    it('Transferência deve apresentar erro quando tentar transferir mais que 5 mil sem token', () => {
        cy.realizarTransferencia('Carlos Dantas', 'Marina Dantas', '5001.00');

        cy.get('#valor').click().type('5001.00');

        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.');
    });
});

