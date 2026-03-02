// Teste automatizado 1: Cenário 1 – Pra quem é essa certificação?
describe('Cenário 1 – Pra quem é essa certificação?', () => {

    beforeEach(() => {
      cy.visit('https://qualidade.apprbs.com.br/certificacao')
    })
  
    it('Botão "Saiba mais" principal não funciona', () => {
      cy.contains('Saiba mais', { matchCase: false })
        .should('be.visible')
        .click()
  
      cy.log('Botão clicado, mas não redirecionou nem abriu modal. Comportamento quebrado identificado.')
  
      cy.wrap(false).should('eq', true)
    })
  
  })

  // Teste automatizado 2: Cenário 4 – Outros Cursos
describe('Cenário 4 – Outros Cursos', () => {

  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  })

  it('Botões "Saiba mais" da seção Outros Cursos não funcionam', () => {
    cy.get('.outros-cursos a').each(($btn, index) => {
      cy.wrap($btn)
        .should('be.visible')
        .click()

      cy.log(`Botão ${index + 1} clicado, mas não redirecionou nem abriu modal.`)

      cy.wrap(false).should('eq', true)
    })
  })

})

// Teste automatizado 3: Cenário 7 – Final da página – Quero me certificar
describe('Cenário 7 – Final da página – Quero me certificar', () => {

  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  })

  it('Botão "Quero me certificar" redireciona incorretamente', () => {
    cy.contains('Quero me certificar', { matchCase: false })
      .should('be.visible')
      .click()

    cy.url().then(url => {
      if (url.includes('google.com')) {
        cy.log('Redirecionamento incorreto para google.com. Comportamento quebrado identificado.')
        cy.wrap(false).should('eq', true)
      } else {
        cy.log('Botão redirecionou corretamente (não era esperado no teste técnico quebrado).')
      }
    })
  })

})

// Teste automatizado 4: Cenário 8 – Ícone do YouTube
describe('Cenário 8 – Imagem do YouTube', () => {

  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  })

  it('Clique na imagem do YouTube redireciona para TikTok (bug)', () => {
    cy.get('#inm1sk')
      .should('be.visible')
      .click()

    cy.url().then(url => {
      if (url.includes('tiktok.com')) {
        cy.log('Redirecionamento incorreto para TikTok. Comportamento quebrado identificado.')
        cy.wrap(false).should('eq', true)
      } else if (url.includes('rubeus.com')) {
        cy.log('Redirecionou corretamente para Rubeus.com (correto).')
      } else {
        cy.log(`Redirecionamento inesperado para ${url}`)
        cy.wrap(false).should('eq', true)
      }
    })
  })

})