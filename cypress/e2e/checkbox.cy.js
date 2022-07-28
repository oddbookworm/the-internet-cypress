import CheckBox from "../Integration/PageObject/checkbox";

let page = new CheckBox;

describe('Testing Checkboxes Page', () => {
    it('Visit page', () => {
        page.visitPage();

        cy.contains("Checkboxes");
    })

    it('Check First Box', () => {
        let box = page.getBox(0);

        box.check().then(() => {
            box.should('be.checked')
        });
    })

    it('Uncheck First Box', () => {
        let box = page.getBox(0);

        box.uncheck().then(() => {
            box.should('not.be.checked')
        });
    })

    it ('Uncheck Second Box', () => {
        let box = page.getBox(1);

        box.uncheck().then(() => {
            box.should('not.be.checked')
        });
    })

    it ('Check Second Box', () => {
        let box = page.getBox(1);

        box.check().then(() => {
            box.should('be.checked')
        });
    })

})