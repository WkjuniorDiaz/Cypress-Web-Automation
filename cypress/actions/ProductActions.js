import ProductPage from "../pages/ProductPage";

class ProductActions{

    productPage = new ProductPage()

    selectLoginOpt(){
        this.productPage.getLoginOpt().click()
    }
    
    selectCart(){
        this.productPage.getCart().click()
    }

    selectProduct(productName){
        cy.contains(new RegExp('^' + productName + '$')).click()
    }

}
export default ProductActions;