import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as asserts from '@helpers/asserts.js';
import * as element from '@helpers/elements.js';
import * as data from '@data/manager.data.js';
import * as loginPage from '@pages/managerpg/login-bm.page.js';
import * as customerPage from '@pages/managerpg/customer.page.js';




describe('Customer', () => {

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it.only('As a bank manager, I want to verify registered users', () => {
        
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Customer Page
        element.click(customerPage.customerButton)
    });

    it.only('As a bank manager, I want to verify registered users through a search feature', () => {
        
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Customer Page
        element.click(customerPage.customerButton)
        element.fillField(customerPage.searchcustomerField, data.DATA_CUSTOMER.firstname)
        element.fillField(customerPage.searchcustomerField, data.DATA_CUSTOMER.lastname)
        element.fillField(customerPage.searchcustomerField, data.DATA_CUSTOMER.postcode)
    });
})