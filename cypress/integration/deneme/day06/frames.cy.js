
describe('frames',()=>{
    it('handling iframes',()=>{

        /*
           iframes
           1-we need to install plugin. write in google and find below code 
             ctrl c terminali kapatir
             npm install -D cypress-iframe
           import package in the class: 
                                      import 'cypress-iframe'; copy and paste at the top of the claas
            3-we have to use cy.frameLoaded(#mce_0_ifr) css selector of iframe
            4-cy.iframe().find('p').type() // 
                                      
            */
       cy.visit('https://the-internet.herokuapp.com/iframe')

       //asserting the text
       cy.get('h3').should('contain','Editor')

       //cy.get('#mce_0_ifr').type('inside the frame'); //we can not type because it is a frame we have to handle
       cy.frameLoaded('#mce_0_ifr'); //switching the iframe element
       cy.iframe().find('p').clear(); //first we clean the area
       cy.iframe().find('p').type('inside the iframe'); //we need to use iframe method

       //working outside of the frame by default we don't need to switch again. we can work easily
       cy.get('.large-4 > div > a').should('have.text','Elemental Selenium')


    })
})