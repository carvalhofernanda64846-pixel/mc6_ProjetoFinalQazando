# 🎓 English QA - Testes Automatizados

Suite de testes E2E (End-to-End) para a plataforma **English QA**.

**Plataforma:** https://ingles-qazando.lovable.app/

---

## 📋 Sobre

**English QA** é uma plataforma gratuita criada pela Qazando para profissionais de Quality Assurance que precisam de inglês para:
- 🎤 Entrevistas técnicas
- 💬 Dailys com times internacionais
- 📚 Leitura de documentação técnica

Inspirada em apps como Duolingo, oferece **aprendizado prático e contextualizado** com vocabulário e situações reais de QA.

---

## 🛠️ Tecnologias

- **Cypress** ^15.13.0 - Testes E2E
- **Node.js** 18+ - Runtime
- **Git** - Versionamento

---

## 📁 Estrutura

```
mc6_ProjetoFinalQazando/
├── e2e/
│   ├── login.cy.js              # Testes de login
│   ├── Quiz.cy.js               # Testes de quiz
│   ├── cadastro/
│   │   └── signup.cy.js         # Testes de cadastro
│   └── Trilha_do_ingles/        # Testes de trilhas
├── cypress/fixtures/
│   ├── credentials.json
│   └── users.json
├── cypress.config.js
└── package.json
```

---

## 🚀 Quick Start

```bash
# Clonar
git clone https://github.com/DanielSantosReis/mc6_ProjetoFinalQazando.git

# Instalar dependências
npm install

# Executar testes
npx cypress open          # Interface gráfica
npx cypress run           # Modo headless
```

---

## 📝 Testes

| Arquivo | O que testa |
|---------|-----------|
| `signup.cy.js` | Cadastro de novos usuários |
| `login.cy.js` | Login e autenticação |
| `Quiz.cy.js` | Quizzes e exercícios |
| `Trilha_do_ingles/` | Trilhas de aprendizado |

---

## � Links

- 🌐 [English QA](https://ingles-qazando.lovable.app/)
- 📖 [Cypress Docs](https://docs.cypress.io)
- 🏫 [Qazando](https://www.qazando.com.br)

---

**Desenvolvido pela Qazando | Maio de 2026**

