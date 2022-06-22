describe('Hooks',()=>{
    //outside of it block
    before(()=>{
        console.log('BEFORE METHOD')
    })

    beforeEach(()=>{
        console.log('beforeEachMethod')
        cy.visit('https://qa-environment.crystalkeyhotels.com/');
    })

    after(()=>{
        console.log('after')
    })

    afterEach(()=>{
        console.log('afterEach')
        cy.url().should('contain','Logon')
    })

    it('Hooks Tests',()=>{

        cy.contains('Log in').click()

    })
})