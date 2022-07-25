import HomePage from "./HomePage";

class addRemovePage extends HomePage {

  visitPage () {
    this.visitHome();
    let relative = "/add_remove_elements/";
    
    cy.visit(relative);

    return cy.contains("Add/Remove Elements");
  }
  
  addElement () {
    cy.contains('Add Element').click();

    return cy.contains("Delete");
  }

  deleteElement() {
    cy.contains('Delete').click();

    return cy.contains("Delete")
  }

}

export default addRemovePage