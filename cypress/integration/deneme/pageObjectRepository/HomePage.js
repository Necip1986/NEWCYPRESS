class HomePage{
    getSignInLink(){ //we will get object
        return cy.contains('Sign In');

    }
}

export default HomePage; //we need to make this class public