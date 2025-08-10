Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    cy.selecionarOpcaoNoCombobox('conta-origem', contaOrigem);
    cy.selecionarOpcaoNoCombobox('conta-destino', contaDestino);
    cy.get('#valor').click().type(valor);
    cy.contains('button', 'Transferir').click();
});
