describe('Login Functionality', () => {
  before(() => {
    // Visit the login page before running the tests
    cy.visit('https://practicetestautomation.com/practice-test-login');
  });

  it('should successfully log in with valid credentials', () => {
    cy.get('#username')
      .should('exist')
      .type('student');
    cy.get('#password')
      .should('exist')
      .type('Password123');
    cy.get('#submit').click();
    
    // Assert that the user is redirected to the correct page
    cy.url().should('include', '/practice-test-login');
    
    // Verify successful login by checking for a specific element or text
    cy.get('h1').should('contain.text', 'Logged In Successfully');
    cy.get('strong').should('contain.text', 'Congratulations student. You successfully logged in!');
  });

  after(() => {
    cy.log('Test Complete');
  });
]});
