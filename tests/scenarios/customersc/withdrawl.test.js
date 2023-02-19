import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as element from '@helpers/elements.js';
import * as loginPage from '@pages/customerpg/login-cs.page.js';
import * as depositePage from '@pages/customerpg/deposite.page.js';
import * as withdrawlPage from '@pages/customerpg/withdrawl.page.js';
import * as customerData from '@data/customer.data.js';

describe('Widrawl Customer', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.withdrawl) 
    });

    it('As a user, I want to make a withdrawal using dollar currency ', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(withdrawlPage.accountNumberField, "1001")

        // Withdrawl
        element.click(withdrawlPage.withdrawlButton)
        element.fillField(withdrawlPage.amoundtobeWithdrawl, customerData.WITHDRAWL_AMOUNT.dollar)
        element.click(withdrawlPage.submitwithdrawlButton)
    });

    beforeEach(() => {
        route.visit(ROUTES.deposite) 
    });

    it('As a user, I want to make a withdrawal using pound currency ', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(withdrawlPage.accountNumberField, "1002")

        // Withdrawl
        element.click(withdrawlPage.withdrawlButton)
        element.fillField(withdrawlPage.amoundtobeWithdrawl, customerData.WITHDRAWL_AMOUNT.pound)
        element.click(withdrawlPage.submitwithdrawlButton)
    });

    beforeEach(() => {
        route.visit(ROUTES.deposite) 
    });

    it('As a user, I want to make a withdrawal using rupee currency ', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(withdrawlPage.accountNumberField, "1003")

        // Withdrawl
        element.click(withdrawlPage.withdrawlButton)
        element.fillField(withdrawlPage.amoundtobeWithdrawl, customerData.WITHDRAWL_AMOUNT.rupee)
        element.click(withdrawlPage.submitwithdrawlButton)
    });
})
