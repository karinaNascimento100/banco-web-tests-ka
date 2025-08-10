// Comando customizado para login com credenciais válidas do fixture
Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').type(credenciais.valida.usuario);
        cy.get('#senha').type(credenciais.valida.senha);
        cy.contains('button', 'Entrar').click();
    });
});

// Comando customizado para login com credenciais inválidas do fixture
Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username', { timeout: 10000 }).should('be.visible').click().type(credenciais.invalida.usuario);
        cy.get('#senha', { timeout: 10000 }).should('be.visible').click().type(credenciais.invalida.senha);
        cy.contains('button', 'Entrar').click();
    });
});
