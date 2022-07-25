import addRemovePage from "../Integration/PageObject/add-remove";

const page = new addRemovePage

describe ('Test', () => {

  // base page should be visited
  // assert that the header content of the page exists
  it ('Visit the base page', () => {
    let header = page.visitPage();
    header.should("exist");
  })

  // Add Element button should be clicked
  // assert that a new button with "Delete" should appear
  it ('Add an element', () => {
    let element = page.addElement();

    element.should("exist")
  })

  // Delete button should be clicked
  // assert that no button with "Delete" is present
  it ('Delete an element', () =>{
    let element = page.deleteElement();

    element.should("not.exist")
  })

})