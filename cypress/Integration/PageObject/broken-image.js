import HomePage from "./HomePage";

class BrokenImage extends HomePage {
    
    visitPage () {
        this.visitHome();

        cy.visit('/broken_images');

        return cy.contains("Broken Images");
    }

    getImage (src) {
        
        return cy.get(`img[src="${src}"]`);

    }
}

export default BrokenImage