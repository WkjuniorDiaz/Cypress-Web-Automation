import ProductDetailPage from "../pages/ProductDetailPage";

class ProductDetailActions{

    productDetailPage = new ProductDetailPage()

    selectAddToCart(){
        this.productDetailPage.getAddToCartBtn().click()
    }

    verifyProductExistInOrder(productName){
        cy.contains(productName).should('exist')
    }

}
export default ProductDetailActions;