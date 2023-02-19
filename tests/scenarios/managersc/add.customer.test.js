import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as asserts from '@helpers/asserts.js';
import * as element from '@helpers/elements.js';
import * as data from '@data/manager.data.js';
import * as loginPage from '@pages/managerpg/login-bm.page.js';
import * as addCustomer from '@pages/managerpg/add-customer.page.js';




describe('Add Customer', () => {

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it.only('Succes login as bank manager', () => {
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        element.click(addCustomer.addcustomerButton)
        element.fillField(addCustomer.firstNameField, data.ADD_DATA_CUSTOMER.firstname)
        element.fillField(addCustomer.lastNameField, data.ADD_DATA_CUSTOMER.lastname)
        element.fillField(addCustomer.postCodeField, data.ADD_DATA_CUSTOMER.postcode)
        element.click(addCustomer.submitaddcustomerButton)
    });
})