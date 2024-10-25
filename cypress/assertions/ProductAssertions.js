import ProductPage from "../pages/ProductPage";

class ProductAssertions{

    productPage = new ProductPage()

    verifyWelcomeMessage(username){
        this.productPage.getWelcomeOpt().should('have.text','Welcome '+  username)
    }

    verifyProductAdditionMessage(){
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Product added.')
        })
    }


}
export default ProductAssertions;