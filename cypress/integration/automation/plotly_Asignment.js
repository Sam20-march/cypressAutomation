/// <reference types="Cypress"/>
import CypressPage  from "../pageObject/CypressPage";
import CompanyPage from "../pageObject/CompanyPage";
import ProductPage from "../pageObject/ProductPage";

describe(`Home page test`, () => {

    beforeEach(() => {
        cy.visit(`https://www.cypress.io/`);
        cy.viewport(window.screen.width, window.screen.height);
    })
    
    it(`Valdiate Weekly Download numbes are visiable on scroll to "Loved by OSS,trusted by Enterprise"`, () => {
        
        const homePage = new CypressPage();
        homePage.scrollToLovedByText();
        homePage.validateWeeklyDownloadNumberVisiable();   
    })

    it(`Validate User is able to click on Company and then on “About Cypress”`, () => {
        const companyPage = new CompanyPage();
        companyPage.clickOnCompanyOption();
        companyPage.clickOnAboutCypressOption();
        
    })

    it(`Validate User is able to click on “Product” and then “visual review” `, () => {
        const productPage = new ProductPage;
        productPage.clickOnProductOption();
        productPage.clickOnVisualReviewsOption();
        
    })

    it(`Validate text on Cypress install`, ()=>{
        const homePage = new CypressPage();
        homePage.getCypressInstall();
    })

    it(`Validate green circle is around “Test Analytics”`, () => {
        const productPage = new ProductPage();
        productPage.clickOnProductOption();
        productPage.clickOnSmartOrchestration();
        productPage.scrollToTestAnalytics();
        
    })

    


})