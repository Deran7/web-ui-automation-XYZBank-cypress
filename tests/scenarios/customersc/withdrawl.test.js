import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as asserts from '@helpers/asserts.js';
import * as element from '@helpers/elements.js';
import * as loginPage from '@pages/customerpg/login-cs.page.js';
import * as withdrawlPage from '@pages/customerpg/withdrawl.page.js';
import * as customerData from '@data/customer.data.js';

describe('Widrawl Customer Positive Case', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login) 
    });

    it.only('As a user, I want to make a withdrawal using dollar currency ', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(withdrawlPage.accountNumberField, "1001")

        // Withdrawl
        element.click(withdrawlPage.withdrawlButton)
        element.fillField(withdrawlPage.amoundtobeWithdrawl, customerData.WITHDRAWL_AMOUNT.dollar)
        element.click(withdrawlPage.submitwithdrawlButton1)
        asserts.shouldContaintText(withdrawlPage.succesAllert, "Transaction successful")
    });
})

describe('Widrawl Customer Negative Case', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login) 
    });

    it.only('Withdrawing without entering an amount', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)

        // Account Number Field
        element.selectDropdown(withdrawlPage.accountNumberField, "1001")

        // Withdrawl
        element.click(withdrawlPage.withdrawlButton)
        element.click(withdrawlPage.submitwithdrawlButton2)
    });
})