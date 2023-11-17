/**
 * 
 * @file Support file for a search page
 * 
 * @module Search
 */

/**
 * Set departure destination
 * @param departure 
 * @example
 * h.search
 *  .enterDeparture('Lagos')
 */
export function enterDeparture(departure: string){
    cy.get('[name="textBoxPartida"]').type(departure).click()
    // clear the tooltip
    cy.get('[class="typeahead dropdown-menu"]').invoke('remove')
}

/**
 * Set arrival destination
 * @param arrival 
 * @example
 * h.search
 *  .enterArrival('Porto - Campanha')
 */
export function enterArrival(arrival: string){
    cy.get('[name="textBoxChegada"]').type(arrival).click()
    // clear the tooltip
    cy.get('[class="typeahead dropdown-menu"]').invoke('remove')
}

/**
 * Set departure date in UTC
 * @param date
 * @example
 * h.search
 *  .setDepartureDate('1700524800000')
 */
export function setDepartureDate(date: string){
    cy.get('input[name="departDate"]').click()
      cy.get('[id="datepicker-first_root"]').within(() => {
        cy.get(`div[data-pick=${date}]`).should('be.visible').click()
    })
}

/**
 * Get departure date value
 * @returns departure date value
 * @example
 * h.search
 *  .setDepartureDate()
 */
export function getDeartureDateValue(){
    return cy.get('[name="textBoxDataIda"]')
}

/**
 * Set return date in UTC
 * @param date
 * @example
 * h.search
 *  .setReturnDate('1700524800000')
 */
export function setReturnDate(date: string){
    cy.get('input[name="returnDate"]').click()
      cy.get('[id="datepicker-second_root"]').within(() => {
        cy.get(`div[data-pick=${date}]`).should('be.visible').click()
    })
}

/**
 * Get return date value
 * @returns return date value
 * @example
 * h.search
 *  .getReturnDateValue()
 */
export function getReturnDateValue(){
    return cy.get('[name="textBoxDataVolta"]')
}

/**
 * Submit search request
 * @example
 * h.search
 *  .submitRequest()
 */
export function submitRequest(){
    cy.get('input[type="submit"]').click()
}