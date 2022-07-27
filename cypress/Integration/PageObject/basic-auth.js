import HomePage from "./HomePage";


class BasicAuthPage extends HomePage {

    constructor() {
		super();
		this.success;
	}

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

      visitPageModified (creds) {
        this.visitHome();

        let options = {
			url: '/basic_auth/',
			auth: creds,
			failOnStatusCode: false
		}

        // cy.request(options).then((response) => {
        //     cy.get('@success').as('success');
		// 	if (response.isOkStatusCode) {
		// 		cy.visit(options);
		// 		// this.success = cy.contains("Congratulations!");
        //         success = true;
		// 	} else {
		// 		success = false;
		// 	}
		// })
        return cy.request(options);
      }
}

export default BasicAuthPage