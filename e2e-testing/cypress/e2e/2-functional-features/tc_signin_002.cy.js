describe('Form Logic Functionality', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
     return false;
   });
 
   beforeEach(() => {
     // Visit the page that contains the form
     cy.visit(`${Cypress.env('baseUrl')}`);
 
     // Ensure jQuery is loaded
     cy.window().then((win) => {
       if (!win.jQuery) {
         throw new Error('jQuery is not loaded');
       }
     });
   });
 
   it('should navigate to the E-Portal and log in with invalid credentials', () => {

    // Click the "Sign In" dropdown to open it
    cy.get('.usermenu .username').first().should('be.visible').click({ force: true });

    // Click the "E-Portal" link
    cy.get('.dropdown-content a[href="https://eportal.dfsa.ae/dana-na/auth/url_8vGZDfDdymhUXC0e/welcome.cgi"]')
      .should('have.attr', 'target', '_blank')
      .and('contain.text', 'E-Portal')
      .then($link => {
        
        const href = $link.prop('href');

        // Visit the E-Portal page
        cy.visit(href);
      });

    // Wait for the form to be visible
    cy.get('form#frmLogin_4').should('be.visible');

    // Fill out the login form with invalid credentials
    cy.get('input#username').type('invalid_username');
    cy.get('input#password').type('invalid_password');

    // Submit the login form
    cy.get('input#btnSubmit_6').click();

     // Assert that an error message is displayed
     cy.get('#table_LoginPage_5')
     .should('be.visible')
     .and('contain.text', 'Invalid username or password. Please re-enter your user information.');
  });
 
 
 
   })
   