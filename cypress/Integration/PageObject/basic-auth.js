import HomePage from "./HomePage";

class BasicAuth extends HomePage {

    visitPage () {
        this.visitHome();
        
        cy.visit({
            url: '/basic_auth/',
            auth: {
                username: 'admin',
                password: 'admin'
            }
        })
      }

}