
import { Register } from "../../support/pages/RegisterPO/Register";

describe('Register tests', () => {

    const register = new Register()

    beforeEach(() => {
        cy.visitRegister()
      });

      it('Register tests pass', () => {
        register.registerPass()
      });
      
      it('Register tests failed', () => {
        register.registerFailed()
      });
    
})