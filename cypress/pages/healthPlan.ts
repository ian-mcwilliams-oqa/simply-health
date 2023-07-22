const elements = {
    choosePlanButton: () => cy.get('a').contains('Choose your plan')
};

const chooseHealthPlan = (): void => {
    elements.choosePlanButton().click();
};

export default {
    chooseHealthPlan
};
