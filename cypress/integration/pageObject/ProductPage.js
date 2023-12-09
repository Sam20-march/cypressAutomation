import Header from "./Header";

// PageObject for Product page
class ProductPage extends Header {
    header = new Header;

    //Navigate to Product page
    clickOnProductOption(){
        this.getProduct();

    }

    // Click on Visual reviews option from Product tab
    clickOnVisualReviewsOption(){
        cy.get(`a[href*='visual_reviews']`).invoke(`show`).contains(`Visual Reviews`).click({force: true});
        cy.get(`section#visual_reviews>div>div>p`).should(`include.text`,'Visual Review');
    }

    // Click on Smart Orchestration option from Product tab
    clickOnSmartOrchestration(){
        cy.get(`a[href*='smart_orchestration']`).eq(0).invoke(`show`).contains(`Smart Orchestration`).click({force: true});
        cy.get(`section#smart_orchestration>div>div>p`).should(`include.text`,`Smart Orchestration`);

    }

    // Scroll to Test Analyst
    scrollToTestAnalytics(){
        cy.get(`section#test_analytics>div>div>p`).contains(`Test Analytics`).scrollIntoView();
        cy.wait(500);
    }

}

export default ProductPage;