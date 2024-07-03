/// <reference types="cypress" />


class DashboardPage{

    getTitle(){ return cy.get('span.title')}

    getImgProducts(){ return cy.get('.inventory_item_img')}



}
export default DashboardPage;