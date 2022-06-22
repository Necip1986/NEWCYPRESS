describe('go to the application',()=>{

    it('test case 1',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.contains('Log in').click();
        cy.url().should('include','/Account/Logon');
    })
}

)