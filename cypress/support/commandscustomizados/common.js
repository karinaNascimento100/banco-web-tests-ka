Cypress.Commands.add('verificarMensagemNoToast', (mensagemEsperada) => {
    cy.get('.toast').should('have.text', mensagemEsperada)
});

Cypress.Commands.add('selecionarOpcaoNoCombobox', (label, valor) => {
    cy.get(`label[for="${label}"]`).parent().as(`campo-${label}`);
    cy.get(`@campo-${label}`).click();
    cy.get(`@campo-${label}`).contains(valor).click({ force: true });
});
