import BasicAuthPage from "../Integration/PageObject/basic-auth";

const page = new BasicAuthPage

describe('Basic Auth page testing correct credentials', () => {

    // visit the page and login with the correct credentials
    it('Visit the page and input correct creds', () => {

        let creds = {
            username: 'admin',
            password: 'admin'
        }

        let options = {
            url: '/basic_auth/',
            auth: creds
        }

        let request = page.visitPageModified(options);
        request.then((response) => {
            if (response.isOkStatusCode) {
                cy.visit(options);
                let results = cy.contains('Congratulations');
                results.should('exist');
            } else {
                let results = cy.contains('Examples');
                results.should('exist');
            }
        })
    })

    // visit the page and login with incorrect credentials
    it('Visit the page and input incorrect creds', () => {

        let creds = {
            username: 'user',
            password: 'password'
        }

        let options = {
            url: '/basic_auth/',
            auth: creds
        }

        let request = page.visitPageModified(options);
        request.then((response) => {
            if (response.isOkStatusCode) {
                cy.visit(options);
                let results = cy.contains('Congratulations');
                results.should('exist');
            } else {
                let results = cy.contains('Examples');
                results.should('exist');
            }
        })
    })

})