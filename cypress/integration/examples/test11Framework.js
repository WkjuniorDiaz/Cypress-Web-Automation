/// <reference types="cypress" />
import CartPage from "./pageObjects/CartPage";
import CheckoutPage from "./pageObjects/CheckoutPage";
import HomePage from "./pageObjects/HomePage";
import ProductPage from "./pageObjects/ProductPage";


describe('Framework', () => {
    let data;

    before(() => {
        // runs once before all tests in the block
        cy.fixture('exampleData').then( (Jdata) => {
            data = Jdata
        })
    })

    beforeEach(() => {
        // runs before each test in the block
    })

    afterEach(() => {
        // runs after each test in the block
    })

    after(() => {
        // runs once after all tests in the block
    })



    it('My first test case', () => {

        const homePage = new HomePage()
        const productPage = new ProductPage()
        const cartPage = new CartPage()
        const checkoutPage = new CheckoutPage()
        var sum = 0


        cy.visit(Cypress.env('url') + '/angularpractice/')


        homePage.getFieldName().type(data.name)
        homePage.getFieldEmail().type(data.email)
        homePage.getFieldPassword().type(data.password)
        homePage.getSelectGender().select( data.gender)

        homePage.getFieldName().should('have.value',data.name)
        homePage.getFieldEmail().should('have.value',data.email)
        homePage.getSelectGender().should('have.value',data.gender)
        homePage.getEmploymentOpt().should('be.disabled')
        homePage.getTxtShop().click()

        var productNameData =  data.productName

        productNameData.forEach(element => {
            cy.selectProduct(element)
        });

        productPage.getBtnCheckout().click()

        cartPage.getProducsPrice().each((el,index,$list) => {
            const amount = el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        })

        cartPage.getTotalPrice().then(function(element){
            const totalAmount = element.text()
            var res = totalAmount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(Number(sum))
        })


        cartPage.getBtnCheckout().click()
        checkoutPage.getCountryTextField().type(data.country)
        checkoutPage.getCountryOpts(data.country).click()
        checkoutPage.getCheckBox().click({force: true})
        checkoutPage.getBtnPurchase().click()
        checkoutPage.getAlert().should('have.text','\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ')

        






    })


})