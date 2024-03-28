describe('UW COnnect UI Test', () => {
  it('keyword_Search', () => {
    cy.visit('https://uwconnect.uw.edu/finance')
    cy.title().should('eq', 'Home - UW Connect Finance Portal')
    cy.get('div:nth-child(1) > span > div > div > a > span.uw_icon > div').click()
    cy.get('div:nth-child(1) > a > div > div:nth-child(1) > div > div > div > div.link-icon > img').click()
    cy.title().should('eq','Browse Knowledge - UW Connect Finance Portal')
    cy.get('input[name="q"]').type('Accounting')
    cy.get('button[type="submit"] > i').click()
    var numofTimes = cy.get('span > div > div > div.ng-scope > div').get('div:contains(accounting)').length
    print('The word accounting appears ' + numofTimes)
  })

  it('Article Download', () => {
    cy.visit('https://uwconnect.uw.edu/finance')
    cy.title().should('eq', 'Home - UW Connect Finance Portal')
    cy.get('div:nth-child(1) > span > div > div > a > span.uw_icon > div').click()
    cy.get('div:nth-child(1) > a > div > div:nth-child(1) > div > div > div > div.link-icon > img').click()
    cy.title().should('eq','Browse Knowledge - UW Connect Finance Portal')
    cy.get('span:nth-child(3) > div > div > div > div > div.panel-heading > span.panel-title > button > span', { timeout: 10000 }).should('be.visible');
    cy.get('div:nth-child(3) > div > label').invoke("text").should("eq", " Job Aids ")
    cy.get('div:nth-child(3) > div > label > input').click();
    cy.get('span:nth-child(4) > div > div > div > div > div.panel-heading > span.panel-title > button > span', { timeout: 10000 }).should('be.visible');
    cy.get('a#rating_5 i:nth-child(10)').click()
    cy.get('div:nth-child(1) > div > div.kb-info > div:nth-child(2) > h3 > a').invoke("text").should("eq", "Accounting Adjustment ")
  })

  it('Clearing Filters', () => {
    cy.visit('https://uwconnect.uw.edu/finance')
    cy.title().should('eq', 'Home - UW Connect Finance Portal')
    cy.get('div:nth-child(1) > span > div > div > a > span.uw_icon > div').click()
    cy.get('div:nth-child(1) > a > div > div:nth-child(1) > div > div > div > div.link-icon > img').click()
    cy.title().should('eq','Browse Knowledge - UW Connect Finance Portal')
    cy.get('span:nth-child(3) > div > div > div > div > div.panel-heading > span.panel-title > button > span', { timeout: 10000 }).should('be.visible');
    cy.get('div:nth-child(3) > div > label').invoke("text").should("eq", " Job Aids ")
    cy.get('div:nth-child(3) > div > label > input').click();
    cy.get('span:nth-child(4) > div > div > div > div > div.panel-heading > span.panel-title > button > span', { timeout: 10000 }).should('be.visible');
    cy.get('a#rating_5 i:nth-child(10)').click()
    cy.get('div.bd-title > span').invoke("text").should("eq", " Applied Filters ")
    cy.get('div.bd-items > span:nth-child(1) > button').invoke("text").should("eq", " Accounting  ")    
    cy.get('div.bd-items > span:nth-child(2) > button').invoke("text").should("eq", " Job Aids  ")
    cy.get('div.bd-items > span:nth-child(3) > button').invoke("text").should("eq", " 4+ Rating  ")    
    cy.get('span:nth-child(1) > div > div > div > div > div > div > span > button').click()
    cy.get('div.bd-title > span').invoke("text").should("eq", " Showing All Results ")
  })
})

