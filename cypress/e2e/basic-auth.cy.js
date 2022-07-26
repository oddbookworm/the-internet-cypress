import BasicAuthPage from "../Integration/PageObject/basic-auth";

const page = new BasicAuthPage

describe('Basic Auth page testing', () => {

    // visit the page and login with the correct credentials
    it('Visit the page and input correct creds', () => {
        let results = page.visitPage();
        
        results.should("exist");
    })

})