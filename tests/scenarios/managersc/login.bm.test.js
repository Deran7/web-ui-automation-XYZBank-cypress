import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as asserts from '@helpers/asserts.js';
import * as element from '@helpers/elements.js';
import * as loginPage from '@pages/managerpg/login-bm.page.js';

describe('Login Manager', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login) 
    });

    it.only('Succes login as bank manager', () => {
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
    });
})