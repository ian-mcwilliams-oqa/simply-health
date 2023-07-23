# Simply Health Cypress Tests

In order to satisfy the required coverage, two directories contain test specifications - e2e and api.

## E2E Tests

The e2e tests contain examples of Cypress usage of support commands (to accept cookies) and implements a Page Object Model, as per standard practise.

In addition, an example package.json script (test:ci) has been added which would represent the script that would be called by the CI build step to execute the tests.

## API Tests

API tests are focussed on validating realistic usecases and any setup steps would be employed to set the initial test state. Configuration as required would ensure that the test database reverts to a defined state after each test runs.

Examples used here show the basic usage with Cypress.

Considering the automation of syncing with the openapi spec was an interesting challenge, I reviewed resources such as:

https://www.npmjs.com/package/@openapitools/openapi-generator-cli
https://www.npmjs.com/package/jest-openapi

Both interesting but not getting the job done - the generator suggests it can include tests but I wasn't quickly able to resolve the right actions to do so.

As the JSON/YAML for the petstore example is availble it's an easy step to think that synchronisation should be pretty easy and clearly offers great benefits.

Scripts added to package.json show the example setup for the tests to run.

## Appendices

### Appendix 1: Original challenge text

QA Engineering Challenge

Context
You are a senior member of a team tasked with writing a test suite to validate the quality of a web app during development and into production. The app consists of a React (using Typescript) frontend and a NodeJS (using Typescript) backed producing RESTful APIs.
These APIs are deployed on AWS Lambda, behind an API Gateway.

You have been tasked with setting up the testing frameworks, but the webpage is not yet ready so you choose to test on a different website,  https://www.simplyhealth.co.uk/  can be used for this exercise.
For API testing examples, please use the Petstore example - https://petstore.swagger.io/. The full openapi spec is available here: https://petstore.swagger.io/v2/swagger.yaml


Challenge
Develop a basic test suite for automated testing the frontend UI of the website. The test suite does not need to be comprehensive but should demonstrate some key aspects of the setup. 
This should use a cypress framework and be written in Typescript (or JS where necessary)
These tests must be runnable as part of a CICD pipeline i.e. headless ability. Building the CICD pipeline is NOT necessary for this challenge
Develop a basic test suite for automated testing of the backend APIs using Typescript (or JS where necessary). The test suite does not need to be comprehensive but should demonstrate key aspects of the setup
Consider using openapi spec to create/update the tests if possible to ensure the tests and APIs are kept in sync 