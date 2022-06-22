import '@4tw/cypress-drag-drop' //use with drag()
import 'cypress-iframe'; //use with iframe and frameLoaded
import 'cypress-file-upload'; //use with attachFile('path of file')
/*
  
*/

Cypress.Commands.add('login',(email,password)=>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click();
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click();

})

