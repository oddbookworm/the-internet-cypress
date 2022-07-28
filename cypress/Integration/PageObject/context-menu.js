import HomePage from "./HomePage";

class ContextMenu extends HomePage {

    visitPage () {
        this.visitHome();
        let relative = '/context_menu';

        cy.visit(relative);
    }

    getBox () {
        let box = cy.get('[id="hot-spot"]');

        return box;
    }

}

export default ContextMenu