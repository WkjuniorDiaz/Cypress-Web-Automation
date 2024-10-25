import CartPage from "../pages/CartPage";

class CartAssertions{

    cartPage = new CartPage()

    verifyVoucherMessage(){
        this.cartPage.getalertInfo().should('be.visible')

        this.cartPage.getalertInfo().should('contain.text','Thank you for your purchase!')
    }

    verifyProductExistInOrder(productName){
        cy.contains(productName).should('exist')
    }


}
export default CartAssertions;