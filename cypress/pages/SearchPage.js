/// <reference types="cypress" />


class SearchPage{

    getSearchBox(){ return cy.get('input[role="searchbox"]')}

    search(searchOption){
        this.getSearchBox().type(''+searchOption+'{enter}')
    }

}
export default SearchPage;