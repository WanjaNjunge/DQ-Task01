# DQ-Task01 End-to-end Testing with Cypress

This repository contains end-to-end testing scripts focused on fuctional test cases.

## Setup

### Prerequisites

- Git installed on your machine

### Clone the Repository

Clone this repository to your local machine and navigate to the repo:

```bash
git@github.com:WanjaNjunge/DQ-Task01.git
```

### End-to-end Testing with GitHub Actions
The repository includes e2e automated testing suite for the site. The tests are written in JS and they run in Cypress.


## Getting Set Up for running tests

### Installation
- Requires node v18+

```bash
npm install
``` 
will install the current cypress version the tests are written and running in. 

Check out [Cypress.io](cypress.io) for more information

### Running the tests
Once cypress is set up and running, simply open the runner and click on individual tests to run.
Tests can be run in headless mode in the terminal using the default command:

```bash
npx cypress run
```

To launch the cypress test runner, use the command:
```bash
npm run cy:open
```
This will launch the test runner laying out available tests, and individual tests can be run on a browser on a visual interface.

### Test Cases
Here are the test cases alongside the test files:
1. Form Logic functionality
   
 [Verify that the "Authorisation Registration Recognition" form loads correctly](e2e-testing/cypress/e2e/1-form-logic/tc_fl_001.cy.js)

 [Check form validation for required fields.](e2e-testing/cypress/e2e/1-form-logic/tc_fl_002.cy.js)
 
 [Verify error messages for invalid data types input.](e2e-testing/cypress/e2e/1-form-logic/tc_fl_003.cy.js)
 
 [Test radio button selection and dependent actions.](e2e-testing/cypress/e2e/1-form-logic/tc_fl_004.cy.js)
 
 [Test form submission with all valid inputs.](e2e-testing/cypress/e2e/1-form-logic/tc_fl_005.cy.js)

3. Other functionality
   
 [Validate search functionality.](e2e-testing/cypress/e2e/2-functional-features/tc_search_001.cy.js)

 [Verify error messages for sign in invalid inputs](e2e-testing/cypress/e2e/2-functional-features/tc_signin_002.cy.js)



