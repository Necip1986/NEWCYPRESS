describe('checkbox',()=>{
    it('check box test',()=>{

        cy.visit('http://automationpractice.com/index.php');
        //click on women
        cy.get('.sf-with-ul').first().click()

        //verify the check box is not checked
        cy.get('#layered_category_4').should('not.be.checked'); //return true if not checked

        cy.get('#layered_category_4').check();
        cy.get('#layered_category_4').should('be.checked');//return true if checked

        //How can I uncheck
        cy.get('#layered_category_4').uncheck();
        cy.get('#layered_category_4').should('not.be.checked');

       




    })
    it('all check boxes',()=>{
        cy.visit('http://automationpractice.com/index.php');
        //click on women
         //How can I check all of check boxes
        cy.get('.sf-with-ul').first().click();
        //all of check boxes have same tag input type=checkboxes
        cy.get("input[type='checkbox']").check();
        cy.get("input[type='checkbox']").uncheck();
    })
    it.only('all check boxes',()=>{
        cy.visit('http://automationpractice.com/index.php');
      
        cy.get('.sf-with-ul').first().click();
        
        cy.get('#layered_category_4').check().should('be.checked');
        //assert if the parent span class value is checked
        cy.get("input[type='checkbox']").first().parent().should('have.class','checked');

        //in cypress we can assert attributes value in should method
    })
})