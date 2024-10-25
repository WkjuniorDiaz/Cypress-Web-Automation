/// <reference types="cypress" />


class ProductDetailPage{
    
    getAddToCartBtn(){ return cy.get('.btn.btn-success.btn-lg').contains('Add to cart')}

}
export default ProductDetailPage;