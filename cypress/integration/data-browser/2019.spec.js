import { openSelector, dbURL, isBeta, isProd, waitUpto2Mins } from '../../support/helpers'

const { HOST, ENVIRONMENT } = Cypress.env()
const dbUrl = dbURL.bind(null, HOST)

describe('Data Browser 2019', function () {
  if(!isProd(HOST) || isBeta(HOST)) it("Only runs in Production")
  else {
    it('State/Institution/PropertyType', function () {
      cy.get({ HOST, ENVIRONMENT }).logEnv()
      cy.viewport(1000, 940)
      cy.visit(dbUrl('2019?category=states'))

      // Wait for the Institutions selector to load because it can steal focus when trying to enter data in another input field.
      openSelector('#lei-item-select')
  
      // Select Geography
      cy.get('#ItemSelector').type('alabama{enter}')
      cy.get('#ItemSelector').type('alaska{enter}')
      cy.url().should('include', '?category=states&items=AL,AK')
  
      // Select Institutions
      openSelector('#lei-item-select')
      cy.get('#lei-item-select').type('bank of america{enter}')
      cy.get('#lei-item-select').type('chase bank{enter}')
      cy.url().should('include', 'leis=B4TYDEB6GKMZO031MB27,7H6GLXDRUGQFU57RNE97')
  
      // Variables
      cy.get('#VariableSelector').type("dwelling{enter}")
      cy.findByText("Single Family (1-4 Units):Site-Built").click()
      cy.url().should('include', '&dwelling_categories=Single%20Family%20(1-4%20Units)%3ASite-Built')
  
      // View Summary Table
      cy.findByText('View Summary Table').click()
      cy.get('.Aggregations', waitUpto2Mins).should('exist')
      cy.get('.Aggregations :nth-child(1) > .sublist > li').should('have.text', 'ALABAMA, ALASKA')
      cy.get('.Aggregations :nth-child(2) > .sublist > li').then($li => {
        let text = $li.text().toLowerCase()
        cy.wrap(text).should('contain', 'bank of america')
        cy.wrap(text).should('contain', 'chase bank')
      })
      cy.get('.Aggregations :nth-child(3) > .sublist > li').should('have.text', 'Single Family (1-4 Units):Site-Built')
      cy.get('.Error').should('not.exist')
  
      // Test validity of download link
      // if(isProd(HOST) || isBeta(HOST)){
      //   cy.get('.QueryButton:first').dataUrl().then(({ status, statusCode, url }) => {
      //     assert.isTrue(status, `\nURL: ${url}\nStatus Code: ${statusCode}\nHas valid download link`)
      //   })
      // }
    })
  
    it('Nationwide/Institution/LienStatus', function () {
      cy.get({ HOST, ENVIRONMENT }).logEnv()
      cy.viewport(1000, 940)
      cy.visit(dbUrl('2019?category=nationwide'))
  
      // Select Institutions
      openSelector('#lei-item-select')
      cy.get('#lei-item-select').type('bank of america{enter}')
      cy.get('#lei-item-select').type('chase bank{enter}')
      cy.url().should('include', 'leis=B4TYDEB6GKMZO031MB27,7H6GLXDRUGQFU57RNE97')
  
      // Variables
      cy.get('#VariableSelector').type("lien status{enter}")
      cy.findByText('Secured By First Lien').click()
      cy.url().should('include', '&lien_statuses=1')
  
      // View Summary Table
      cy.findByText('View Summary Table').click()
      cy.get('.Aggregations', waitUpto2Mins).should('exist')
      cy.get('.Aggregations :nth-child(1) > .sublist > li').then($li => {
        let text = $li.text().toLowerCase()
        cy.wrap(text).should('contain', 'bank of america')
        cy.wrap(text).should('contain', 'chase bank')
      })
      cy.get('.Aggregations :nth-child(2) > .sublist > li').should('have.text', 'Secured By First Lien')
      cy.get('.Error').should('not.exist')
  
      // Test validity of download link
      // if(isProd(HOST) || isBeta(HOST)){
      //   cy.get('.QueryButton:first').dataUrl().then(({ status, statusCode, url }) => {
      //     assert.isTrue(status, `\nURL: ${url}\nStatus Code: ${statusCode}\nHas valid download link`)
      //   })
      // }
    })
  
    it('County/Institution/Action&Purpose', function () {
      cy.get({ HOST, ENVIRONMENT }).logEnv()
      cy.viewport(1000, 940)
      cy.visit(dbUrl('2019?category=counties'))

      // Wait for the Institutions selector to load because it can steal focus when trying to enter data in another input field.
      openSelector('#lei-item-select')
  
      // Select Geography
      cy.get('#ItemSelector').type("autauga county{enter}")
      cy.get('#ItemSelector').type("baldwin county{enter}")
      cy.url().should('include', '?category=counties&items=01001,01003')
  
      // Select Institutions
      openSelector('#lei-item-select')
      cy.get('#lei-item-select').type('bank of america{enter}')
      cy.get('#lei-item-select').type('chase bank{enter}')
      cy.url().should('include', 'leis=B4TYDEB6GKMZO031MB27,7H6GLXDRUGQFU57RNE97')
  
      // Variables
      cy.get('#VariableSelector').type("total units{enter}")
      cy.findByText('25-49').click()
      cy.url().should('include', '&total_units=25-49')
  
      // View Summary Table
      cy.findByText('View Summary Table').click()
      cy.get('.Aggregations', waitUpto2Mins).should('exist')
      cy.get('.Aggregations :nth-child(1) > .sublist > li').should('have.text', 'AUTAUGA COUNTY, BALDWIN COUNTY')
      cy.get('.Aggregations :nth-child(2) > .sublist > li').then($li => {
        let text = $li.text().toLowerCase()
        cy.wrap(text).should('contain', 'bank of america')
        cy.wrap(text).should('contain', 'chase bank')
      })
      cy.get('.Aggregations :nth-child(3) > .sublist > li').should('have.text', '25-49')
      cy.get('.Error').should('not.exist')
  
      // Test validity of download link
      // if(isProd(HOST) || isBeta(HOST)){
      //   cy.get('.QueryButton:first').dataUrl().then(({ status, statusCode, url }) => {
      //     assert.isTrue(status, `\nURL: ${url}\nStatus Code: ${statusCode}\nHas valid download link`)
      //   })
      // }
    })
  
    it('MSA/Institution/PropertyType', function () {
      cy.get({ HOST, ENVIRONMENT }).logEnv()
      cy.viewport(1000, 940)
      cy.visit(dbUrl('2019?category=msamds'))

      // Wait for the Institutions selector to load because it can steal focus when trying to enter data in another input field.
      openSelector('#lei-item-select')      
  
      // Select Geography
      cy.get('#ItemSelector').type("11500{enter}")
      cy.get('#ItemSelector').type("12220{enter}")
      cy.url().should('include', '?category=msamds&items=11500,12220')
  
      // Select Institutions
      openSelector('#lei-item-select')
      cy.get('#lei-item-select').type('bank of america{enter}')
      cy.get('#lei-item-select').type('chase bank{enter}')
      cy.url().should('include', 'leis=B4TYDEB6GKMZO031MB27,7H6GLXDRUGQFU57RNE97')
  
      // Variables
      cy.get('#VariableSelector').type("loan type{enter}")
      cy.findByText('Conventional').click()
      cy.url().should('include', '&loan_types=1')
  
      // View Summary Table
      cy.findByText('View Summary Table').click()
      cy.get('.Aggregations', waitUpto2Mins).should('exist')
      cy.get('.Aggregations :nth-child(1) > .sublist > li').should('have.text',"11500\u00A0-\u00A0ANNISTON-OXFORD, 12220\u00A0-\u00A0AUBURN-OPELIKA")
      cy.get('.Aggregations :nth-child(2) > .sublist > li').then($li => {
        let text = $li.text().toLowerCase()
        cy.wrap(text).should('contain', 'bank of america')
        cy.wrap(text).should('contain', 'chase bank')
      })
      cy.get('.Aggregations :nth-child(3) > .sublist > li').should('have.text', 'Conventional')
      cy.get('.Error').should('not.exist')
  
      // Test validity of download link
      // if(isProd(HOST) || isBeta(HOST)){
      //   cy.get('.QueryButton:first').dataUrl().then(({ status, statusCode, url }) => {
      //     assert.isTrue(status, `\nURL: ${url}\nStatus Code: ${statusCode}\nHas valid download link`)
      //   })
      // }
    })
  }
})