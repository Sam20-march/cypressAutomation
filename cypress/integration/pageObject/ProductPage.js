import Header from "./Header";

// PageObject for Product page
class ProductPage extends Header {
    header = new Header;

    //Navigate to Product page
    clickOnProductOption(){
        this.getProduct();

    }

    // Click on Visual reviews option frm Product tab
    clickOnVisualReviewsOption(){
        cy.get(`a[href*='visual_reviews']`).invoke(`show`).contains(`Visual Reviews`).click({force: true});
        cy.get(`section#visual_reviews>div>div>p`).should(`include.text`,'Visual Review');
    }

}

export default ProductPage;