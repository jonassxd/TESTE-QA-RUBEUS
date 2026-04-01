# 🧪 Teste Técnico QA – Rubeus

[![Cypress](https://img.shields.io/badge/Framework-Cypress-04D361?logo=cypress)](https://www.cypress.io/) [![Status](https://img.shields.io/badge/Status-Active-brightgreen)]

Automação da página de certificação e testes manuais do site [Rubeus](https://qualidade.apprbs.com.br/certificacao) usando Cypress.

## 🚀 Estrutura do Projeto

teste-tecnico-qa-rubeus/
├─ cypress/
│ ├─ e2e/
│ │ └─ certificacao.cy.js
├─ cypress.config.js
├─ package.json
└─ README.md

## 📝 Cenários Automatizados

| Endpoint | Comportamento | Status Esperado |
|----------|---------------|----------------|
| Botão "Saiba mais" principal | Não funciona, nem abre modal | Falha proposital |
| Botões "Saiba mais" da seção "Outros Cursos" | Não redirecionam | Falha proposital |
| Botão "Quero me certificar" | Redireciona para google.com incorretamente | Falha proposital |
| Imagem do YouTube | Redireciona para TikTok | Falha proposital |

> Todos os testes automatizados têm falha proposital para evidenciar bugs da aplicação.

## ⚙️ Pré-requisitos

- [Cypress](https://www.cypress.io/) ou terminal com Node.js e npm
- Conexão com a internet

## 📂 Como Rodar os Testes

1️⃣ Clonar o repositório:
git clone git@github.com
:SEU-USUARIO/teste-tecnico-qa-rubeus.git
cd teste-tecnico-qa-rubeus

2️⃣ Instalar dependências:
npm install

3️⃣ Executar os testes pelo terminal (headless):
npx cypress run --spec "./cypress/e2e/certificacao.cy.js"

4️⃣ Ou pelo Cypress GUI:
npx cypress open

Clique no arquivo `certificacao.cy.js` para executar os testes visualmente.

## ⚠️ Observações

- Testes automatizados focados em clicar em botões e links que deveriam redirecionar ou abrir modal.
- Testes manuais documentam comportamentos quebrados da aplicação.
- Estrutura pensada para fácil manutenção e adição de novos testes futuramente.

## 📋 Cenários Manuais QA – Site Rubeus

Link do site: [https://qualidade.apprbs.com.br/site](https://qualidade.apprbs.com.br/site)

### Cenário 1 – Carrossel de imagens
- Tipo: Correção
- Prioridade: Alta
- Descrição: Botões "INSCREVA-SE E SAIBA MAIS" não funcionam.
- Impacto: Usuário não consegue acessar informações de graduação/pós.
- Correção: Corrigir redirecionamento dos botões.

### Cenário 2 – Tela de assinar Newsletter
- Tipo: Correção
- Prioridade: Alta
- Descrição: Mensagem "É necessário informar a base legal" impede assinatura.
- Impacto: Usuário não consegue assinar newsletter.
- Correção: Permitir assinatura quando todos os campos obrigatórios forem preenchidos.

### Cenário 3 – "O que nossos alunos dizem?"
- Tipo: Melhoria
- Prioridade: Baixa
- Descrição: Elemento sem indicação visual de interação.
- Sugestão: Adicionar hover ou redirecionamento para seção de depoimentos.

### Cenário 4 – Botão Institucional
- Tipo: Correção
- Prioridade: Média
- Descrição: Botões do topo e rodapé redirecionam para páginas diferentes.
- Correção: Padronizar redirecionamento para a mesma página.

### Cenário 5 – Botão Nossos Diferenciais
- Tipo: Correção
- Prioridade: Alta
- Descrição: Redirecionamento adicional inesperado.
- Correção: Direcionar apenas para a seção correta, sem abrir outra página.

### Cenário 6 – Botão Depoimentos
- Tipo: Correção
- Prioridade: Alta
- Descrição: Redirecionamento incorreto para outra página.
- Correção: Direcionar apenas para a seção correta na própria página.

### Cenário 7 – Botões Contato / WhatsApp
- Tipo: Correção
- Prioridade: Alta
- Descrição: Redirecionamento genérico para WhatsApp.
- Correção: Configurar link específico (ex: wa.me/numero).

### Cenário 8 – Botão Evento
- Tipo: Correção
- Prioridade: Alta
- Descrição: Redireciona para nova página além da seção correta.
- Correção: Direcionar apenas para a seção "Próximos eventos".

## 🔗 Referências

- [Cypress Documentation](https://docs.cypress.io/)
- [Site Rubeus – Certificação](https://qualidade.apprbs.com.br/certificacao)

✅ Observação Final: Este projeto é uma prova de conceito para teste técnico de QA. Todos os cenários automatizados falham propositalmente para evidenciar bugs da aplicação.
