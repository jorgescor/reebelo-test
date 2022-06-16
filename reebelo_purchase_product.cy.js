import {example_users} from '../fixtures/example_users.json'

describe
//Access the reebelo.com.au page
describe('Purchase', function() {
  beforeEach(function(){
    cy.fixture('example_users').then(userDetails => {
      this.userDetails = userDetails
    })
  })
  it('Access the rebeelo.com.au main page', () => {
      cy.visit('https://www.reebelo.com.au')
         })
//Select the iPhones category
it('Select the iPhones category',() => {
  cy.get(':nth-child(1) > .nav-bar__link').click()
  cy.url().should('contain','apple-iphone')
})
//Select iPhone 13 product group
it('Select iPhone 13 product group',() => {
  cy.get('.apple-iphone-13').should('be.visible').click()
  cy.url().should('contain','apple-iphone-13')
})
//Choose 512GB, Color Midnight and "Brand New" Condition
it('Choose 512GB, Color Midnight and "Brand New" Condition',() => {
  cy.get('[value="Storage_512GB"]').click()
  cy.get('[value="Color_Midnight"]').click()
  cy.get('.custom-filter > [value="Condition_Brand New"]').click()
  cy.get('.product-form__payment-container > .payment_button_cta > #BuyItNow')
  .contains('Buy it now')
  .should('be.visible')
  .click()
})
//Fill up the required details
it('Fill up the user details and click the continue button', function() {
  cy.url().should('contain','checkouts')
    cy.get('#checkout_email').type(this.userDetails.email)
    cy.get('#checkout_shipping_address_first_name').type(this.userDetails.name)
    cy.get('#checkout_shipping_address_last_name').type(this.userDetails.last_name)
    cy.get('#checkout_shipping_address_address1').type(this.userDetails.address)
    cy.get('#checkout_shipping_address_city').type(this.userDetails.suburb)
    cy.get('#checkout_shipping_address_province').select(this.userDetails.state)
    cy.get('#checkout_shipping_address_zip').type(this.userDetails.post_code)
    cy.get('#checkout_shipping_address_phone').type(this.userDetails.phone)
  cy.get('#continue_button').click()
})
//Verify that the Contact and Shipping information are correct, also choose a shipping method
it('Verify that the Contact and Shipping information are correct',function() {
  cy.get('.content-box__row > :nth-child(1)').should('contain',this.userDetails.email)
  cy.get(':nth-child(1) > .content-box > .content-box__row').should('contain',this.userDetails.address_total)
  cy.get('#continue_button')
  .should('be.visible').click()
})
})