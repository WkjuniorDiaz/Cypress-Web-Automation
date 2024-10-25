import LoginPage from "../pages/LoginPage";

class LoginActions{

    loginPage = new LoginPage()

    login(username,password){
        this.loginPage.getUsernameTextField().type(username)
        this.loginPage.getPasswordTextField().type(password)
        this.loginPage.getLoginBtn().click()
    }

}
export default LoginActions;