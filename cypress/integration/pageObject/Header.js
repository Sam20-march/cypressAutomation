// Header will act as base class where other User can navigate to their desire page

class Header {

    // Will return Product page element
    getProduct(){
        return cy.getPage(`a#dropdownProduct`);
    }

    // Will return Company page element
    getCompany(){
        return cy.getPage(`a#dropdownCompany`);

    }

    // Will Copy Cypress installation command
    getCypressInstall(){
        cy.get(`button[data-cy="header-install"]`).click();
        cy.get(`button[data-cy="modal-install-copy"]`).click();
        cy.wait(2000)
        cy.get(`button[data-cy="modal-install-copy"]`).should('have.text','npm install cypress')
        cy.assertValueCopiedToClipboard('npm install cypress --save-dev')
    }

}

export default Header;