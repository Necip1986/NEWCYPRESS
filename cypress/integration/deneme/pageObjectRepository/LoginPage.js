class LoginPage{
   
    getUserNameBox(){ 
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input');

    }

    getPasswordBox(){
        return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input');
    }

    getLoginButton(){
        return cy.get('.MuiButton-label')
    }
}

export default LoginPage; //we need to make this class public