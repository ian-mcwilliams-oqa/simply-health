const elements = {
    dobDay: () => cy.get('input[name=dateOfBirth.day]'),
    dobMonth: () => cy.get('input[name=dateOfBirth.month]'),
    dobYear: () => cy.get('input[name=dateOfBirth.year]'),
    nextButton: () => cy.get('button').contains('Next')
};

const inputDobDay = (dobDay: string): void => {
    elements.dobDay().type(dobDay);
};

const inputdobMonth = (dobMonth: string): void => {
    elements.dobMonth().type(dobMonth);
};

const inputdobYear = (dobYear: string): void => {
    elements.dobYear().type(dobYear);
};

const proceedNext = (): void => {
    elements.nextButton().click();
};

export default {
    inputDobDay,
    inputdobMonth,
    inputdobYear,
    proceedNext
};
