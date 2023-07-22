const elements = {
    firstNameInput: () => cy.get('input[name=firstName]'),
    lastNameInput: () => cy.get('input[name=lastName]'),
    nextButton: () => cy.get('button').contains('Next')
};

const inputFirstName = (firstName: string): void => {
    elements.firstNameInput().type(firstName);
};

const inputLastName = (lastName: string): void => {
    elements.lastNameInput().type(lastName);
};

const proceedNext = (): void => {
    elements.nextButton().click();
};

export default {
    inputFirstName,
    inputLastName,
    proceedNext
};
