describe('custom methods',()=>{
    it('Login',()=>{

        //login custom method that is inside command.js 
        //when we add a function in command.js it will be accesable in the entire framework
        cy.login('cdef!@gmail.com','12345');
    })
})