import HomePage from "./HomePage";


class BasicAuthPage extends HomePage {

      visitPageModified (options) {
        this.visitHome();

		options.failOnStatusCode = false;

        return cy.request(options);
      }
}

export default BasicAuthPage