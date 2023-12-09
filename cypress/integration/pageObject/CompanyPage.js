import Header from "./Header";

// PageObject for Company Page

class CompanyPage extends Header{
     header = new Header();


     // Navigate to Company page
    clickOnCompanyOption(){
        this.header.getCompany();
        cy.url().should(`include`,`about-us`);
    }

    // Click on About Cypress option form Company tab.
    clickOnAboutCypressOption(){
        cy.get(`.flex.flex-col>.font-primary`).invoke(`show`).contains(`About Cypress`).click({force: true});
        cy.get(`h1.text-white`).contains(`About us`);
    }

}

export default CompanyPage;