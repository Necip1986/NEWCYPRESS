describe("Fixture Folder",()=>{

    before('go to url',()=>{
        cy.visit('https://paylinn.com')
    })

    it('paylinn Login',()=>{
        
        cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User');
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user');
        cy.get('.MuiButton-label').click();
        cy.get("div[class='header__nav header__link']").should('contain.text','Welcome')

    })
})