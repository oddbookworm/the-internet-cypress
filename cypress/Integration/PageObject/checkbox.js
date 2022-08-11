import HomePage from "./HomePage";

class CheckBox extends HomePage {

    visitPage () {
        this.visitHome();
        let relative = '/checkboxes';

        cy.visit(relative);
    }

    getBox (index) {
        return cy.get('[type="checkbox"]').eq(index);
    }

}

export default CheckBox