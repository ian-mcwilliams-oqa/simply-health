const elements = {
    getPlanButton: () => cy.get('a').contains('Get a health plan')
};

const getHealthPlan = (): void => {
    elements.getPlanButton().click();
};

export default {
    getHealthPlan
};
