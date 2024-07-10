/// <reference types="cypress" />


class ProductDetailPage{
    
    getAddToCartBtn(){ return cy.get('.btn.btn-success.btn-lg').contains('Add to cart')}

    selectAddToCart(){
        this.getAddToCartBtn().click()
    }

}
export default ProductDetailPage;