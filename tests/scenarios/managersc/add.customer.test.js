import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as asserts from '@helpers/asserts.js';
import * as element from '@helpers/elements.js';
import * as data from '@data/manager.data.js';
import * as loginPage from '@pages/managerpg/login-bm.page.js';
import * as addCustomer from '@pages/managerpg/add-customer.page.js';




describe('Add Customer Positive Case', () => {

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it('Ensure succes add customer allert displayed with customer id when usre entered valid data', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Add Customer
        element.click(addCustomer.addcustomerButton)
        element.fillField(addCustomer.firstNameField, data.ADD_DATA_CUSTOMER.firstname)
        element.fillField(addCustomer.lastNameField, data.ADD_DATA_CUSTOMER.lastname)
        element.fillField(addCustomer.postCodeField, data.ADD_DATA_CUSTOMER.postcode)
        element.click(addCustomer.submitaddcustomerButton)
    });
})

describe('Add Customer Negative Case', () => {

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it('Ensure error alert displayed on last name field when user try to add customer without input last name and postcode', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Add Customer
        element.click(addCustomer.addcustomerButton)
        element.fillField(addCustomer.firstNameField, data.ADD_DATA_CUSTOMER.firstname)
        element.click(addCustomer.submitaddcustomerButton)
    });

    it('Ensure error alert displayed on post code field when user try to add customer without input firstname and post code', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Add Customer
        element.click(addCustomer.addcustomerButton)
        element.fillField(addCustomer.lastNameField, data.ADD_DATA_CUSTOMER.lastname)
        element.click(addCustomer.submitaddcustomerButton)
    });

    it('Ensure error alert displayed on first name field when user try to add customer without input first name and lastname', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Add Customer
        element.click(addCustomer.addcustomerButton)
        element.fillField(addCustomer.postCodeField, data.ADD_DATA_CUSTOMER.postcode)
        element.click(addCustomer.submitaddcustomerButton)
    });
})