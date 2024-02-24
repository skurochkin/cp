/// <reference types="cypress" />
import * as util from '../helpers/utils'
import * as h from '../helpers'

let threeDaysFromNow = util.getDaysFromNow(3)
let fiveDaysFromNow = util.getDaysFromNow(5)

let threeDaysFromNowFormated = util.getFormatedDaysFromNow(3); 
let fiveDaysFromNowFormated = util.getFormatedDaysFromNow(5); 

describe('Search the tickets', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should search for existing destinations', () => {
      h.search.enterDeparture('Lagos')
      h.search.enterArrival('Porto - Campanha')

      h.search.setDepartureDate(threeDaysFromNow)
      h.search.setReturnDate(fiveDaysFromNow)

      h.search.submitRequest()

      // setup the intercept so we can wait for the request and assert response
      cy.intercept('POST', 'https://www.cp.pt/passageiros/en/buy-tickets').as('backToSearch')
      
      h.service.cancelRequest()

      cy.wait('@backToSearch').its('response.body').should('contain', "departEscapeXml = 'Lagos'").and('contain', "arrivalEscapeXml = 'Porto - Campanha'")
      
      h.search.getDeartureDateValue().should('have.attr', 'value', `${threeDaysFromNowFormated['formattedDateShort']}`)
      h.search.getReturnDateValue().should('have.attr', 'value', `${fiveDaysFromNowFormated['formattedDateShort']}`)
    })
  })
  