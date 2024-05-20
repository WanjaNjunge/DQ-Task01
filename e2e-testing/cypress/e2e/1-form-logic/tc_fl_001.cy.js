describe('Form Logic Functionality', () => {
   // Prevent Cypress from failing the test on uncaught exceptions
   Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false;
  });

  beforeEach(() => {
    // Visit the page that contains the form
    cy.visit(`${Cypress.env('baseUrl')}/make-an-enquiry/authorisation-registration-recognition/`);

  
    cy.window().then((win) => {
      if (!win.jQuery) {
        throw new Error('jQuery is not loaded');
      }
    });
  });

    it('Verify that the form loads correctly.', () => {

      // Check for the presence of the form's introduction section
      cy.get('#are_i_1').should('exist');
      cy.get('#are_i_1 h3').contains('Introduction');
      cy.get('#are_i_1 p').contains('Thank you for your interest seeking DFSA Authorisation, Registration or Recognition. To assist us, please complete the short survey below.');
      
      
      cy.get('input#dfsa_are_suggestedcompanyname').should('be.visible');
      cy.get('label#dfsa_are_suggestedcompanyname_label').contains('Suggested company name');
      
      
      cy.get('input#dfsa_are_yourname').should('be.visible');
      cy.get('label#dfsa_are_yourname_label').contains('Your first name');
      
      
      cy.get('input#dfsa_arre_yourlastname').should('be.visible');
      cy.get('label#dfsa_arre_yourlastname_label').contains('Your last name');
      
      
      cy.get('input#dfsa_are_yourtelephonenumber').should('be.visible');
      cy.get('label#dfsa_are_yourtelephonenumber_label').contains('Your telephone number');
      
     
      cy.get('input#dfsa_are_youremail').should('be.visible');
      cy.get('label#dfsa_are_youremail_label').contains('Your email');
      
      
      cy.get('input#dfsa_are_dateforfutureapplication_datepicker_description').should('be.visible');
      cy.get('label#dfsa_are_dateforfutureapplication_label').contains('Suggested date for future application');

      
      cy.get('input#NextButton').should('be.visible');
      cy.get('input#NextButton').should('have.value', 'Next');
  });



  })
  