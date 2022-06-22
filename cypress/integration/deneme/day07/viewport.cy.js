describe('viewport test',()=>{
    it('view with iphone 6',()=>{
        //cy.visit('https://qa-environment.crystalkeyhotels.com/Account/Logon');
        cy.visit('https://www.amazon.com/');
        cy.wait(5000)
        cy.viewport('iphone-6')
        cy.screenshot();

    })
    it.only('view with certain screen pixels',()=>{
        //cy.visit('https://qa-environment.crystalkeyhotels.com/Account/Logon');
        cy.visit('https://www.amazon.com/');
        cy.wait(5000)
        cy.viewport(2000,1000)
        cy.screenshot();
;
    })
})