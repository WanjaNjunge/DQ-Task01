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

  
  it('Test radio button selection and dependent actions.', () => {
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

    
    cy.get('label#dfsa_are_describestheactivities_label')
      .should('be.visible')
      .and('contain', 'Which best describes the activities that the potential applicant intends to undertake: ');
    
    
    cy.get('#dfsa_are_describestheactivities_0').check();

    // Assert that the relevant fields/actions are triggered
    cy.get('label#dfsa_are_isthepotentialapplicantcurrently_label')
    .should('be.visible')
    .and('contain', 'Is the potential applicant currently regulated to provide Financial Services or is an entity within its group currently licensed to provide regulated Financial Services?');

    // Select the second radio button option
    cy.get('#dfsa_are_describestheactivities_1').check();

    // Assert that the relevant fields/actions are triggered
    cy.get('label#dfsa_thefollowingdescribestheproposedservices_label')
    .should('be.visible')
    .and('contain', 'Which of the following describes the proposed services the DNFBP will provide:');

    // Select the third radio button option
    cy.get('#dfsa_are_describestheactivities_2').check();

    // Assert that the relevant fields/actions are triggered
    cy.get('p#are_ei_1')
    .should('not.contain', 'Which of the following describes the proposed services the DNFBP will provide:');

    // Select the fourth radio button option
    cy.get('#dfsa_are_describestheactivities_3').check();

    // Assert that the relevant fields/actions are triggered
    cy.get('p#are_ei_8').should('contain.text', 'Please state the Crypto Token(s) that would be associated with the financial service or activities provided.');

  });

  });
  
