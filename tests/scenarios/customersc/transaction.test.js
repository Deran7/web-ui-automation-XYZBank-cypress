import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as element from '@helpers/elements.js';
import * as loginPage from '@pages/customerpg/login-cs.page.js';
import * as transactionPage from '@pages/customerpg/transaction.page.js';

describe('Transaction Customer', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.Transaction) 
    });

    it.only('As a user, I want to verify the transaction that I have made ', () => {
        // Login Hermoine Granger
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Transaction Hermoine Granger
        element.click(transactionPage.transactionButton)
        element.click(transactionPage.nextButton)
    });

    it.only('As a user, I want to reset all of my transactions that are listed in the transactions menu', () => {
        // Login Hermoine Granger
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Transaction Reset Hermoine Granger
        element.click(transactionPage.transactionButton)
        element.click(transactionPage.nextButton)
        element.click(transactionPage.resetButton)
    });

})