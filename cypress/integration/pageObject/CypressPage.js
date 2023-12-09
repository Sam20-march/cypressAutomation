// Page object for Cypress Home page

class CypressPage {
     
    // Scroll to Loved by OSS,trusted by Enterprise
    scrollToLovedByText(){
        cy.contains(`Loved by`).scrollIntoView();
        cy.wait(500);
    }

    // Check weekly download number is visiable
    validateWeeklyDownloadNumberVisiable(){
        cy.get(`div>div[class^='font-bold']`).eq(0).should(`be.visible`);
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

export default CypressPage;