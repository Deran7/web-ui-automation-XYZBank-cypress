import * as route from '@helpers/route.js';
import { ROUTES } from '@tests/const/routes.js';
import * as asserts from '@helpers/asserts.js';
import * as element from '@helpers/elements.js';
import * as loginPage from '@pages/managerpg/login-bm.page.js';
import * as openaccountPage from '@pages/managerpg/open-account.page.js'

describe('Open Account Positive Case', () => {

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it('Opening a new account for a new user named Hermoine Granger with the currency of dollars', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Hermoine Granger"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Hermoine Granger")
        element.selectDropdown(openaccountPage.selectcurrency, "Dollar")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Hermoine Granger with the currency of pound', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Hermoine Granger"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Hermoine Granger")
        element.selectDropdown(openaccountPage.selectcurrency, "Pound")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Hermoine Granger with the currency of rupee', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Hermoine Granger"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Hermoine Granger")
        element.selectDropdown(openaccountPage.selectcurrency, "Rupee")
        element.click(openaccountPage.proccesButton)
    });

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it('Opening a new account for a new user named Harry Potter with the currency of dollars', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Harry Potter"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Harry Potter")
        element.selectDropdown(openaccountPage.selectcurrency, "Dollar")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Harry Potter with the currency of pound', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Harry Potter"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Harry Potter")
        element.selectDropdown(openaccountPage.selectcurrency, "Pound")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Harry Potter with the currency of rupee', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Harry Potter"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Harry Potter")
        element.selectDropdown(openaccountPage.selectcurrency, "Rupee")
        element.click(openaccountPage.proccesButton)
    });

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it('Opening a new account for a new user named Ron Weasly with the currency of dollars', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Ron Weasly"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Ron Weasly")
        element.selectDropdown(openaccountPage.selectcurrency, "Dollar")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Ron Weasly with the currency of pound', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Ron Weasly"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Ron Weasly")
        element.selectDropdown(openaccountPage.selectcurrency, "Pound")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Ron Weasly with the currency of rupee', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Ron Weasly"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Ron Weasly")
        element.selectDropdown(openaccountPage.selectcurrency, "Rupee")
        element.click(openaccountPage.proccesButton)
    });

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it('Opening a new account for a new user named Albus Dumbledore with the currency of dollars', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Albus Dumbledore"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Albus Dumbledore")
        element.selectDropdown(openaccountPage.selectcurrency, "Dollar")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Albus Dumbledore with the currency of pound', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Albus Dumbledore"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Albus Dumbledore")
        element.selectDropdown(openaccountPage.selectcurrency, "Pound")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user named Albus Dumbledore with the currency of rupee', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Albus Dumbledore"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Albus Dumbledore")
        element.selectDropdown(openaccountPage.selectcurrency, "Rupee")
        element.click(openaccountPage.proccesButton)
    });
})

describe('Open Account Negative Case', () => {

    beforeEach(() => {
        route.visit(ROUTES.login)
    });

    it('Opening a new account for a new user named Hermoine Granger without currency', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Hermoine Granger"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcustomerName, "Hermoine Granger")
        element.click(openaccountPage.proccesButton)
    });

    it('Opening a new account for a new user without customer name', () => {
        // Login Manager
        element.click(loginPage.managerLoginButton)
        asserts.shouldContaintText(loginPage.addCustomerButton, 'Add Customer')
        asserts.shouldContaintText(loginPage.openAccountButton, 'Open Account')
        asserts.shouldContaintText(loginPage.customerButton, 'Customers')
        
        // Open Account "Hermoine Granger"
        element.click(openaccountPage.openaccountButton)
        element.selectDropdown(openaccountPage.selectcurrency, "Dollar")
        element.click(openaccountPage.proccesButton)
    });
})