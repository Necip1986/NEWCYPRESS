describe("Amazon Drop Down", ()=>{
    it.skip('Drop Down Test',()=>{
        cy.visit('https://www.amazon.com')
        cy.get('#searchDropdownBox').select('Books',{force:true});

    })
    it('Hover over Test',()=>{
        cy.visit('https://www.amazon.com')
        cy.get('#icp-nav-flyout').trigger("mouseover");
        cy.wait(2000);

        cy.contains('Change country/region.').click();
        cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force:true})
        
    })
})