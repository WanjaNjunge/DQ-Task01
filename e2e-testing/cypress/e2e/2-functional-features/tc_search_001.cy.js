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
 
   it('should load the form correctly', () => {
    // Click on the search icon or input to activate the search field
    cy.get('#search').should('exist').click();

    // Wait for the search input field to be visible
    cy.get('.d-xs-block > .nav-item > .dropdown-menu > .form-search > .input-group > #q').should('be.visible').wait(1000); 

    // Type 'market' into the search input field
    cy.get('.d-xs-block > .nav-item > .dropdown-menu > .form-search > .input-group > #q').clear().type('market{enter}');

    // Assert that the search results are displayed correctly
    cy.get('.search-results').should('exist');
    cy.get('.search-results').should('contain.text', 'market');
  });

  it('should handle empty searches gracefully', () => {
    // Perform an empty search
    cy.get('#search').should('exist').click();
    cy.get('.d-xs-block > .nav-item > .dropdown-menu > .form-search > .input-group > #q').clear().type('{enter}');

    // Assert that the page handles empty searches gracefully
    // For example, you can check if a message indicating no results were found is displayed
    cy.get('.no-results').should('exist');
  });
 
 
 
   })
   