import {example_users} from '../fixtures/example_users.json'

//Sign up to the user account from the main page
describe('Sign up to the user account from the main page', function() {
  beforeEach(function(){
    cy.fixture('example_users').then(userDetails => {
      this.userDetails = userDetails
    })
  })
  it('Access the rebeelo.com.au main page', () => {
      cy.visit('https://www.reebelo.com.au/')
         })
   //Sign up to the user account from any page
   it('Click the account button to expand it',function (){      
   cy.get('.header__action-item--account').click()
   cy.get('#login-customer\\[email\\]').type(this.userDetails.email)
   cy.get('#login-customer\\[password\\]').type(this.userDetails.password)
   cy.get('#header_customer_login > .form__submit').click()
   cy.url().should('contain','account')
})
})
describe('Login to the user account from the signup page', function() {
    beforeEach(function(){
      cy.fixture('example_users').then(userDetails => {
        this.userDetails = userDetails
      })
    })
  //User populates the sign up information from the sign up page
  it('Navigate to the sign up page',function (){
    cy.visit('https://www.reebelo.com.au/account/login')
    cy.get('#customer\\[email\\]').type(this.userDetails.email)
    cy.get('#customer\\[password\\]').type(this.userDetails.password)
    cy.get('#customer_login > .form__submit').click()
    cy.url().should('contain','account')
  })
})

