describe('Authorisation Registration Recognition Form - Required Field Validation', () => {
   Cypress.on('uncaught:exception', (err, runnable) => {
  
    return false;
  });

  beforeEach(() => {
    // Visit the page that contains the form
    cy.visit('https://dfsadev.digitalqatalyst.com/make-an-enquiry/authorisation-registration-recognition/');

    // Ensure jQuery is loaded
    cy.window().then((win) => {
      if (!win.jQuery) {
        throw new Error('jQuery is not loaded');
      }
    });
  });

  
  it('Verify error messages for invalid data types input.', () => {
    // Enter invalid data types for each field and verify error messages

    
    cy.get('input#dfsa_are_suggestedcompanyname').type('12345'); 

   
    cy.get('input#dfsa_are_yourname').clear().type('12345');

    
    cy.get('input#dfsa_arre_yourlastname').clear().type('67890'); 

    
    cy.get('input#dfsa_are_yourtelephonenumber').clear().type('abcd'); 

    
    cy.get('input#dfsa_are_youremail').clear().type('invalid-email'); 

    
    cy.get('input#dfsa_are_dateforfutureapplication_datepicker_description').clear().type('invalid-date'); 

    
    cy.get('input#NextButton').click();

    // Verify that the validation summary is visible
    cy.get('#ValidationSummaryEntityFormView').should('be.visible');

    // Verify the error messages for each required field
    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_dateforfutureapplication"]')
      .should('contain', 'Suggested date for future application must have a valid date format. Example: 20-05-2024 ');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_youremail"]')
      .should('contain', 'Your email must be a valid email address. ');
    
    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_suggestedcompanyname"]')
      .should('contain', 'Suggested company name is a required field.');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_yourname"]')
      .should('contain', 'Your first name  is a required field. ');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_arre_yourlastname"]')
      .should('contain', 'Your last name is a required field.');

    cy.get('#ValidationSummaryEntityFormView ul li a[referencecontrolid="dfsa_are_yourtelephonenumber"]')
      .should('contain', 'Your telephone number is a required field.');
  });

  });
  