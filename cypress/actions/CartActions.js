import CartPage from "../pages/CartPage"

class CartActions{

    cartPage = new CartPage()

    selectPlaceHolder(){
        this.cartPage.getplaceHolderbtn().click()
    }

    fillInformation(name,country,city,card,month,year){
        this.cartPage.getnameField().type(name)
        this.cartPage.getcountryField().type(country)
        this.cartPage.getcityField().type(city)
        this.cartPage.getcreditCardField().type(card)
        this.cartPage.getmonthField().type(month)
        this.cartPage.getyearField().type(year)
    }

    selectPurchaseBtn(){
        this.cartPage.getpurchaseBtn().click()
    }

}
export default CartActions;