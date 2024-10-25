class LoginAssertions{

    verifyErrorMessage(){
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Wrong password.')
        })
    }


}
export default LoginAssertions;