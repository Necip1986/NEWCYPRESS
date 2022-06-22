
describe("Fixture Folder",()=>{

    before(function(){
        //this used to access the data that is inside credentials.json file
        //cy.fixture('NAME OF FILE')
        //We have promise and then() function

        cy.fixture('credentials').then(
            function(data){
                this.data=data;
            }
        )

    })
    
    beforeEach('go to url',function(){ //again arrow function does not work because of this keyword

        cy.visit(this.data.url)
    })

    it('paylinn Login',function(){ //arrow function does not work here maybe because of this keyword

        cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.userName);
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('have.attr','value',this.data.userName)
       
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.password);
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('have.attr','value',this.data.password)
        cy.get('.MuiButton-label').click();
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')

        //we can do multiple assertion with and() method
        cy.get("div[class='header__nav header__link']")
        .should('contain.text','Welcome')
        .and('contain.text','React User')
        .and('contain.text','Logout')
        .and('contain.text',this.data.userName)

    })
})