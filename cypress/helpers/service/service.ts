/**
 * 
 * @file Support file for a service page
 * 
 * @module Service
 */

/**
 * Cancel search request
 * @example
 * h.search
 *  .cancelRequest()
 */
export function cancelRequest(){
    cy.get('[name="exitButton"]').click();
}