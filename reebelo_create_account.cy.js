import {example_users} from '../fixtures/example_users.json'

//Create a new user
describe('Create a new user', function() {
  beforeEach(function(){
    cy.fixture('example_users').then(userDetails => {
      this.userDetails = userDetails
    })
  })
  it('Access the rebeelo.com.au main page', () => {
      cy.visit('https://www.reebelo.com.au')
         })
//Click the account button to expand it
it('Click the account button to expand it',() => {
  cy.get('.header__action-item-content > .header__action-item-link').click()
})
//Select the "Create Account Option" and the user is redirected to the "Register" page
it('Click create account link from the options',() => {
cy.get('#header-login-panel > .popover__inner > .popover__secondary-action > :nth-child(1) > .link').click()  
cy.wait(2000)
cy.url().should('contain','register')
})
//Populates the fields with valid information
it('Populates the fields with valid information', function() {
  cy.get('#RegisterForm-FirstName').type(this.userDetails.name)
  cy.get('#RegisterForm-LastName').type(this.userDetails.last_name)
//Generate a random email to ensure that the it would be valid
  var random_email = 'reebelos+'+ Cypress._.random(0, 1e6)+'@gmail.com'
 cy.get('#RegisterForm-email').type(random_email)
  cy.get('#RegisterForm-password').type(this.userDetails.password)
})
//Click the "Create my Account button"
  it('Clicks the "Create my account" button',() => {
  cy.get('.register-btn').click()
})
//Log out of the user just created
it('Clicks the "Account button" and selects "Logout"',() => {
  cy.get('.header__action-item-content > .header__action-item-link').click()
  cy.get('[href="/account/logout"]')
})
})