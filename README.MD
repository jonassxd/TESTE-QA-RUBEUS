# Teste Técnico Analista de Qualidade Júnior RUBEUS – Automação da Página de Certificação e Testes Manuais da página de certificação e da página: Site - Rubeus


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

Este projeto é uma prova de conceito para teste técnico de QA.

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
   - Status: avaliado manualmente, não automatizado (teste visual).
  
- Os testes automatizados foram focados em **clicar em botões e links que deveriam redirecionar ou abrir modal**, evidenciando o comportamento quebrado da aplicação.  
- Testes manuais foram registrados para documentar todos os problemas encontrados.


# Testes Manuais QA – Site Rubeus

Link do site: [https://qualidade.apprbs.com.br/site](https://qualidade.apprbs.com.br/site)

---

## Cenário 1 - Carrossel de imagens

**Tipo:** Correção  
**Classificação:** Utilidade  
**Prioridade:** Alta  

**Descrição:**  
Os botões "INSCREVA-SE E SAIBA MAIS" presentes no carrossel de imagens não estão funcionando. Ao clicar, nenhuma ação é executada e não há redirecionamento.  

**Impacto:**  
O usuário não consegue acessar informações sobre graduação e pós-graduação, dificultando a inscrição.  

**Correção:**  
Implementar corretamente a funcionalidade dos botões para que direcionem ao conteúdo correspondente.  

---

## Cenário 2 - Tela de assinar Newsletter

**Tipo:** Correção  
**Classificação:** Utilidade  
**Prioridade:** Alta  

**Descrição:**  
Após preencher corretamente os dados obrigatórios e clicar em "CONCLUIR", o sistema exibe a mensagem: "É necessário informar a base legal", impedindo o avanço para a próxima etapa  

**Impacto:**  
O usuário não consegue assinar o Newsletter para receber informações exclusivas, interrompendo o fluxo da aplicação.  

**Correção:**  
O sistema deve permitir a assinatura quando todos os campos obrigatórios estiverem preenchidos corretamente.  

---

## Cenário 3 - O que nossos alunos dizem?

**Tipo:** Melhoria  
**Classificação:** Desejabilidade  
**Prioridade:** Baixa  

**Descrição:**  
O texto "O que nossos alunos dizem?" não possui indicação visual de que pode ser clicável ou interativo.  

**Sugestão:**  
Poderia ser adicionada uma interação (como efeito hover ou redirecionamento para a seção de depoimentos) para tornar o elemento mais atrativo e incentivar o usuário a explorar os comentários dos alunos.  

**Impacto:**  
A melhoria pode aumentar o engajamento e facilitar o acesso aos depoimentos.  

**Correção:**  
Adicionar indicação visual de clique (como efeito hover, mudança de cursor ou redirecionamento direto para a seção de depoimentos), tornando o elemento mais intuitivo.  

---

## Cenário 4 - Botão Institucional

**Tipo:** Correção  
**Classificação:** Utilidade  
**Prioridade:** Média  

**Descrição:**  
Ao clicar no botão "Institucional" no topo da página, o usuário é direcionado para:  
https://rubeus.com.br/  

Já o botão "Institucional" no rodapé direciona para:  
https://rubeus.com.br/sobre-a-rubeus/  

**Impacto:**  
A inconsistência de redirecionamento pode gerar confusão sobre qual é a página correta do conteúdo institucional.  

**Correção:**  
Padronizar o redirecionamento para que ambos os botões levem à mesma página.  

---

## Cenário 5 - Botão: Nossos diferenciais

**Tipo:** Correção  
**Classificação:** Utilidade  
**Prioridade:** Alta  

**Descrição:**  
Ao clicar no botão "Nossos diferenciais" no topo da página, além de levar para a seção correspondente na mesma página, também é aberta uma nova página direcionando para:  
https://rubeus.com.br/sobre-a-rubeus/  

**Impacto:**  
O comportamento inesperado pode confundir o usuário e prejudicar a navegação.  

**Correção:**  
O botão deve executar apenas uma ação: direcionar corretamente para a seção "Nossos diferenciais", sem abrir outra página adicional.  

---

## Cenário 6 - Botão: Depoimentos

**Tipo:** Correção  
**Classificação:** Utilidade  
**Prioridade:** Alta  

**Descrição:**  
Ao clicar no botão "Depoimentos" na página, além de levar para a seção correspondente na mesma página, também é aberta uma nova página direcionando para:  
https://rubeus.com.br/cases-de-sucesso/  

**Impacto:**  
O comportamento inesperado pode confundir o usuário e prejudicar a navegação.  

**Correção:**  
O botão deve executar apenas uma ação: direcionar corretamente para a seção "O QUE NOSSOS ALUNOS DIZEM?" na própria página, sem abrir outra página adicional.  

---

## Cenário 7 - Botões de Contato(Fale Conosco) e WhatsApp

**Tipo:** Correção  
**Classificação:** Utilidade  
**Prioridade:** Alta  

**Descrição:**  
Ao clicar nos botões de Contato, incluindo o botão de WhatsApp, o usuário é redirecionado para web.whatsapp.com de forma genérica, sem abrir uma conversa específica com a instituição.  

**Impacto:**  
O usuário precisa procurar manualmente o número ou iniciar a conversa por conta própria, o que dificulta o contato e pode gerar desistência.  

**Correção:**  
Configurar o botão para redirecionar diretamente para um chat específico da instituição, utilizando link com número configurado (ex: wa.me/numero), facilitando o início da conversa.  

---

## Cenário 8 - Botão Evento

**Tipo:** Correção  
**Classificação:** Utilidade  
**Prioridade:** Alta  

**Descrição:**  
Ao clicar no botão "Evento", o sistema abre uma nova página e, além disso, redireciona para a seção "Próximos eventos".  

**Impacto:**  
O comportamento inesperado pode confundir o usuário e prejudicar a navegação.  

**Correção:**  
O botão deve executar apenas uma ação: direcionar corretamente para a seção "Próximos eventos", sem abrir uma página adicional.






