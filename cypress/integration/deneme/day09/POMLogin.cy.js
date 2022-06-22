import HomePage from '../../pageObjectRepository/HomePage' //farkli pakete alinca basina ../ kendi extra koydu
import LoginPage from '../../pageObjectRepository/LoginPage'



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

    it('paylinn Login',function(){ 

        //creating page objects in test level
        const homePage = new HomePage();
        const loginPage = new LoginPage();

        homePage.getSignInLink().click()
        
        loginPage.getUserNameBox().type(this.data.userName);
        loginPage.getUserNameBox().should('have.attr','value',this.data.userName)
       
        loginPage.getPasswordBox().type(this.data.password);
        loginPage.getPasswordBox().should('have.attr','value',this.data.password)
        loginPage.getLoginButton().click();
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')

        //we can do multiple assertion with and() method
        cy.get("div[class='header__nav header__link']")
        .should('contain.text','Welcome')
        .and('contain.text','React User')
        .and('contain.text','Logout')
        .and('contain.text',this.data.userName)

    })
})