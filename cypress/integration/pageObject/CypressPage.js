

class HomePage{
     
    scrollToLovedByText(){
        cy.contains(`Loved by`).scrollIntoView();
        cy.wait(500);
    }

    validateWeeklyDownloadNumberVisiable(){
        cy.get(`div>div[class^='font-bold']`).eq(0).should(`be.visible`);
    }

}

export default HomePage;