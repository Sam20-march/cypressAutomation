class ProductPage {

    clickOnProductOption(){
        cy.get(`a#dropdownProduct`).click();

    }

    clickOnVisualReviewsOption(){
        cy.get(`a[href*='visual_reviews']`).invoke(`show`).contains(`Visual Reviews`).click({force: true});
        cy.get(`section#visual_reviews>div>div>p`).should(`include.text`,'Visual Review');
    }

}

export default ProductPage;