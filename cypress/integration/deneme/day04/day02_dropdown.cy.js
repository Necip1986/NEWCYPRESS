describe('dropdown',()=>{
    it('dropdown test',()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        //cypress uses select method for drop down
        //1.locate the dropdown element
        //2.use select method
        cy
        .get('#dropdown')
        .select('Option 1')
        .should('have.value','1');//selected value = 1
        cy.wait(2000);

        cy
        .get('#dropdown')
        .select('Option 2')
        .should('have.value','2');////selected value = 2
    
    })
    
})