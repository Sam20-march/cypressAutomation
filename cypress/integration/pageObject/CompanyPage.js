class CompanyPage{
     
    clickOnCompanyOption(){
        cy.get(`a#dropdownCompany`).click();
        cy.url().should(`include`,`about-us`);
    }

    clickOnAboutCypressOption(){
        cy.get(`.flex.flex-col>.font-primary`).invoke(`show`).contains(`About Cypress`).click({force: true});
        cy.get(`h1.text-white`).contains(`About us`);
    }

}

export default CompanyPage;