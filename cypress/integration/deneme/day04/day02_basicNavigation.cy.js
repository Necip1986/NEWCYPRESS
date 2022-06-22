describe('navigations',()=>{
    it.skip('back, forward and refresh',()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        //we can use hard wait
        cy.contains('Log in').click();
        cy.wait(3000);
        cy.go('back'); //navigate back I can use go(-1)
        cy.wait(3000);
        cy.go('forward');//navigate forward, I can use go(1)
        cy.wait(3000);
        cy.reload(); //use for refreshing the page
    })
    it('chaining the navigations',()=>{
        
        //we can chain the function
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        cy.
        contains('Log in').
        click()
        .go('back')
        .go('forward')
        .go('back')
        .reload();

        //to force reload and verify the log in link is visible
        cy.
        reload(true) //true means force
        .contains('Log in')
        .should('be.visible')
        
    })
})