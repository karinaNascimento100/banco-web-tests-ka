
# banco-web-tests-ka

Repositório de testes automatizados E2E para aplicação bancária, utilizando Cypress e Mochawesome Reporter.

## Pré-requisitos

- Node.js (recomendado: versão 18 ou superior)
- npm (geralmente já vem com o Node.js)
- Git (opcional, para versionamento)

## Instalação

1. Clone o repositório:
	```bash
	git clone https://github.com/karinaNascimento100/banco-web-tests-ka.git
	cd banco-web-tests-ka
	```
2. Instale as dependências:
	```bash
	npm install
	```

## Como rodar os testes

Execute todos os testes E2E com o comando:
```bash
npm run test:report
```
Esse comando irá rodar os testes e gerar o relatório Mochawesome.

## Visualizando o relatório HTML

Após rodar os testes, o relatório estará disponível em:
```
cypress/reports/html/index.html
```
Basta abrir esse arquivo no navegador (Edge, Chrome, etc) para visualizar o resultado dos testes.

## Estrutura do projeto

- `cypress/e2e/` — arquivos de teste E2E
- `cypress/fixtures/` — dados de apoio (ex: credenciais)
- `cypress/support/` — comandos customizados e configurações
- `cypress/reports/html/` — relatórios gerados pelo Mochawesome

## Boas práticas de versionamento

- Não versionar arquivos de relatório (`cypress/reports/html/`), screenshots ou arquivos temporários. O `.gitignore` já está configurado para ignorar essas pastas.
- Versione apenas arquivos de teste, configurações e comandos customizados.

## Dicas

- Sempre garanta que o backend e o banco de dados estejam rodando antes de executar os testes.
- Para resetar dados (ex: saldo), utilize scripts SQL conforme necessário.

---
Desenvolvido por Karina Nascimento — 2025
