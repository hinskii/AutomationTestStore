
import { LogIn } from "../../support/pages/LogInPO/Login";
describe('Log in section tests', () => {

    const logIn = new LogIn()

    beforeEach(() => {
        cy.visitLogIn()
      });

      it('Log in works correct and should pass', () => {
        logIn.logInPass()
      });
      
      it('login  tests should  fail - bad password', () => {
        logIn.logInFailedBadPassword()
      });
    
})