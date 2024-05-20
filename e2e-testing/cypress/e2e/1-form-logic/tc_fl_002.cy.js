describe('Functionality Registration Recognition Form - Required Field Validation', () => {
   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false;
  });

  beforeEach(() => {
    // Visit the page that contains the form
    cy.visit(`${Cypress.env('baseUrl')}/make-an-enquiry/authorisation-registration-recognition/`);

  

    // Ensure jQuery is loaded
    cy.window().then((win) => {
      if (!win.jQuery) {
        throw new Error('jQuery is not loaded');
      }
    });
  });

  
   it('Check form validation for required fields.', () => {
    // Click the submit button without filling the form
    cy.get('input#NextButton').click();

    // Verify that the validation summary is visible
    cy.get('#ValidationSummaryEntityFormView').should('be.visible');

    // Verify the error messages for each required field
    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_suggestedcompanyname"]')
      .should('contain', 'Suggested company name is a required field.');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_yourname"]')
      .should('contain', 'Your first name  is a required field. ');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_arre_yourlastname"]')
      .should('contain', 'Your last name is a required field.');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_yourtelephonenumber"]')
      .should('contain', 'Your telephone number is a required field.');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_youremail"]')
      .should('contain', 'Your email is a required field.');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_dateforfutureapplication"]')
      .should('contain', 'Suggested date for future application is a required field.');
  });
  });
  