import ContextMenu from "../Integration/PageObject/context-menu";

let page = new ContextMenu;

describe('Test Context Menu Page', () => {

    it('Visit Page', () => {
        page.visitPage();

        cy.contains("Context Menu");
    })

    it('Right click box', () => {
        page.getBox().rightclick();

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('You selected a context menu')
        });
    })
})