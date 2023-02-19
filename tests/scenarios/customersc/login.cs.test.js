import * as route from '@helpers/route.js';
import * as assert from '@helpers/asserts.js';
import { ROUTES } from '@tests/const/routes.js';
import * as element from '@helpers/elements.js';
import * as loginPage from '@pages/customerpg/login-cs.page.js';

describe('Login Customer', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login) 
    });

    it.only('Should succes login with data valid "Hermoine Granger"', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Hermoine Granger")
        element.click(loginPage.loginButton)
        assert.shouldContaintText(loginPage.welcomeText, "Welcome Hermoine Granger")
    });

    it.only('Should succes login with data valid "Harry Potter"', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Harry Potter")
        element.click(loginPage.loginButton)
        assert.shouldContaintText(loginPage.welcomeText, "Welcome Harry Potter")
    });

    it.only('Should succes login with data valid "Ron Weasly"', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Ron Weasly")
        element.click(loginPage.loginButton)
        assert.shouldContaintText(loginPage.welcomeText, "Welcome Ron Weasly")
    });

    it.only('Should succes login with data valid "Albus Dumbledore"', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Albus Dumbledore")
        element.click(loginPage.loginButton)
        assert.shouldContaintText(loginPage.welcomeText, "Welcome Albus Dumbledore")
    });
    it.only('Should succes login with data valid "Neville Longbottom"', () => {
        element.click(loginPage.customerLoginButton)
        element.selectDropdown(loginPage.selectCustomer, "Neville Longbottom")
        element.click(loginPage.loginButton)
        assert.shouldContaintText(loginPage.welcomeText, "Neville Longbottom")
    });
})