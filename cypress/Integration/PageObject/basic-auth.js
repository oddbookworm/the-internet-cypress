import HomePage from "./HomePage";


class BasicAuthPage extends HomePage {

    // I tried to get this working with incorrect credentials,
    // but I was unsuccessful
    visitPage () {
        this.visitHome();

        let creds = {
            username: 'admin',
            password: 'admin'
        }

        cy.visit({
            url: '/basic_auth/',
            auth: creds
        })
        
        return cy.contains("Congratulations! You must have the proper credentials.");
      }

}

export default BasicAuthPage