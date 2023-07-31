import basePageOut from "../../support/POM/BasePage";

const {baseBookit} = Cypress.env('endpoint')

const {bajo,medio,alto} = Cypress.env('allpricesValues')

describe('test book it', ()=>{

    beforeEach(()=>{
        cy.visit("/hotelbookingsprint/")
        cy.url().should("contains", baseBookit)

    });

    it('validate page', ()=>{
        basePageOut.enterPrices(bajo)
        cy.wait(2000);
        basePageOut.enterPrices(medio)
        cy.wait(2000);
        basePageOut.enterPrices(alto)
        cy.wait(2000);
    });

    it('clear filters',() =>{
        basePageOut.clearSelect()
    });

});