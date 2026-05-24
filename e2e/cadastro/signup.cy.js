const creds = require('../../cypress/fixtures/credentials.json');

describe('Cadastro - Projeto Final MC6', () => {
  const baseUrl = 'https://ingles-qazando.lovable.app/';

  beforeEach(() => {
    cy.visit(baseUrl + 'auth');
    cy.url().should('include', '/auth');
    cy.get('form', { timeout: 15000 }).first().should('be.visible');
    cy.contains(/Criar agora|Não tem conta/i, { timeout: 8000 }).click({ force: true });
  });

  function fillForm(name, email, password, confirm = null) {
    cy.get('form').first().within(() => {
      cy.get('input:visible').then($inputs => {
        cy.wrap($inputs.eq(0)).clear().type(name);
        cy.wrap($inputs.eq(1)).clear().type(email);
        cy.wrap($inputs.eq(2)).clear().type(password);
        if (confirm && $inputs.length >= 4) cy.wrap($inputs.eq(3)).clear().type(confirm);
      });
    });
  }

  function submitForm() {
    cy.get('button').not(':disabled').contains(/Criar|Cadastrar|Register|Enviar|Confirmar/i).click({ force: true });
  }

  it('Deve cadastrar novo usuário com dados válidos', () => {
    const email = `teste+${Date.now()}@example.com`;
    fillForm('Teste Usuario', email, 'Teste@123', 'Teste@123');
    submitForm();
    cy.url({ timeout: 10000 }).should('not.include', '/auth');
    cy.contains(/Ir para Exer.*cios/i, { timeout: 10000 }).should('be.visible');
  });

  it('Não deve cadastrar com email inválido', () => {
    fillForm('Teste Usuario', 'email-invalido', 'Teste@123');
    submitForm();
    cy.url().should('include', '/auth');
  });

  it('Não deve cadastrar com senha fraca', () => {
    fillForm('Teste Usuario', `teste+${Date.now()}@example.com`, '123');
    submitForm();
    cy.url().should('include', '/auth');
  });

  it('Não deve cadastrar com senha e confirmação diferentes', () => {
    fillForm('Teste Usuario', `teste+${Date.now()}@example.com`, 'Teste@123', 'OutraSenha@123');
    submitForm();
    cy.url().should('include', '/auth');
  });

  it('Não deve cadastrar com usuário já existente', () => {
    fillForm('Admin User', creds.admin.email, creds.admin.password, creds.admin.password);
    submitForm();
    cy.url().should('include', '/auth');
  });
});
