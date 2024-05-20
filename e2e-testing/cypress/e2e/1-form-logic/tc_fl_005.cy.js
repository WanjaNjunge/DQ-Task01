describe('Authorisation Registration Recognition Form - Required Field Validation', () => {
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

  
  it('Test form submission with all valid inputs', () => {
    // Fill in all fields with valid data

  
    cy.get('input#dfsa_are_suggestedcompanyname')
      .clear()
      .type('Valid Company Name');

   
    cy.get('input#dfsa_are_yourname')
      .clear()
      .type('John');

   
    cy.get('input#dfsa_arre_yourlastname')
      .clear()
      .type('Doe');

    
    cy.get('input#dfsa_are_yourtelephonenumber')
      .clear()
      .type('1234567890');

   
    cy.get('input#dfsa_are_youremail')
      .clear()
      .type('valid.email@example.com');

    
    cy.get('input#dfsa_are_dateforfutureapplication_datepicker_description')
      .clear()
      .type('20-12-2024');
    
    
    cy.get('input#NextButton').click();

    // Verify form submission was successful
    cy.get('label#dfsa_are_describestheactivities_label')
      .should('be.visible')
      .and('contain', 'Which best describes the activities that the potential applicant intends to undertake: ');

    // Select the fourth radio button option
    cy.get('#dfsa_are_describestheactivities_3').check();

    // Assert that the relevant fields/actions are triggered
    cy.get('#are_ei_8').should('contain.text', 'Please state the Crypto Token(s) that would be associated with the financial service or activities provided.');

    //Select first checkbox
    cy.get('#dfsa_are_psct_bitcoin_btc').check();

    cy.get('input#NextButton').click();

     // Verify the next button
     cy.get('.form-action-container-right button').should('exist').click();

    

  });

  });
  
