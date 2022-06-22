describe('hover over',()=>{
    it('hover over test',()=>{
        cy.visit('https://www.amazon.com/')
        cy.get('#icp-nav-flyout')
        .trigger('mouseover');
        cy.get('.nav-template nav-flyout-content nav-tpl-itemList').contains('Deutsch').click();
                
    })
})