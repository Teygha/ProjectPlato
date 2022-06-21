import {Homepage} from "../fixtures/projectplatoElements";

describe("Authentication",function(){
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

it("Launch projectplato Website",()=>{
    cy.visit ("https://very-important.vercel.app/");
    cy.get(Homepage.header).contains('Welcome to the Documentation').should('be.visible');
    cy.get(Homepage.sideBar).contains('Introduction').should('be.visible');
});

it("View Didcomm Page and navigate back",()=>{
    cy.get(Homepage.didcommPage).click();
    cy.contains('DIDComm Messaging').should('be.visible');
    cy.url().should('include','/didcomm');
    cy.get(Homepage.backtoIntroduction).click();
    cy.get(Homepage.header).contains('Welcome to the Documentation').should('be.visible');
});

it("View Self Sovreign Identity Page and navigate back",()=>{
    cy.get(Homepage.didcommPage).click();
    cy.get(Homepage.selfsovreignPage).click({ multiple: true });
    cy.get(Homepage.selfsovreignHeader).contains('Self-sovereign identity (SSI)').should('be.visible');
    cy.url().should('include','/self%20sovereign%20identity');
});

it("Can Search",()=>{
    cy.get(Homepage.searchBar).click().type('introduction');
    cy.get(Homepage.introduction).click();
    cy.contains('Welcome to the Documentation').should('be.visible');
    cy.get(Homepage.searchBar).click().clear().type('Didcomm');
    cy.get(Homepage.didcomm).click();
    cy.contains('Didcomm').should('be.visible');
    cy.get(Homepage.searchBar).click().clear().type('Didcomm');
    cy.get(Homepage.sovereign).click();
    cy.contains('Sovereign').should('be.visible');
    
});

it("Switch between Light and Dark Mode",()=>{
    cy.get(Homepage.switchMode). click();
});

})