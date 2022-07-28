import HomePage from "./HomePage";

class CheckBox extends HomePage {

    visitPage () {
        this.visitHome();
        let relative = '/checkboxes';

        cy.visit(relative);
    }

    getBox (index) {
        let box = cy.get('[type="checkbox"]').eq(index);

        return box;
    }

}

export default CheckBox