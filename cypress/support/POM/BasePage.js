class BasePage{

    get = {
        hotelsContainer: ()=> cy.get('HotelsContainer'),
        allPrices: ()=> cy.get('.Filter__Container .Filter__Grid .Filter__Prices'),
        clearButton: ()=> cy.get('.Filter__Clear')
    }

    enterPrices(sing){
        this.get.allPrices().select(sing);
    }

    clearSelect(){
        this.get.clearButton().click()
    }
}
const basePageOut = new BasePage();
export default basePageOut;