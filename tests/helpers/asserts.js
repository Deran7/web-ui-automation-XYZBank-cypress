export function shouldContaintText(selector, ...args){
    return cy.get(selector).should('contain', ...args);
};

export function shouldIncludeURL(uri){
    return cy.visit(uri);
}
