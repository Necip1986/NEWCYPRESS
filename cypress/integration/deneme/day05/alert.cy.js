describe('alert',()=>{

    it('alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //cypress automatically accepts alert when you click on alert button. we don't see alert menu on ui
        cy.get(':nth-child(1) > button').click();

        //assert the text, 'You successfully clicked an alert'
        cy.get('#result').should('have.text','You successfully clicked an alert');

        //when i click second element


    })
    it('alert test 2',()=>{
        ////when i click second element
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //cicking the second alert
        cy.get(':nth-child(2) > button').click(); //it is accept again by default

        //assert the text, 'You successfully clicked an alert'
        //cy.get('#result').should('have.text','You clicked: Ok');

        //with cypress we can control the browser events using on function on is a jquery function
        //first we will locate element
        //window:confirm: confirm(functionality)
        //on function is controlling the window
        cy.on('window:confirm',(str)=>{
            return false
            //return true //default behaviour of cypress
        })
        cy.get('#result').should('have.text','You clicked: Cancel');


    })

    it.only('alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //we will use window()
        //click on third alert
        //cy.get(':nth-child(3) > button').click();

       
        
        cy.
        window().//to control the pub up window
        then(($windowElement)=>{ //represent the window pubup element,
            cy.stub($windowElement,'prompt').returns('Hi') 
            cy.wait(3000)
            cy.get(':nth-child(3) > button').click();
        })

        //assert the text, 'You successfully clicked an alert'
        cy.get('#result').should('have.text','You entered: Hi');

        //when i click second element


    })
})