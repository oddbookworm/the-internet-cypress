class HomePage {

    visitHome () {
        let basePath = "localhost:7080";
        try {
            cy.visit( basePath )
        } catch {
            basePath = "https://the-internet.herokuapp.com/"
            cy.visit( basePath )
        }

        return basePath
    }

}

export default HomePage