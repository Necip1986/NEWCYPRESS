describe('multiple windows',()=>{
    it('handling multiple windows',()=>{

        //WAY 1
        cy.visit('https://the-internet.herokuapp.com/windows')
        //click on click here button
        //cy.get('.example > a').click(); //now we are out of cypress we have to back because of that we have to remove target attribute
        //emoveAttr in jquery use of invoke function
        //.invoke('removeAttr','ATTRIBUTE NAME') 
        cy.get('.example > a').invoke('removeAttr','target').click(); //WE will remove target attribute 
        //cypress opened new window at the same window with this code
        
        //asserting the new window
        cy.get('h3').should('have.text','New Window')

        
    })
    it.only('OPENING IN NEW URL',()=>{

        //WAY 2
        cy.visit('https://the-internet.herokuapp.com/windows')

        //We will get the href value and store in a variable then open the value in the same window
        //we will use prop() to get the value of attribute. it is a jquery method
        //since prop is a jquery we use then() to use prop function
         cy.wait(3000);
        cy.get('.example > a')
        .then((element)=>{
            const newUrl=element.prop('href')
            cy.visit(newUrl);
        })
        
        //asserting the new window
        cy.get('h3').should('have.text','New Window')

        
    })
})