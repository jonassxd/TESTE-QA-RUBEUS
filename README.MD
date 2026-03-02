# Teste Técnico QA Jr – Automação da Página de Certificação

Este projeto contém a automação de testes da página de certificação do site [https://qualidade.apprbs.com.br/certificacao](https://qualidade.apprbs.com.br/certificacao) usando **Cypress**.

---

## Estrutura do Projeto
teste-tecnico-qa-rubeus/
├─ cypress/
│ ├─ e2e/
│ │ └─ certificacao.cy.js # Todos os 4 cenários de teste
├─ cypress.config.js
├─ package.json
└─ README.md

---

## Cenários Automatizados

1. **Botão "Saiba mais" principal**  
   - Comportamento: Não funciona, nem abre modal.  
   - Status esperado no teste: Falha proposital para evidenciar bug.

2. **Botões "Saiba mais" da seção "Outros Cursos"**  
   - Comportamento: Não redirecionam.  
   - Status esperado no teste: Falha proposital para evidenciar bug.

3. **Botão "Quero me certificar"**  
   - Comportamento: Redireciona incorretamente para google.com.  
   - Status esperado no teste: Falha proposital para evidenciar bug.

4. **Imagem do YouTube**  
   - Comportamento: Redireciona incorretamente para TikTok.  
   - Status esperado no teste: Falha proposital para evidenciar bug.

> Todos os testes estão configurados para **marcar falha propositalmente**, pois o objetivo é evidenciar comportamentos quebrados na aplicação.

---

## Como rodar os testes

1. Clonar o repositório:

```bash
git clone git@github.com:SEU-USUARIO/teste-tecnico-qa-rubeus.git
cd teste-tecnico-qa-rubeus
Instalar dependências:

npm install

Rodar os testes:

Pelo terminal (headless):

npx cypress run --spec "./cypress/e2e/certificacao.cy.js"

Pelo Cypress GUI:

npx cypress open

Clique no arquivo certificacao.cy.js para executar os testes visualmente.

Observações

Este projeto é uma prova de conceito para teste técnico de QA Jr.

Todos os cenários automatizados têm falha proposital para evidenciar bugs da aplicação.

Estrutura pensada para facilitar manutenção e adição de novos testes futuramente.


## Observações e Testes Manuais

Durante a análise da página de certificação [https://qualidade.apprbs.com.br/certificacao](https://qualidade.apprbs.com.br/certificacao), foram identificados os seguintes cenários:

### Cenários avaliados

1. **Pra quem é essa certificação?**
   - Botão "Saiba mais" não funciona.
   - Impacto: usuário não consegue acessar detalhes da certificação.
   - Status: identificado manualmente, automatizado para evidenciar bug.

2. **Tela de Cadastro**
   - Mensagem "É necessário informar a base legal" impede avanço.
   - Falta confirmação por e-mail após cadastro.
   - Status: identificado manualmente, parcialmente automatizado (somente clique nos campos críticos).

3. **Outros Cursos**
   - Botões "Saiba mais" não funcionam.
   - Erros de texto: "Saiba" incompleto e "Salba mais".
   - Status: automatizado (botões clicados, falha proposital), erros de texto avaliados manualmente.

4. **Final da página – Quero me certificar**
   - Redirecionamento incorreto para google.com.
   - Status: automatizado para evidenciar bug.

5. **Imagem do YouTube**
   - Redireciona incorretamente para TikTok.
   - Status: automatizado para evidenciar bug.

6. **Responsividade da página**
   - Botões desalinhados e elementos sobrepostos em telas menores.
   - Status: avaliado manualmente, não automatizado (teste visual/UX).

### Justificativa

- Nem todos os cenários foram automatizados porque alguns são triviais ou de usabilidade (como textos incorretos ou layout responsivo).  
- Os testes automatizados foram focados em **clicar em botões e links que deveriam redirecionar ou abrir modal**, evidenciando o comportamento quebrado da aplicação.  
- Testes manuais foram registrados para documentar todos os problemas encontrados.


