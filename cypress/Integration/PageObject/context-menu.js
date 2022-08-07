import HomePage from "./HomePage";

class ContextMenu extends HomePage {

    visitPage () {
        this.visitHome();
        
        cy.visit('/context_menu');
    }

    getBox () {
        return box = cy.get('[id="hot-spot"]');
    }

}

export default ContextMenu