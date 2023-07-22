import pages from '../pages';

describe('template spec', () => {
    it('passes example test', () => {
        cy.visit('https://www.simplyhealth.co.uk');

        cy.acceptAllCookies();

        pages.landing.getHealthPlan();
        pages.healthPlan.chooseHealthPlan();
        
        pages.buildPlan.elements.coverageText()
            .should(
                'have.text',
                'You only'
            );

        pages.buildPlan.addFamily();
        pages.buildPlan.addSpouse();
        pages.buildPlan.saveAndClose();
        
        pages.buildPlan.elements.coverageText()
            .should(
                'have.text',
                'You and your partner'
            );

        pages.buildPlan.choosePlan();

        pages.aboutYou.inputFirstName('John');
        pages.aboutYou.inputLastName('Doe');
        pages.aboutYou.proceedNext();

        pages.dateOfBirth.inputDobDay('01');
        pages.dateOfBirth.inputdobMonth('01');
        pages.dateOfBirth.inputdobYear('1999');
        pages.dateOfBirth.proceedNext();
    });
});
