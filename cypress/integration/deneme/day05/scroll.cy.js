describe('scroll',()=>{
    it('scroll test',()=>{

        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        //scroling down to our room
        cy.get('.col-md-7 > .mb-4').scrollIntoView();
        cy.wait(2000);
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()
    })
})