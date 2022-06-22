describe('Amazon Test',()=>{
    it('Test 1',()=>{
        cy.visit('https://www.amazon.com');
        cy.get('#twotabsearchtextbox').type('apple').should('value','apple')
        cy.should('value','apple')
      
        
    })
})


