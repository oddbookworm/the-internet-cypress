import BrokenImage from "../Integration/PageObject/broken-image";

const page = new BrokenImage();

describe("Broken Image page testing", () => {

    it("Visit the page", () => {
        let header = page.visitPage();

        header.should("exist");
    })

    let sources = [
        "asdf.jpg",
        "hjkl.jpg",
        "img/avatar-blank.jpg"
    ];

    for (const src of sources) {
        it(`Check src="${src}" image`, () => {

            let image = page.getImage(src);

            image.each(($img) => {
                cy.wrap($img).scrollIntoView().should('be.visible');

                expect($img[0].naturalWidth).to.be.greaterThan(0);
                expect($img[0].naturalHeight).to.be.greaterThan(0);

            })
        })
        
    }

})