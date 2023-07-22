const elements = {
    addFamilyButton: () => cy.get('a').contains('Add your family'),
    addSpouseYesButton: () => cy.get('button').contains('Yes'),
    choosePlanButton: () => cy.get('a').contains('Choose this plan'),
    coverageText: () => cy.get('#sh-coverage-text'),
    saveAndCloseButton: () => cy.get('button').contains('Save and Close')
};

const addFamily = (): void => {
    elements.addFamilyButton().click();
};

const addSpouse = (): void => {
    elements.addSpouseYesButton().click();
};

const choosePlan = (): void => {
    elements.choosePlanButton().click();
};

const saveAndClose = (): void => {
    elements.saveAndCloseButton().click();
};

export default {
    addFamily,
    addSpouse,
    choosePlan,
    elements,
    saveAndClose
};
