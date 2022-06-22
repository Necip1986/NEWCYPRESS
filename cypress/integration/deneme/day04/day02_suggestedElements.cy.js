describe('suggested element',()=>{
    it.skip('suggested element test',()=>{
        cy.visit('https://www.google.com')
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('usa')
        cy.wait(3000);
        cy.get('li span b') //getting the list of bold items
        .contains('map')    //chosing the one that contains map
        .click();
         
    
    })

    it('suggested',()=>{
        cy.visit('https://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')
        cy.get('.ac_results')
        .contains('Chiffon').wait(2000).click();
    })
    
})