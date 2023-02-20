/// <reference types="cypress" /> 

export function get(selector) {
    return cy.get(selector);
}

export function fillField(selector, value) {
    return cy.get(selector).click().parent().type(value);
}

export function click(selector, ...args) {
    return cy.get(selector).click(...args);
}

export function selectDropdown(selector, value) {
    return cy.get(selector).select(value)
}
