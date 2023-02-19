import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as element from '@helpers/elements.js';
import * as loginPage from '@pages/customerpg/login-cs.page.js';
import * as depositePage from '@pages/customerpg/deposite.page.js';
import * as customerData from '@data/customer.data.js';

describe('Deposite Customer', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.deposite) 
    });

    it.only('As a user, I want to deposit using dollar currency ', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(depositePage.accountNumberField, "1001")

        // Deposite
        element.click(depositePage.depositButton)
        element.fillField(depositePage.amoundtobeDeposit, customerData.DEPOSITE_AMOUNT.dollar)
        element.click(depositePage.submitdepositButton)
    });

    beforeEach(() => {
        route.visit(ROUTES.deposite) 
    });

    it.only('As a user, I want to deposit using pound currency ', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(depositePage.accountNumberField, "1002")


        // Deposite
        element.click(depositePage.depositButton)
        element.fillField(depositePage.amoundtobeDeposit, customerData.DEPOSITE_AMOUNT.pound)
        element.click(depositePage.submitdepositButton)
    });

    beforeEach(() => {
        route.visit(ROUTES.deposite) 
    });

    it.only('As a user, I want to deposit using rupee currency ', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(depositePage.accountNumberField, "1003")

        // Deposite
        element.click(depositePage.depositButton)
        element.fillField(depositePage.amoundtobeDeposit, customerData.DEPOSITE_AMOUNT.rupee)
        element.click(depositePage.submitdepositButton)
    });
})
