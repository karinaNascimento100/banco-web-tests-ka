describe('Transferência', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#username', { timeout: 10000 }).should('be.visible');
        cy.get('#senha', { timeout: 10000 }).should('be.visible');
    });

    it('Login com dados válidos deve permitir acesso no sistema', () => {
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').type(credenciais.valida.usuario);
            cy.get('#senha').type(credenciais.valida.senha);
        });
        cy.contains('button', 'Entrar').click();
    });

    it('Transferência com dados e valores válidos deve ser realizada com sucesso', () => {
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').type(credenciais.valida.usuario);
            cy.get('#senha').type(credenciais.valida.senha);
            cy.contains('button', 'Entrar').click();
            cy.contains('h4', 'Realizar Transferência').should('be.visible');
        });

        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem');
        cy.get('@campo-conta-origem').click();
        cy.get('@campo-conta-origem').contains('Maria').click({ force: true });

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino');
        cy.get('@campo-conta-destino').click({ force: true });
        cy.get('@campo-conta-destino').contains('João').click({ force: true });

        cy.get('#valor').click().type('11');

        cy.contains('button', 'Transferir').click();

        cy.get('.toast').should('have.text', 'Transferência realizada!');

    });
});

