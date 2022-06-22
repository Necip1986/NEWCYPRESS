//find user and type Manager
//find password and type Manager2!

describe('login test',()=>{

    it('test case 1',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click();
        cy.get('#UserName').type('Manager')
        cy.get('#Password').type('Manager2!')
        cy.get('#btnSubmit').click();
    })
})